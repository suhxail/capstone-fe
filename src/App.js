import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GoldRateCalculator from './pages/GoldRateCalculator.jsx';
import SignIn from './components/SignIn';
import ProductList from './components/ProductList';
import SignUp from './components/SignUp';





function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>  
        <Route path='/signup' element={<SignUp/>}/>      
        <Route path='/productlist' element={<ProductList/>}/>
        <Route path='/signin' element={<SignIn/>}/> 
        <Route path='/calculator' element={<GoldRateCalculator/>}/>
        <Route path='/dashboard' element={<productListing/>}/>           
      </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;