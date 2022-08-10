import React from 'react';
import { Link } from 'react-router-dom';

import styles from './options.module.scss';
import chapterImg1 from '../../assets/img/singleFlower-chapter.png';
import chapterImg2 from '../../assets/img/options-img1.png';
import chapterImg3 from '../../assets/img/catalogBouquets-chapter.png';
import chapterImg4 from '../../assets/img/compositions-chapter.png';

const Options = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <h2 className={styles['section__title']}>Разделы</h2>
            <div className={styles['section__content']}>
                <Link to="/single" className={styles['section__card']}>
                    <div className={styles['card__img-wrap']}>
                        <img src={chapterImg1} alt="single bouquet" className={styles['card__img']} />
                    </div>
                    <h3 className={styles['card__title']}>Цветы поштучно</h3>
                    <span className="card__price">от <b>500</b> ₽</span>
                </Link>
                <Link to="/roses" className={styles['section__card']}>
                    <div className={styles['card__img-wrap']}>
                        <img src={chapterImg2} alt="bouquets out of roses" className={styles['card__img']} />
                    </div>
                    <h3 className={styles['card__title']}>Букеты из роз</h3>
                    <span className="card__price">от <b>900</b> ₽</span>
                </Link>
                <Link to="/catalog" className={styles['section__card']}>
                    <div className={styles['card__img-wrap']}>
                        <img src={chapterImg3} alt="bouquet's catalog" className={styles['card__img']} />
                    </div>
                    <h3 className={styles['card__title']}>Каталог букетов</h3>
                    <span className="card__price">от <b>2500</b> ₽</span>
                </Link>
                <Link to="compositions" className={styles['section__card']}>
                    <div className={styles['card__img-wrap']}>
                        <img src={chapterImg4} alt="compositions from flowers" className={styles['card__img']} />
                    </div>
                    <h3 className={styles['card__title']}>Композиции из цветов</h3>
                    <span className="card__price">от <b>3900</b> ₽</span>
                </Link>
            </div>
        </div>
    </section>
  )
}


export default Options;