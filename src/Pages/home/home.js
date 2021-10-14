import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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

const Container = styled.div`
  height: 265px;
  justify-content: center;
  display: flex;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 500px;
  height: 265px;
  overflow: hidden;
  border-radius: 60px;
  border: solid 1px black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SliderImg = styled.img`
  width: 500px;
  height: 265px; ;
`;

const Dot = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 10px;
  height: 10px;
  z-index: 99;
  background: #333;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 0px 5px #fff;
  :hover {
    background-color: #717171;
  }
  :active {
    background-color: #717171;
  }
`;

const ContentBox = styled.div`
  height: 127px;
  width: 380px;
  background-color: #e3e996;
  border-radius: 60px;
  border: solid 1px black;
  margin-left: 10px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 11px;
`;

const GetOrder = styled.div`
  height: 127px;
  width: 380px;
  background-color: #e3e996;
  border-radius: 60px;
  border: solid 1px black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin-left: 10px;
`;

const EmailInput = styled.input`
  font-size: 16px;
  padding: 0.25em 0.5em;
  border: 2px solid #3e6053;
  border-radius: 4px;
  :focus {
    outline-color: #3e6053;
  }
`;

const Home = () => {
  const data = [
    'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    'https://madenimitliv.dk/wp-content/uploads/2018/06/DSC_0004-1-1.jpg',
    'https://insanelygoodrecipes.com/wp-content/uploads/2020/04/Fried_Chicken-1024x536.webp',
  ];

  const [image, setImage] = useState(data[0]);

  const goTo = { email: '' };
  const [state, setState] = useState(goTo);
  const { email } = state;

  const history = useHistory('');

  const routeChange = () => {
    const path = 'GenerateDish/';
    history.push(path);
    localStorage.clear();
  };

  const handleChange = (event) => {
    setState({ ...state, email: event.target.value });
  };

  const emailOrder = () => {
    const result = JSON.parse(localStorage.getItem('order'));
    if (result[4] === email) {
      const path = 'Receipt/';
      history.push(path);
    }
  };

  return (
    <div>
      <Container>
        <SliderContainer>
          <SliderImg src={image} />
          <Dot
            style={{ marginLeft: '-15px' }}
            onClick={() => setImage(data[0])}
          ></Dot>
          <Dot onClick={() => setImage(data[1])}></Dot>
          <Dot
            style={{ marginLeft: '15px' }}
            onClick={() => setImage(data[2])}
          ></Dot>
        </SliderContainer>
        <div>
          <ContentBox>
            <h4>Get your random dish here!</h4>
            <div>Start the journey</div>
            <Button type='button' onClick={routeChange}>
              CLICK HERE
            </Button>
          </ContentBox>
          <GetOrder>
            <h4>Access your last order!</h4>
            <EmailInput
              placeholder='Enter email here'
              value={email}
              type='text'
              onChange={(event) => handleChange(event)}
            />
            <Button type='button' onClick={emailOrder}>
              Get order!
            </Button>
          </GetOrder>
        </div>
      </Container>
    </div>
  );
};

export default Home;
