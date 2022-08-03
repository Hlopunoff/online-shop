import React from 'react';

import styles from './menu.module.scss';
import logo from '../../assets/img/logo.png';
import call from '../../assets/icons/call.svg';
import cart from '../../assets/icons/shopping-cart.svg';

const Menu = () => {
  return (
    <div className={styles.menu}>
        <div className="menu-top">
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles['logo-wrap']}>
                        <div className={styles['img-wrap']}>
                            <img src={logo} alt="flowers" className={styles.logo} />
                        </div>
                        <span className={styles['logo__title']}>Доставка цветов в Воронеже</span>
                    </div>
                    <div className={styles['search-wrap']}>
                        <input type="text" className={styles.search} placeholder='Поиск по сайту'/>
                    </div>
                    <div className={styles.contacts}>
                        <div className={styles['call-wrap']}>
                            <img src={call} alt="call btn" className={styles.call} />
                        </div>
                        <span className={styles.phone}>+7 (920) 211-49-03</span>
                    </div>
                    <div className={styles.cla}>
                        <div className={`icon-favourites ${styles.favs}`}></div>
                        <div className={styles.cart}>
                            <img src={cart} alt="shopping basket" />
                        </div>
                        <span className={styles.price}>16 500 &#x20bd;</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles['menu-bottom']}>
            <div className="container">
                <ul className={styles['menu__items']}>
                    <li className={styles['menu__item']}>АКЦИИ</li>
                    <li className={styles['menu__item']}>Цветы поштучно</li>
                    <li className={styles['menu__item']}>Розы</li>
                    <li className={styles['menu__item']}>Букеты</li>
                    <li className={styles['menu__item']}>Композиции</li>
                    <li className={styles['menu__item']}>Подарки</li>
                    <li className={styles['menu__item']}>Шары</li>
                    <li className={styles['menu__item']}>Свадебные букеты</li>
                    <li className={styles['menu__item']}>Повод</li>
                </ul>
            </div>
        </div>
    </div>
  )
}


export default Menu;