import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header, Navigation, Footer } from './Components';
import { Home, GenerateDish, PickDrink, DateAndGuests, Receipt } from './Pages';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route path='/PickDrink'>
          <PickDrink />
        </Route>
        <Route path='/GenerateDish'>
          <GenerateDish />
        </Route>
        <Route path='/Receipt'>
          <Receipt />
        </Route>
        <Route path='/DateAndGuests'>
          <DateAndGuests />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
