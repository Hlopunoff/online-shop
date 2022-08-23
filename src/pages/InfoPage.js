import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../components/aboutUs/AboutUs';
import Delivery from '../components/delivery/Delivery';
import PageRouting from '../components/pageRouting/PageRouting';
import Payment from '../components/payment/Payment';
import Sidebar from '../components/sidebar/Sidebar';

const infoPage = () => {
  return (
    <main style={{paddingBottom: 80}}>
        <PageRouting direction='О нас'/>
        <section className="info">
            <div className="container">
                <div className="wrap" style={{display: 'flex', columnGap: 45}}>
                    <Sidebar/>
                    <Routes>
                        <Route path='aboutUs' element={<AboutUs/>}/>
                        <Route path='payment' element={<Payment/>}/>
                        <Route path='delivery' element={<Delivery/>}/>
                    </Routes>
                </div>
            </div>
        </section>
    </main>
  )
}

export default infoPage;