import React from 'react';

import BouquetList from '../components/bouquetList/BouquetList';
import Gallery from '../components/gallery/Gallery';
import Options from '../components/options/Options';
import PromoSection from '../components/promoSection/PromoSection';
import Comments from '../components/comments/Comments';
import News from '../components/news/News';
import Description from '../components/description/Description';
import Benefits from '../components/benefits/Benefits';

const MainPage = () => {
    return (
      <main className="main">
          <PromoSection/>
          <BouquetList title='Букеты цветов с доставкой' category="delivery"/>
          <BouquetList title='Лучшие предложения' category="best"/>
          <BouquetList title='Новинки' category="new"/>
          <Options/>
          <Gallery/>
          <Comments/>
          <News/>
          <Description/>
          <Benefits/>
      </main>
    )
}


export default MainPage;