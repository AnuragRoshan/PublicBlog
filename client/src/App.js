// import Banner from './Components/Home/Banner';

import React from 'react';
import './App.css';
import { Box } from '@material-ui/core';
// import component
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import DetailView from './Components/Home/Post/DetailView';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    
    
    <Router>
    <Box style={{marginTop:122}}>
<Navbar/>
    <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/detail">
            <DetailView/>
          </Route>
        </Switch>
    </Box>
    </Router>
  
  );
}

export default App;
