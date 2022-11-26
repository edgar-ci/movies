import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/movies" />} />
        <Route path="/movies" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
