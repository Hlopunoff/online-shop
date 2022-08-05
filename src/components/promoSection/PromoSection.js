import React from 'react';

import Slider from '../slider/Slider';
import styles from './promoSection.module.scss';
import copyImg from '../../assets/icons/copy.svg';
import bouquetImg1 from '../../assets/img/bouquet1.png';
import bouquetImg2 from '../../assets/img/bouquet2.png';
import bouquetImg3 from '../../assets/img/bouquet3.png';
import benefit1 from '../../assets/icons/delivery-benefit.svg';
import benefit2 from '../../assets/icons/discount-benefit.svg';
import benefit3 from '../../assets/icons/reward-benefit.svg';
import benefit4 from '../../assets/icons/bouquet-benefit.svg';
import benefit5 from '../../assets/icons/calendar-benefit.svg';

const PromoSection = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles['section__wrap']}>
                    <Slider styles={{width: '75%', height: '100%'}}>
                        <div className={styles['promo-slide']}>
                            <h3 className={styles['promo-slide__title']}>Бесплатная доставка от 5000 руб</h3>
                            <div className={styles['promo-slide__wrap']}>
                                <span className={styles['promo-slide__slogan']}>Промокод:</span>
                                <div className={styles['promo-code__cla']}>
                                    <span className={styles['promo-code']}>лавкароз</span>
                                    <button className={styles['btn-copy']}><img src={copyImg} alt="press to copy promo code" /></button>
                                </div>
                            </div>
                        </div>
                        <div className={styles['promo-slide']}>
                            <h3 className={styles['promo-slide__title']}>Бесплатная доставка от 5000 руб</h3>
                            <div className={styles['promo-slide__wrap']}>
                                <span className={styles['promo-slide__slogan']}>Промокод:</span>
                                <div className={styles['promo-code__cla']}>
                                    <span className={styles['promo-code']}>лавкароз</span>
                                    <button className={styles['btn-copy']}><img src={copyImg} alt="press to copy promo code" /></button>
                                </div>
                            </div>
                        </div>
                        <div className={styles['promo-slide']}>
                            <h3 className={styles['promo-slide__title']}>Бесплатная доставка от 5000 руб</h3>
                            <div className={styles['promo-slide__wrap']}>
                                <span className={styles['promo-slide__slogan']}>Промокод:</span>
                                <div className={styles['promo-code__cla']}>
                                    <span className={styles['promo-code']}>лавкароз</span>
                                    <button className={styles['btn-copy']}><img src={copyImg} alt="press to copy promo code" /></button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div className={styles.bouquet}>
                        <h3 className={styles['bouquet__title']}>Букет недели</h3>
                        <div className={styles['bouquet__card']}>
                            <Slider styles={{width: '100%', height: '61%'}}>
                                <div className={styles['bouquet__slide']}>
                                    <img src={bouquetImg1} alt="bouquet 1" />
                                </div>
                                <div className={styles['bouquet__slide']}>
                                    <img src={bouquetImg2} alt="bouquet 2" />
                                </div>
                                <div className={styles['bouquet__slide']}>
                                    <img src={bouquetImg3} alt="bouquet 3" />
                                </div>
                            </Slider>
                            <div className={styles['bouquet__info']}>
                                <h3 className={styles['bouquet__name']}>Букет 25 роз Нежный микс</h3>
                                <span className={styles['bouquet__size']}>Высота: 60 см, Ширина: 35 см</span>
                                <div className={styles['bouquet__cla']}>
                                    <div className={styles['bouquet__prices']}>
                                        <span className={styles['curr-price']}>13 499 ₽</span>
                                        <span className={styles['prev-price']}>15 499 ₽</span>
                                    </div>
                                    <button className={styles['btn-buy']}>В корзину</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.benefits}>
                    <div className={styles.benefit}>
                        <img src={benefit1} alt="delivery benefit" />
                        <span className={styles['benefit__text']}>Экспресс-доставка от 90 минут</span>
                    </div>
                    <div className={styles.benefit}>
                        <img src={benefit2} alt="low price benefit" />
                        <span className={styles['benefit__text']}>Низкие цены</span>
                    </div>
                    <div className={styles.benefit}>
                        <img src={benefit3} alt="fresh flowers benefit" />
                        <span className={styles['benefit__text']}>Каждый день поступление свежих цветов</span>
                    </div>
                    <div className={styles.benefit}>
                        <img src={benefit4} alt="experienced florists benefit" />
                        <span className={styles['benefit__text']}>Опытные флористы</span>
                    </div>
                    <div className={styles.benefit}>
                        <img src={benefit5} alt="work without days off benefit" />
                        <span className={styles['benefit__text']}>Работаем без выходных</span>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default PromoSection;