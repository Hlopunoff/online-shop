import React from 'react';

import styles from './options.module.scss';
import slide from '../../assets/img/options-img1.png';

const Options = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={styles['section__title']}>Разделы</h2>
            <div className={styles['section__content']}>
                <div className={styles['section__card']}>
                    <div className={styles['card__img-wrap']}>
                        <img src={slide} alt="" className={styles['card__img']} />
                    </div>
                    <h3 className={styles['card__title']}>Цветы поштучно</h3>
                    <span className="card__price">от <b>500</b> ₽</span>
                </div>
                <div className={styles['section__card']}>
                    <div className={styles['card__img-wrap']}>
                        <img src={slide} alt="" className={styles['card__img']} />
                    </div>
                    <h3 className={styles['card__title']}>Букеты из роз</h3>
                    <span className="card__price">от <b>900</b> ₽</span>
                </div>
                <div className={styles['section__card']}>
                    <div className={styles['card__img-wrap']}>
                        <img src={slide} alt="" className={styles['card__img']} />
                    </div>
                    <h3 className={styles['card__title']}>Каталог букетов</h3>
                    <span className="card__price">от <b>2500</b> ₽</span>
                </div>
                <div className={styles['section__card']}>
                    <div className={styles['card__img-wrap']}>
                        <img src={slide} alt="" className={styles['card__img']} />
                    </div>
                    <h3 className={styles['card__title']}>Композиции из цветов</h3>
                    <span className="card__price">от <b>3900</b> ₽</span>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Options;