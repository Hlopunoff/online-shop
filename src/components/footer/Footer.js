import React from 'react';

import styles from './footer.module.scss';
import pocket from '../../assets/img/poket.png';
import mastercard from '../../assets/img/mastercard.png';
import visa from '../../assets/img/visa.png';
import sber from '../../assets/img/sber.png';
import io from '../../assets/img/io.png';
import maestro from '../../assets/img/maestro.png';
import piece from '../../assets/img/piece.png';
import vk from '../../assets/img/vk.png';
import fb from '../../assets/img/fb.png';
import insta from '../../assets/img/instagram.png';
import youTube from '../../assets/img/YouTube.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles['footer__content']}>
                    <div className={styles['col']}>
                        <h3 className={styles['col__title']}>Цветы поштучно</h3>
                        <ul className={styles['col__list']}>
                            <li className={styles['col__item']}>Розы поштучно</li>
                            <li className={styles['col__item']}>Кустовая роза</li>
                            <li className={styles['col__item']}>Пионовидная роза</li>
                            <li className={styles['col__item']}>Хризантемы поштучно</li>
                            <li className={styles['col__item']}>Альстромерия</li>
                            <li className={styles['col__item']}>Тюльпаны</li>
                            <li className={styles['col__item']}>Герберы поштучно</li>
                            <li className={styles['col__item']}>Лилии поштучно</li>
                            <li className={styles['col__item']}>Пионы</li>
                            <li className={styles['col__item']}>Эустома</li>
                            <li className={styles['col__item']}>Каллы поштучно</li>
                            <li className={styles['col__item']}>Маттиола</li>
                        </ul>
                    </div>
                    <div className={styles['col']}>
                        <h3 className={styles['col__title']}>Розы</h3>
                        <ul className={styles['col__list']}>
                            <li className={styles['col__item']}>Голландские розы</li>
                            <li className={styles['col__item']}>Местная роза</li>
                            <li className={styles['col__item']}>Кустовые розы</li>
                            <li className={styles['col__item']}>Пионовидные розы</li>
                            <li className={styles['col__item']}>Букет из 101 розы</li>
                        </ul>
                    </div>
                    <div className={styles['col']}>
                        <h3 className={styles['col__title']}>Букеты</h3>
                        <ul className={styles['col__list']}>
                            <li className={styles['col__item']}>Сборные букеты</li>
                            <li className={styles['col__item']}>Букеты из хризантем</li>
                            <li className={styles['col__item']}>Букеты из Альстромерий</li>
                            <li className={styles['col__item']}>Букеты из эустом</li>
                            <li className={styles['col__item']}>Букеты Гипсофилы</li>
                            <li className={styles['col__item']}>Букеты из гербер</li>
                            <li className={styles['col__item']}>Букеты из пионов</li>
                            <li className={styles['col__item']}>Букеты из тюльпанов</li>
                        </ul>
                    </div>
                    <div className={styles['col']}>
                        <div className={styles['cols']}>
                            <ul className={styles['col__list']}>
                                <h3 className={styles['cols__title']}>Композиции</h3>
                                <li className={styles['col__item']}>Ящики с цветами</li>
                                <li className={styles['col__item']}>Коробки с цветами</li>
                                <li className={styles['col__item']}>Корзины с цветами</li>
                            </ul>
                            <ul className={styles['col__list']}>
                                <h3 className={styles['cols__title']}>Подарки</h3>
                                <li className={styles['col__item']}>Мягкие игрушки</li>
                                <li className={styles['col__item']}>Коробки конфет</li>
                            </ul>
                            <ul className={styles['col__list']}>
                                <h3 className={styles['cols__title']}>Шары</h3>
                                <li className={styles['col__item']}>Шары в виде цифр</li>
                                <li className={styles['col__item']}>Фольгированные шары</li>
                                <li className={styles['col__item']}>Латексные шары</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles['col']}>
                        <h3 className={styles['col__title']}>Информация</h3>
                        <ul className={styles['col__list']}>
                            <li className={styles['col__item']}>Доставка</li>
                            <li className={styles['col__item']}>Оплата</li>
                            <li className={styles['col__item']}>Отзывы</li>
                            <li className={styles['col__item']}>Блог</li>
                            <li className={styles['col__item']}>Гарантии</li>
                            <li className={styles['col__item']}>Вопрос и ответ</li>
                            <li className={styles['col__item']}>Корпоративным клиентам</li>
                            <li className={styles['col__item']}>О компании</li>
                            <li className={styles['col__item']}>Контакты</li>
                        </ul>
                    </div>
                    <div className={styles['col']}>
                        <h3 className={styles['col__title']}>Наши координаты</h3>
                        <div className={styles['col__contacts']}>
                            <div className={styles['col__contact']}>
                                <span className={styles['col__location']}>Служба Доставки</span>
                                <a href='tel:+79202114903' className={styles['col__phone']}>+7 (920) 211-49-03</a>
                            </div>
                            <div className={styles['col__contact']}>
                                <span className={styles['col__location']}>Ул. Вл. Невского 17</span>
                                <a href='tel:+79202114903' className={styles['col__phone']}>+7 (920) 211-49-03</a>
                            </div>
                            <div className={styles['col__contact']}>
                                <span className={styles['col__location']}>Ул. Революции 1905 года 80</span>
                                <a href='tel:+79066786599' className={styles['col__phone']}>+7 (906) 678-65-99</a>
                            </div>
                            <div className={styles['col__contact']}>
                                <span className={styles['col__location']}>E-mail:</span>
                                <a href='mailto:info@lavkaroz.ru' className={styles['col__email']}>info@lavkaroz.ru</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['footer__footer']}>
                    <div className={styles['copyright']}>© 2014 – 2022. Интернет-магазин «Лавка Роз»</div>
                    <div className={styles['payment-methods']}>
                        <div className="method">
                            <img src={pocket} alt="pay in cash" />
                        </div>
                        <div className="method">
                            <img src={visa} alt="pay by visa" />
                        </div>
                        <div className="method">
                            <img src={mastercard} alt="pay by mastercard" />
                        </div>
                        <div className="method">
                            <img src={maestro} alt="pay by maestro" />
                        </div>
                        <div className="method">
                            <img src={piece} alt="pay by peace" />
                        </div>
                        <div className="method">
                            <img src={sber} alt="pay by sber" />
                        </div>
                        <div className="method">
                            <img src={io} alt="pay by io" />
                        </div>
                    </div>
                    <div className={styles['socials']}>
                        <div className={styles['social']}>Мы в социальных сетях:</div>
                        <div className={styles['social']}>
                            <img src={vk} alt="vk social" />
                        </div>
                        <div className={styles['social']}>
                            <img src={fb} alt="facebook social" />
                        </div>
                        <div className={styles['social']}>
                            <img src={insta} alt="instagram social" />
                        </div>
                        <div className={styles['social']}>
                            <img src={youTube} alt="youTube social" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;