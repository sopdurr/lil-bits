import axios from 'axios';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Button = styled.button`
  text-align: center;
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

const Image = styled.img`
  height: 50px;
`;

const Header = styled.h2`
  text-align: center;
`;

const SubHeader = styled.h5`
  text-align: center;
`;

const PickDrink = () => {
  const history = useHistory();

  const routeChange = () => {
    const path = '/DateAndGuests';
    history.push(path);
  };

  const [drink, setDrink] = useState([]);

  const pickDrink = async () => {
    const result = await axios.get('https://api.punkapi.com/v2/beers');
    setDrink(result.data);
  };

  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const { checked, value } = event.currentTarget;

    setSelected((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
 
  };

  const reservation = () => {
    let order = JSON.parse(localStorage.getItem('order'));
    if (!order) {
      order = [];
    }
    order.push(selected);
    localStorage.setItem('order', JSON.stringify(order));
    setDrink(null);
    routeChange();
  };

  useEffect(() => {
    pickDrink();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header>Beverages</Header>
        <SubHeader>
          <Button type='button' onClick={reservation}>
            Choose drinks
          </Button>
        </SubHeader>
        <Box sx={{ height: '590px', overflow: 'scroll' }}>
          {drink.map((drink) => (
            <Paper
              sx={{
                maxWidth: 400,
                my: 1,
                mx: 'auto',
                p: 2,
                backgroundColor: '#3e6053',
              }}
              key={drink.id}
            >
              <Grid container wrap='nowrap' spacing={2}>
                <Grid item>
                  <Avatar>
                    <Image src={drink.image_url} />
                  </Avatar>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography noWrap>
                    <label htmlFor={drink.id}>{drink.name}</label>
                    <input
                      checked={selected.some((val) => val === drink.name)}
                      onChange={handleChange}
                      value={drink.name}
                      id={drink.id}
                      type='checkbox'
                    />
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default PickDrink;
