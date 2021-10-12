import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid black;
  border-radius: 60px;
  height: 400px;
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #3e6053;
  margin-left: 10px;
`;

const List = styled.li`
  list-style: none;
  margin-left: 10px;
  margin-top: 5px;
`;
const Header = styled.h2`
  text-align: center;
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
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Receipt = () => {
  const [finishOrder, setFinishOrder] = useState([]);
  const history = useHistory();

  const routeChange = () => {
    const path = '/';
    history.push(path);
  };

  const getReceipt = async () => {
    const result = await JSON.parse(localStorage.getItem('order'));
    setFinishOrder(result);
    console.log(finishOrder);
  };

  useEffect(() => {
    getReceipt();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header>Order confirmation</Header>
        <List>
          <li>Dish: {finishOrder[0]}</li>
          <li>Beverage: {finishOrder[1]}</li>
          <li>Guests: {finishOrder[2]}</li>
          <li>Date: {finishOrder[3]}</li>
          <li>Email: {finishOrder[4]}</li>
        </List>
        <Button type='button' onClick={routeChange}>
          Home
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Receipt;
