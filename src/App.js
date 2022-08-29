import React from "react";
import {Routes, Route} from 'react-router-dom';

import Header from './components/header/Header';
import MainPage from "./pages/MainPage";
import Footer from "./components/footer/Footer";
import CatalogPage from "./pages/CatalogPage";
import Cart from "./components/cart/Cart";
import CommentsPage from "./pages/CommentsPage";
import BlogPage from "./pages/BlogPage";
import InfoPage from "./pages/InfoPage";
import AccountPage from "./pages/AccountPage";
import Register from "./components/register/Register";
import Auth from "./hoc/Auth";
import LogIn from "./components/login/LogIn";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/roses" element={<CatalogPage/>}/>
        <Route path="/comments" element={<CommentsPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/info/*" element={<InfoPage/>}/>
        <Route path="/account/*" element={
          <Auth>
            <AccountPage/>
          </Auth>
        }/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
      <Footer/>
      <Cart/>
    </>
  );
}

export default App;
