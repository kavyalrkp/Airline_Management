import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import User from "./models/User.js"; 


dotenv.config();
const app = express();
const port = process.env.PORT || 8000;


console.log("MongoDB URI:", process.env.MONGO_URI);

mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        console.log('MongoDB database connection failed');
    }
};

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.post('/api/auth/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({
            username,
            email,
            password: hashedPassword
          });
          await newUser.save();
          res.status(201).json({ message: 'User registered successfully' });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server error' });
        }
      });


app.listen(port, () => {
    connect();
    console.log('Server listening on port', port);
});
