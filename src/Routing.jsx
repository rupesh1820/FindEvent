import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LogSign from './FirstPage/LoginPage/LogSign';
import Footer from './FirstPage/FirstPageComponenet/Footer'
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LogSign/>} />
       
      </Routes>
      <Footer></Footer>
      
    </BrowserRouter>
  );
};

export default Routing;
