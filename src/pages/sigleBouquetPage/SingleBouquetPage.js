import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getBouquetById, addToCart, addToFavorite } from '../../reducers/singleBouquetSlice';

import styles from './singleBouquetPage.module.scss';
import paymentImg1 from '../../assets/img/sber.png';
import paymentImg2 from '../../assets/img/visa.png';
import paymentImg3 from '../../assets/img/mastercard.png';
import paymentImg4 from '../../assets/img/maestro.png';
import paymentImg5 from '../../assets/img/piece.png';
import tipImg from '../../assets/icons/tip.svg';

const SingleBouquetPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {bouquet, isLoading, isError} = useSelector(state => state.singleBouquet);

    useEffect(() => {
        dispatch(getBouquetById(parseInt(id)));
    }, [ ]);

    const loading = isLoading ? <h2>Загрузка...</h2> : null;
    const error = isError ? <h2>Ошибка!</h2> : null;
    const content = !(isLoading || isError || !bouquet) ? <View bouquet={bouquet} dispatch={dispatch}/>: null;

    return (
        <section className={styles.section}>
            <div className="container">
               {loading}
               {error}
               {content}
            </div>
        </section>
    )
}

function View({bouquet, dispatch}) {
    const {name, currPrice, prevPrice, rating, img,} = bouquet;

    return (
        <div className={styles['bouquet']}>
            <div className={styles['imgs']}>
                <div className={`${styles['imgs__img-wrap']} ${styles['main']}`}><img src={img} alt="bouquet" /></div>
                <div className={styles['imgs__img-wrap']}><img src={img} alt="bouquet" /></div>
                <div className={styles['imgs__img-wrap']}><img src={img} alt="bouquet" /></div>
                <div className={styles['imgs__img-wrap']}><img src={img} alt="bouquet" /></div>
                <div className={styles['imgs__img-wrap']}><img src={img} alt="bouquet" /></div>
            </div>
            <div className={styles['settings']}>
                <h2 className={styles['settings__title']}>{name}</h2>
                <span className={`icon-star ${styles['settings__rating']}`}>{rating}</span>
                <div className={styles['settings__sizes']}>
                    <div className={styles['settings__height']}>Высота: <span>50см</span></div>
                    <div className={styles['settings__width']}>Ширина: <span>35см</span></div>
                    <div className={styles['settings__size']}>Размер: <span>Standard</span></div>
                    <div className={styles['settings__color']}>Цвет: <span>Красный</span></div>
                </div>
                <div className={styles['settings__config']}>
                    <h5 className={styles['config__title']}>Длина</h5>
                    <div className={styles['config__values']}>
                        <div className={styles['config__value']}>40 см</div>
                        <div className={styles['config__value']}>50 см</div>
                        <div className={styles['config__value']}>60 см</div>
                        <div className={styles['config__value']}>70 см</div>
                    </div>
                    <h5 className={styles['config__title']}>Упаковка</h5>
                    <div className={styles['config__values']}>
                        <div className={styles['config__value']}>Ленточка</div>
                        <div className={styles['config__value']}>Крафт (+290₽)</div>
                        <div className={styles['config__value']}>Корейская (+390₽)</div>
                        <div className={styles['config__value']}>Премиум (+490₽)</div>
                        <div className={styles['config__value']}>Корзинка (+1000₽)</div>
                    </div>
                    <h5 className={styles['config__title']}>Зелень</h5>
                    <div className={styles['config__values']}>
                        <div className={styles['config__value']}>Нет</div>
                        <div className={styles['config__value']}>Немного (+150₽)</div>
                        <div className={styles['config__value']}>Побольше (+300₽)</div>
                    </div>
                </div>
                <span className={styles['settings__curr-price']}>{currPrice} ₽</span>
                <span className={styles['settings__tip']}>
                    скидка от кол-ва 
                    <img src={tipImg} alt="tip" />
                    <div className={styles['tip']}>Скидка от количества</div>
                </span>
                <span className={styles['settings__prev-price']}>{prevPrice} ₽</span>
                <div className={styles['settings__cla']}>
                    <div className={styles['amount']}>
                        <button className="less">-</button>
                        <span>0</span>
                        <button className="more">+</button>
                    </div>
                    <button
                     className={styles['buy']}
                     onClick={() => {dispatch(addToCart(bouquet))}}>Купить</button>
                    <div 
                    className={`icon-favourites ${styles.fav}`}
                    onClick={() => dispatch(addToFavorite(bouquet))}></div>
                </div>
                <div className={styles['settings__composition']}>
                    <h3 className={styles.title}>Состав:</h3>
                    <ul className={styles['composition__list']}>
                        <div className={styles['composition__items']}>
                            <span className={styles['composition__item']}>Роза пионовидная вайлд лук</span>
                            <span className={styles['composition__item']}>Роза кустовая пионовидная</span>
                            <span className={styles['composition__item']}>Озотамнус</span>
                            <span className={styles['composition__item']}>Эвкалипт</span>
                        </div>
                        <div className={styles['composition__amounts']}>
                            <span className={styles['composition__amount']}>- 7шт</span>
                            <span className={styles['composition__amount']}>- 3шт</span>
                            <span className={styles['composition__amount']}>- 2шт</span>
                            <span className={styles['composition__amount']}>- 6шт</span>
                        </div>
                    </ul>
                </div>
            </div>
            <div className={styles['info']}>
                <div className={styles['info__delivery']}>
                    <h4 className={styles['info__title']}>Доставка</h4>
                    <ul className={styles['info__delivery-list']}>
                        <li className="info__delivery-item">Самовывоз - бесплатно</li>
                        <li className="info__delivery-item">Доставка по Воронежу от 300 руб.</li>
                        <li className="info__delivery-item">Доставка с 9:00 до 21:00.</li>
                        <li className="info__delivery-item">При заказе от 5000 руб. - доставка бесплатно.</li>
                    </ul>
                    <a href="#" className={styles['info__delivery-link']}>Подробнее о доставке</a>
                </div>
                <div className={styles['info__payment']}>
                    <h4 className={styles['info__title']}>Способы оплаты</h4>
                    <span className={styles['info__payment-subtitle']}>Вы можете оплатить наличными или картой:</span>
                    <div className={styles['info__payment-cards']}>
                        <div className={styles['info__payment-card']}>
                            <img src={paymentImg1} alt="credit card" />
                        </div>
                        <div className={styles['info__payment-card']}>
                            <img src={paymentImg2} alt="credit card" />
                        </div>
                        <div className={styles['info__payment-card']}>
                            <img src={paymentImg3} alt="credit card" />
                        </div>
                        <div className={styles['info__payment-card']}>
                            <img src={paymentImg4} alt="credit card" />
                        </div>
                        <div className={styles['info__payment-card']}>
                            <img src={paymentImg5} alt="credit card" />
                        </div>
                    </div>
                </div>
                <div className="info__return">
                    <h4 className={styles['info__title']}>Возврат</h4>
                    <p className={styles['info__return-desc']}>Если получателя не устроит качество цветов или работа флориста – напишите нам, в течение 24 часов! Мы решим данную проблему.</p>
                </div>
            </div>
            <div className={styles['bouquet__desc']}>
                <p className={styles['text']}>Сто одна красная роза - бузупречный выбор для тех, кто хочет показать свою любовь и преданность, поразить свою избранницу и вызвать настоящий восторг.</p>
                <p className={styles['text']}>Цвет и размеры бутонов могут отличаться от представленных на фото, цветы являются природным материалом.</p>
            </div>
        </div>
    );
}

export default SingleBouquetPage;