// import Banner from './Components/Home/Banner';

import React from 'react';
import './App.css';
import { Box } from '@material-ui/core';
// import component
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';


function App() {
  return (
    <>
    <Navbar/>
    <Box style={{marginTop:122}}>
   <Home/>
    </Box>
  </>
  );
}

export default App;
