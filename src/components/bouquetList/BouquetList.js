import React from 'react';
import Slider from '../slider/Slider';

import styles from './bouquetList.module.scss';
import slide1 from '../../assets/img/bouquet1.png';
import Bouquet from '../bouquet/Bouquet';

const BouquetList = (props) => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles['section__title']}>{props.title}</h2>
                <Slider styles={{width: '100%', height: '430px'}}>
                    <Bouquet 
                        title='Букет 25 роз Нежный микс' 
                        img={slide1} 
                        size="Высота: 60 см, Ширина: 35 см"
                        prevPrice={15499}
                        currPrice={13499}/>
                    <Bouquet 
                        title='Букет 25 роз Нежный микс' 
                        img={slide1} 
                        size="Высота: 60 см, Ширина: 35 см"
                        prevPrice={15499}
                        currPrice={13499}/>
                    <Bouquet 
                        title='Букет 25 роз Нежный микс' 
                        img={slide1} 
                        size="Высота: 60 см, Ширина: 35 см"
                        prevPrice={15499}
                        currPrice={13499}/>
                    <Bouquet 
                        title='Букет 25 роз Нежный микс' 
                        img={slide1} 
                        size="Высота: 60 см, Ширина: 35 см"
                        prevPrice={15499}
                        currPrice={13499}/>
                </Slider>
            </div>
        </section>
    );
};


export default BouquetList;