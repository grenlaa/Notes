import axios from 'axios';
import { post } from 'jquery';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'


//страницы админки
import ControlNav from './templates/block/ControlNav';
import Notes from './pages/Notes'
import CkeditorCard from './components/card/CkeditorCard';

function App() {
  return (
      
      <BrowserRouter>
      <ControlNav></ControlNav>
        <Routes>
          <Route path="/Notes" element={<Notes />}></Route>
          <Route path="/cked" element={<CkeditorCard />}></Route>
          <Route path="*" element={<Navigate to="/Notes" />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
