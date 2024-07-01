import React from "react";
import {Container, Row} from "reactstrap"
const reviews = [
    {
      id: 1,
      name: 'John Doe',
      date: '2023-02-15',
      rating: 5,
      comment: 'Amazing experience! Highly recommend.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      date: '2023-06-14',
      rating: 3,
      comment: 'Great service, but could be improved.',
    },
    {
        id: 3,
        name: 'Bob Johnson',
        date: '2023-01-01',
        rating: 4,
        comment:'Loved the journey'
    }
  ];

  const Reviews = () => {
    return (
    <section>
        <Container>
    <Row>
      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="reviews-list">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <h3>{review.name}</h3>
                <span>{review.date}</span>
              </div>
              <div className="review-rating">
                {'⭐'.repeat(review.rating)}
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
      </Row> 
      </Container>
      </section>
    );
  };
  
  export default Reviews;
  