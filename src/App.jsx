import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import BmiCalculator from './pages/BMICalculator';
import './styles/App.css';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/BMI-Calculator/" element={<Layout />}>
            <Route index element={<Dashboard />}/>
            <Route path='/BMI-Calculator/bmi_calculator' element={<BmiCalculator />}/>
          </Route>
        </Routes>
      </BrowserRouter>
                
    );
};

export default App;
