import { useHistory } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 220px;
  width: 220px;
  border-radius: 60px;
  border: 1px solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
`;
const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  text-align: center;
`;
const Container = styled.div`
  border: 2px solid black;
  border-radius: 60px;
  height: 500px;
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #3e6053;
  margin-left: 10px;
`;

const Header = styled.h3`
  padding-bottom: 40px;
`;

const Button = styled.button`
  background-color: #3e6053;
  padding: 0.35em 1.2em;
  border: 0.1em solid #c16757;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
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

const Paragraph = styled.p`
  font-size: 10px;
`;

const Loading = () => <p>Loading...</p>;

const GenerateDish = () => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const routeChange = () => {
    const path = '/PickDrink';
    history.push(path);
  };

  const [dish, setDish] = useState([]);

  const getDish = async () => {
    const result = await axios.get(
      'https://themealdb.com/api/json/v1/1/random.php'
    );
    setDish(result.data.meals[0]);
    setLoading(false);
  };

  const reservation = () => {
    let order = JSON.parse(localStorage.getItem('order'));
    if (!order) {
      order = [];
    }
    order.push(dish.strMeal);
    localStorage.setItem('order', JSON.stringify(order));
    routeChange();
  };

  useEffect(() => {
    getDish();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header>{dish.strMeal}</Header>
        {loading && <Loading />}
        {!loading && <Image src={dish.strMealThumb} alt='' />}
        <Button onClick={getDish}>Generate new dish!</Button>
        <Paragraph>
          If you are happy with the random dish, click on `Choose dish`
        </Paragraph>
        <Button onClick={reservation}>Choose dish</Button>
      </Container>
    </Wrapper>
  );
};

export default GenerateDish;
