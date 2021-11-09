import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

import React, { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Info = styled.input`
  margin-top: 5px;
  font-size: 16px;
  padding: 0.25em 0.5em;
  border: 1px solid #3e6053;
  border-radius: 4px;
  :focus {
    outline-color: #3e6053;
  }
`;

const Button = styled.button`
  background-color: #3e6053;
  padding: 0.35em 1.2em;
  border: 0.1em solid #c16757;
  margin: 0.3em 0.3em 0;
  border-radius: 6px;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #ffffff;
  transition: all 0.2s;
  :hover {
    color: #000000;
    background-color: #c16757;
    border: 0.1em solid #3e6053;
  }
  :disabled {
    background-color: black;
  }
`;

const DateAndGuests = () => {
  const data = {
    email: '',
    guests: '',
  };

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 17)
  );
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const [state, setState] = useState(data);
  const { email, guests } = state;
  const [button, setButton] = useState(true);

  const handleChange = (event) => {
    setState({ ...state, email: event.target.value });
    if (event.target.value.length >= 5) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const changeNumber = (event) => {
    setState({ ...state, guests: parseInt(event.target.value) });
  };

  const history = useHistory();

  const routeChange = () => {
    const path = '/Receipt';
    history.push(path);
  };

  const reservation = () => {
    let order = JSON.parse(localStorage.getItem('order'));
    if (!order) {
      order = [];
    }
    order.push(guests);
    order.push(startDate.toGMTString());
    order.push(email);
    localStorage.setItem('order', JSON.stringify(order));
    routeChange();
  };

  return (
    <Wrapper>
      <div>
        <div>Pick a date and time</div>
        <DatePicker
          minDate={new Date()}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          filterTime={filterPassedTime}
          dateFormat='MMMM d, yyyy h:mm aa'
          minTime={setHours(setMinutes(new Date(), 0), 17)}
          maxTime={setHours(setMinutes(new Date(), 30), 20)}
        />
        <div>
          <Info
            value={guests}
            type='number'
            placeholder='How many guests ?'
            onChange={(event) => changeNumber(event)}
          />
        </div>
        <div>
          <Info
            value={email}
            type='text'
            placeholder='Email'
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div>
          <Button type='button' disabled={button} onClick={reservation}>
            Add information
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default DateAndGuests;
