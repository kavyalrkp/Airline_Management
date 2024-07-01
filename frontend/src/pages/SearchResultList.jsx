import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResultList = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      
      const { location: location2, destination, departureDate, returnDate, noOfPeople } = location.state;
      const apiKey = '0fb144c88128f8a2ec5e8d9ae1f61709';

      const url = `http://api.aviationstack.com/v1/cities?access_key=${apiKey}&dep_iata=${location}&dep_iata=${destination}&flight_date=${departureDate}&flight_date=${returnDate}&flight_date=${noOfPeople}`;

      try {
        const response = await axios.get(url);
        console.log(response.data);
        setResults(response.data.data);
      } catch (error) {
        console.error('Error fetching flight data:', error);
      }
    };

    fetchFlightDetails();
  }, [location.state]);

  return (
    <div>
      <h1>Flight Search Results</h1>
      {results.length > 0 ? (
        results.map((flight, index) => (
          <div key={index}>
            <p>Flight from {flight.departure.iata} to {flight.arrival.iata}</p>
            <p>Departure: {flight.departure.scheduled}</p>
            <p>Arrival: {flight.arrival.scheduled}</p>
            <p>Airline: {flight.airline.name}</p>
            <p>Flight Number: {flight.flight.number}</p>
          </div>
        ))
      ) : (
        <p>No flight details available.</p>
      )}
    </div>
  );
};

export default SearchResultList;
