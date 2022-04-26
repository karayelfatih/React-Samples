import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './routeSample/HomePage';
import AboutPage from './routeSample/AboutPage';
import ContactPage from './routeSample/ContactPage';
import NoMatch from './routeSample/NoMatch';
import ProductList from './APIOperation/ProductList';
import ProductDetail from './APIOperation/ProductDetail';





ReactDOM.render(

  <BrowserRouter>
    <Routes>

      <Route path='/' element={<App />}>

        <Route index element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/products' element={<ProductList />}></Route>
        <Route path='/productdetail/:id' element={<ProductDetail />}> </Route>

        <Route path='*' element={<NoMatch />}></Route>


      </Route>

    </Routes>
  </BrowserRouter>

  ,
  document.getElementById('root')
);