import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { fetchBouquets } from '../../reducers/bouquetsSlice';
import { addToCart } from '../../reducers/singleBouquetSlice';
import Preloader from '../preloader/Preloader';

import Slider from '../slider/Slider';
import styles from './promoSection.module.scss';
import copyImg from '../../assets/icons/copy.svg';
import benefit1 from '../../assets/icons/delivery-benefit.svg';
import benefit2 from '../../assets/icons/discount-benefit.svg';
import benefit3 from '../../assets/icons/reward-benefit.svg';
import benefit4 from '../../assets/icons/bouquet-benefit.svg';
import benefit5 from '../../assets/icons/calendar-benefit.svg';

const PromoSection = () => {
    const dispatch = useDispatch();
    const bouquet = useSelector(state => state.bouquets.bouquets?.filter(item => item.types.includes('best-of-the-week'))[0]);
    const {isLoading, isError} = useSelector(state => state.bouquets);
    const promoCode = useRef(null);
    const messageSuccess = useRef(null);
    const messageFailed = useRef(null);

    useEffect(() => {
        dispatch(fetchBouquets(`http://localhost:3001/bouquets`));
    }, [ ]);

    const loading = isLoading ? <Preloader/> : null;
    const error = isError ? <h2>Ошибка!</h2> : null;
    const content = !(isLoading || isError || !bouquet) ? (
         <div className={styles['bouquet__card']}>
            <Slider styles={{width: '100%', height: '61%'}}>
                <div className={styles['bouquet__slide']}>
                    <img src={bouquet.img} alt={bouquet.name} />
                </div>
                <div className={styles['bouquet__slide']}>
                    <img src={bouquet.img} alt={bouquet.name} />
                </div>
                <div className={styles['bouquet__slide']}>
                    <img src={bouquet.img} alt={bouquet.name} />
                </div>
            </Slider>
            <div className={styles['bouquet__info']}>
                <h3 className={styles['bouquet__name']}>{bouquet.name}</h3>
                <span className={styles['bouquet__size']}>{bouquet.size}</span>
                <div className={styles['bouquet__cla']}>
                    <div className={styles['bouquet__prices']}>
                        <span className={styles['curr-price']}>{bouquet.currPrice} ₽</span>
                        <span className={styles['prev-price']}>{bouquet.prevPrice} ₽</span>
                    </div>
                    <button className={styles['btn-buy']} onClick={() => dispatch(addToCart(bouquet))}>В корзину</button>
                </div>
            </div>
        </div>
    ) : null;

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
                                    <span className={styles['promo-code']} ref={promoCode}>лавкароз</span>
                                    <button 
                                    className={styles['btn-copy']}
                                    onClick={() => {
                                        navigator.clipboard.writeText(promoCode.current.textContent)
                                        .then(() => messageSuccess.current.style.visibility = 'visible')
                                        .catch(() => messageFailed.current.style.visibility = 'visible')
                                        .finally(() => {
                                            const clearMessages = () => {
                                                messageSuccess.current.style.visibility = 'hidden';
                                                messageFailed.current.style.visibility = 'hidden';
                                            }
                                            setTimeout(() => {
                                                clearMessages();
                                            }, 2000);

                                            clearTimeout(clearMessages);
                                        });
                                    }}><img src={copyImg} alt="press to copy promo code" /></button>
                                    <div className={styles.success} ref={messageSuccess}>Скопировано</div>
                                    <div className={styles.failed} ref={messageFailed}>Ошибка!</div>
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
                                    <button 
                                        className={styles['btn-copy']}><img src={copyImg} alt="press to copy promo code" /></button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div className={styles.bouquet}>
                        <h3 className={styles['bouquet__title']}>Букет недели</h3>
                        {loading}
                        {error}
                        {content}
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