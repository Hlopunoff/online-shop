import React, {useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { fetchBouquets } from '../../reducers/bouquetsSlice';
import { addToCart } from '../../reducers/singleBouquetSlice';
import PromoSlide from '../promoSlide/PromoSlide';
import Preloader from '../preloader/Preloader';
import Slider from '../slider/Slider';

import styles from './promoSection.module.scss';

import benefit1 from '../../assets/icons/delivery-benefit.svg';
import benefit2 from '../../assets/icons/discount-benefit.svg';
import benefit3 from '../../assets/icons/reward-benefit.svg';
import benefit4 from '../../assets/icons/bouquet-benefit.svg';
import benefit5 from '../../assets/icons/calendar-benefit.svg';

const PromoSection = () => {
    const dispatch = useDispatch();
    const bouquet = useSelector(state => state.bouquets.bouquets?.filter(item => item.types.includes('best-of-the-week'))[0]);
    const {isLoading, isError} = useSelector(state => state.bouquets);

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
                        <PromoSlide title='Бесплатная доставка от 5000 руб' code="лавкароз"/>
                        <PromoSlide title='Бесплатная доставка от 5000 руб' code="лавкароз"/>
                        <PromoSlide title='Бесплатная доставка от 5000 руб' code="лавкароз"/>
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