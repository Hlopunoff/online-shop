import React from 'react';

import styles from './nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.top}>
        <div className="container">
            <div className={styles['top-wrap']}>
                <span className={styles['work-time']}>Пн-Сб: 8:00–20:00 Вс: 9:00–20:00</span>
                <ul className={styles['top__list']}>
                    <li className={styles['top__list-item']}><a href="#" className={styles['top__link']}>Доставка</a></li>
                    <li className={styles['top__list-item']}><a href="#" className={styles['top__link']}>Оплата</a></li>
                    <li className={styles['top__list-item']}><a href="#" className={styles['top__link']}>Отзывы</a></li>
                    <li className={styles['top__list-item']}><a href="#" className={styles['top__link']}>Блог</a></li>
                    <li className={styles['top__list-item']}>
                        <a href="#" className={styles['top__link']}>Информация</a>
                        <div className={styles['top__dropdown']}>
                            <ul className={styles['dropdown__list']}>
                                <li className={styles['dropdown__item']}>Гарантии</li>
                                <li className={styles['dropdown__item']}>Вопрос и ответ</li>
                                <li className={styles['dropdown__item']}>Корпоративным клиентам</li>
                                <li className={styles['dropdown__item']}>О компании</li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles['top__list-item']}><a href="#" className={styles['top__link']}>Контакты</a></li>
                </ul>
                <div className={styles.socials}>
                    <a href='#' className={`icon-vk-logo ${styles.vk}`}></a>
                    <a href='#' className={`icon-insta-logo ${styles.insta}`}></a>
                    <div className={`icon-user ${styles.user}`}>Мои заказы</div>
                </div>
            </div>
        </div>
    </nav>
  )
}


export default Nav;