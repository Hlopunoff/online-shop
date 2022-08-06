import React from 'react'
import BouquetList from '../components/bouquetList/BouquetList';
import Gallery from '../components/gallery/Gallery';
import Options from '../components/options/Options';
import PromoSection from '../components/promoSection/PromoSection';

const MainPage = () => {
  return (
    <main className="main">
        <PromoSection/>
        <BouquetList title='Букеты цветов с доставкой'/>
        <BouquetList title='Лучшие предложения'/>
        <BouquetList title='Новинки'/>
        <Options/>
        <Gallery/>
    </main>
  )
}


export default MainPage;