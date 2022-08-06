import React from 'react';
import Slider from '../slider/Slider';

import styles from './gallery.module.scss';
import slide from '../../assets/img/galery.png';

const Gallery = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={styles['section__title']}>Галерея</h2>
            <Slider styles={{width: '100%', height: '300px'}}>
                <div className={styles.slide}>
                    <img src={slide} alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={slide} alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={slide} alt="" />
                </div>
                <div className={styles.slide}>
                    <img src={slide} alt="" />
                </div>
            </Slider>
        </div>
    </section>
  )
}

export default Gallery;