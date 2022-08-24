import React from 'react';
import { Link } from 'react-router-dom';

import styles from './nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.top}>
        <div className="container">
            <div className={styles['top-wrap']}>
                <span className={styles['work-time']}>Пн-Сб: 8:00–20:00 Вс: 9:00–20:00</span>
                <ul className={styles['top__list']}>
                    <li className={styles['top__list-item']}>Доставка</li>
                    <li className={styles['top__list-item']}>Оплата</li>
                    <Link to="comments" className={styles['top__list-item']}>Отзывы</Link>
                    <Link to="blog" className={styles['top__list-item']}>Блог</Link>
                    <li className={styles['top__list-item']}>
                        Информация
                        <div className={styles['top__dropdown']}>
                            <ul className={styles['dropdown__list']}>
                                <li className={styles['dropdown__item']}>Гарантии</li>
                                <li className={styles['dropdown__item']}>Вопрос и ответ</li>
                                <li className={styles['dropdown__item']}>Корпоративным клиентам</li>
                                <Link to='info' className={styles['dropdown__item']}>О компании</Link>
                            </ul>
                        </div>
                    </li>
                    <li className={styles['top__list-item']}>Контакты</li>
                </ul>
                <div className={styles.socials}>
                    <a href='#' className={`icon-vk-logo ${styles.vk}`}></a>
                    <a href='#' className={`icon-insta-logo ${styles.insta}`}></a>
                    <Link to='account' className={`icon-user ${styles.user}`}>Мои заказы</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}


export default Nav;