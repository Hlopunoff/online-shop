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
import SingleBouquetPage from "./pages/sigleBouquetPage/SingleBouquetPage";
import Page404 from "./pages/404Page/Page404";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/roses" element={<CatalogPage/>}/>
        <Route path="/roses/:id" element={<SingleBouquetPage/>}/>
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
        <Route path="*" element={<Page404/>}/>
      </Routes>
      <Footer/>
      <Cart/>
    </>
  );
}

export default App;
