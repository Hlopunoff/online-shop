import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './menu.module.scss';
import logo from '../../assets/img/logo.png';
import call from '../../assets/icons/call.svg';
import cartImg from '../../assets/icons/shopping-cart.svg';
import mailImg from '../../assets/icons/mail.svg';
import locationImg from '../../assets/icons/location.svg';
import vk from '../../assets/img/vk.png';
import telegram from '../../assets/img/Telegram.png';
import instagram from '../../assets/img/instagram.png';
import whatsup from '../../assets/img/WhatsApp.png';

const Menu = () => {
    const {cart, favorites} = useSelector(state => state.singleBouquet);

    const totalPrice = cart.reduce((sum, item) => {
        return sum += item.currPrice;
    }, 0);
    return (
        <div className={styles.menu}>
            <div className="menu-top">
                <div className="container">
                    <div className={styles.wrap}>
                        <div className={styles['logo-wrap']}>
                            <Link to='/' className={styles['img-wrap']}>
                                <img src={logo} alt="flowers" className={styles.logo} />
                            </Link>
                            <span className={styles['logo__title']}>Доставка цветов в Воронеже</span>
                        </div>
                        <div className={styles['search-wrap']}>
                            <input type="text" className={styles.search} placeholder='Поиск по сайту'/>
                        </div>
                        <div className={styles.contacts}>
                            <div className={styles['call-wrap']}>
                                <img src={call} alt="call btn" className={styles.call} />
                            </div>
                            <span className={styles.phone}>+7 (920) 211-49-03
                                <div className={styles['menu__dropdown']}>
                                    <ul className={styles['dropdown__list']}>
                                        <li className={styles['dropdown__item']}>
                                            <img src={call} alt="call" />
                                            <a href="tel:+79202114903">+7 (920) 211-49-03</a>
                                        </li>
                                        <li className={styles['dropdown__item']}>
                                            <img src={locationImg} alt="location" />
                                            ул. Революции 1905 года 80
                                        </li>
                                        <li className={styles['dropdown__item']}>
                                            <img src={locationImg} alt="location" />
                                            ул. Вл. Невского 17
                                        </li>
                                        <li className={styles['dropdown__item']}>
                                            <img src={mailImg} alt="email" />
                                            <a href="mailto:info@lavkaroz.ru">info@lavkaroz.ru</a>
                                        </li>
                                    </ul>
                                    <div className={styles['dropdown__footer']}>
                                        <h4 className={styles['dropdown__footer-title']}>Напишите нам:</h4>
                                        <div className={styles['dropdown__socials']}>
                                            <img src={whatsup} alt="whatsup" className="dropdown__social" />
                                            <img src={telegram} alt="telegram" className="dropdown__social" />
                                            <img src={vk} alt="vk" className="dropdown__social" />
                                            <img src={instagram} alt="instagram" className="dropdown__social" />
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <a href="tel:+79202114903" className={styles['call-order']}>Заказать звонок</a>
                        </div>
                        <div className={styles.cla}>
                            <div className={`icon-favourites ${styles.favs}`}>
                                <div className={styles.amount}>{favorites.length}</div>
                            </div>
                            <div className={styles.cart}>
                                <img src={cartImg} alt="shopping basket" />
                                <div className={styles.amount}>{cart.length}</div>
                            </div>
                            <span className={styles.price}>{totalPrice} &#x20bd;</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['menu-bottom']}>
                <div className="container">
                    <ul className={styles['menu__items']}>
                        <li className={styles['menu__item']}>АКЦИИ</li>
                        <li className={styles['menu__item']}>Цветы поштучно
                            <div className={styles['menu__dropdown']}>
                                <ul className={styles['dropdown__list']}>
                                    <li className={styles['dropdown__item']}>Розы поштучно</li>
                                    <li className={styles['dropdown__item']}>Кустовая роза</li>
                                    <li className={styles['dropdown__item']}>Пионовидная роза</li>
                                    <li className={styles['dropdown__item']}>Хризантемы поштучно</li>
                                    <li className={styles['dropdown__item']}>Альстромерия</li>
                                    <li className={styles['dropdown__item']}>Тюльпаны</li>
                                    <li className={styles['dropdown__item']}>Герберы поштучно</li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles['menu__item']}>Розы
                            <div className={styles['menu__dropdown']}>
                                <ul className={styles['dropdown__list']}>
                                    <li className={styles['dropdown__item']}>Голландские розы</li>
                                    <li className={styles['dropdown__item']}>Местная роза</li>
                                    <li className={styles['dropdown__item']}>Кустовые розы</li>
                                    <li className={styles['dropdown__item']}>Пионовидные розы</li>
                                    <li className={styles['dropdown__item']}>Букет из 101 розы</li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles['menu__item']}>Букеты
                            <div className={styles['menu__dropdown']}>
                                <ul className={styles['dropdown__list']}>
                                    <li className={styles['dropdown__item']}>Букет 25 роз</li>
                                    <li className={styles['dropdown__item']}>Букет роз Ред наоми</li>
                                    <li className={styles['dropdown__item']}>Букет 5 пионовидных роз</li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles['menu__item']}>Композиции
                            <div className={styles['menu__dropdown']}>
                                <ul className={styles['dropdown__list']}>
                                    <li className={styles['dropdown__item']}>Ящики с цветами</li>
                                    <li className={styles['dropdown__item']}>Коробки с цветами</li>
                                    <li className={styles['dropdown__item']}>Корзины с цветами</li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles['menu__item']}>Подарки
                            <div className={styles['menu__dropdown']}>
                                <ul className={styles['dropdown__list']}>
                                    <li className={styles['dropdown__item']}>Мягкие игрушки</li>
                                    <li className={styles['dropdown__item']}>Коробки конфет</li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles['menu__item']}>Шары
                            <div className={styles['menu__dropdown']}>
                                <ul className={styles['dropdown__list']}>
                                    <li className={styles['dropdown__item']}>Шары в виде цифр</li>
                                    <li className={styles['dropdown__item']}>Фольгированные шары</li>
                                    <li className={styles['dropdown__item']}>Латексные шары</li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles['menu__item']}>Свадебные букеты</li>
                        <li className={styles['menu__item']}>Повод</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Menu;