import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from './test';
import StdAtdDep from './rv/pages/add/std-atd-dep';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route index element={<StdAtdDep />} />
  </Routes>
</BrowserRouter>
);
