import React from "react";
import Header from './components/header/Header';
import {Routes, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
