import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Form, FormGroup, Button } from "reactstrap";
import { format } from 'date-fns';

const cityToIata = {
  "Hyderabad": "HYD",
  "Guwahati": "GAU",
};

const SearchBar = () => {
  const navigate = useNavigate();

  const LocationRef = useRef('');
  const DestinationRef = useRef('');
  const DeparturedateRef = useRef('');
  const ReturndateRef = useRef('');
  const NoofpeopleRef = useRef('');

  const formatDate = (date) => format(new Date(date), 'yyyy-MM-dd');

  const searchHandler = (e) => {
    e.preventDefault();
    const Location = LocationRef.current.value;
    const Destination = DestinationRef.current.value;
    const Departuredate = DeparturedateRef.current.value ? formatDate(DeparturedateRef.current.value) : '';
    const Returndate = ReturndateRef.current.value ? formatDate(ReturndateRef.current.value) : '';
    const Noofpeople = NoofpeopleRef.current.value;

    if (Location === '' || Departuredate === '' || Noofpeople === '') {
      return alert("Some fields are missing!");
    } else if (Noofpeople === '0') {
      return alert("No of people should be greater than 0!");
    }

    const locationIata = cityToIata[Location] || Location;
    const destinationIata = cityToIata[Destination] || Destination;

    navigate('/SearchResultList', {
      state: {
        location: locationIata,
        destination: destinationIata,
        departureDate: Departuredate,
        returnDate: Returndate,
        noOfPeople: Noofpeople
      }
    });
  };

  return (
    <div className="search_bar">
      <Form onSubmit={searchHandler}>
        <FormGroup className="d-flex align-items-center gap-2">
          <div className="input-group">
            <label htmlFor="fromInput" className="input-group-text1">
              <h4>From</h4>
            </label>
            <input
              type="text"
              id="fromInput"
              placeholder="Starting point"
              className="form-control"
              ref={LocationRef}
            />
          </div>

          <div className="input-group">
            <label htmlFor="toInput" className="input-group-text1">
              <h4>To</h4>
            </label>
            <input
              type="text"
              id="toInput"
              placeholder="Destination"
              className="form-control"
              ref={DestinationRef}
            />
          </div>

          <div className="input-group">
            <label htmlFor="departureDateInput" className="input-group-text">
              <h3>Departure date</h3>
            </label>
            <input
              type="date"
              id="departureDateInput"
              placeholder="What date are you going"
              className="form-control"
              ref={DeparturedateRef}
            />
          </div>

          <div className="input-group">
            <label htmlFor="returnDateInput" className="input-group-text">
              <h3>Return date</h3>
              <p>(Round trip)</p>
            </label>
            <input
              type="date"
              id="returnDateInput"
              placeholder="When are you coming back"
              className="form-control"
              ref={ReturndateRef}
            />
          </div>

          <div className="input-group">
            <label htmlFor="peopleInput" className="input-group-text">
              <h3>No. of People</h3>
            </label>
            <input
              type="number"
              id="peopleInput"
              placeholder="No. of people"
              className="form-control"
              ref={NoofpeopleRef}
            />
          </div>
        </FormGroup>

        <Button className="btn btn-primary search_icon" type="submit">
          Search Flight
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;

