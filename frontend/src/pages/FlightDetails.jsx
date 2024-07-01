import React from 'react';

const FlightDetails = ({ results }) => {
  return (
    <div>
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

export default FlightDetails;
