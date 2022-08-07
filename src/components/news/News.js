import React from 'react';

import styles from './news.module.scss';
import newsImg from '../../assets/img/news.png';

const News = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={styles['section__title']}>Новости</h2>
            <div className={styles['section__content']}>
                <div className={styles['card']}>
                    <div className={styles['card__img-wrap']}>
                        <img src={newsImg} alt="news" className={styles['card__img']}/>
                    </div>
                    <h3 className={styles['card__title']}>Какие цветы дарят мужчинам</h3>
                    <p className={styles['card__descr']}>Многие мужчины любят цветы не меньше, чем женщины.</p>
                    <span className={styles['card__date']}>18 декабря 2021</span>
                </div>
                <div className={styles['card']}>
                    <div className={styles['card__img-wrap']}>
                        <img src={newsImg} alt="news" className={styles['card__img']}/>
                    </div>
                    <h3 className={styles['card__title']}>Какие цветы дарят мужчинам</h3>
                    <p className={styles['card__descr']}>Многие мужчины любят цветы не меньше, чем женщины.</p>
                    <span className={styles['card__date']}>18 декабря 2021</span>
                </div>
                <div className={styles['card']}>
                    <div className={styles['card__img-wrap']}>
                        <img src={newsImg} alt="news" className={styles['card__img']}/>
                    </div>
                    <h3 className={styles['card__title']}>Какие цветы дарят мужчинам</h3>
                    <p className={styles['card__descr']}>Многие мужчины любят цветы не меньше, чем женщины.</p>
                    <span className={styles['card__date']}>18 декабря 2021</span>
                </div>
            </div>
        </div>
    </section>
  )
}


export default News;