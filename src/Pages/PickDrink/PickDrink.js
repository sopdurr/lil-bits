import axios from 'axios';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Image = styled.img`
  height: 50px;
`;

const Header = styled.h2`
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

  const reservation = (drink) => {
    let order = JSON.parse(localStorage.getItem('order'));
    if (!order) {
      order = [];
    }
    order.push(drink.name);
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
                  <Typography noWrap onClick={() => reservation(drink)}>
                    <span style={{ display: 'block' }}>{drink.name}</span>
                    <span>{drink.tagline}</span>
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
