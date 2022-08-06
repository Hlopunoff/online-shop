import React from 'react'
import BouquetList from '../components/bouquetList/BouquetList';
import PromoSection from '../components/promoSection/PromoSection';

const MainPage = () => {
  return (
    <main className="main">
        <PromoSection/>
        <BouquetList title='Букеты цветов с доставкой'/>
        <BouquetList title='Лучшие предложения'/>
        <BouquetList title='Новинки'/>
    </main>
  )
}


export default MainPage;