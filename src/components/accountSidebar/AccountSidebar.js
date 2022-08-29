import React from 'react';
import { useDispatch } from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';
import { removeUser } from '../../reducers/userSlice';

import styles from './accountSidebar.module.scss';
import accountImg1 from '../../assets/icons/user.svg';
import accountImg2 from '../../assets/icons/location.svg';
import accountImg3 from '../../assets/icons/shopping-cart.svg';
import accountImg4 from '../../assets/icons/settings.svg';
import accountImg5 from '../../assets/icons/calendar.svg';
import accountImg6 from '../../assets/icons/coupon.png';
import accountImg7 from '../../assets/icons/exit.svg';

const AccountSidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <aside className={styles['sidebar']}>
            <span className={styles['sidebar__greeting']}>Здравствуйте!</span>
            <div className={styles['sidebar__discount']}>
                <span className={styles['discount__rate']}>Ваша скидка<b>5%</b></span>
                <span className={styles['discount__text']}>Цены на сайте отображаются с учётом вашей скидки</span>
            </div>
            <ul className={styles['sidebar__list']}>
                <NavLink to='accountInfo' className={styles['sidebar__item']} style = {({isActive}) => isActive ? ({color: '#0093A2'}) : null} >
                    <img src={accountImg1} alt="personal account" />
                    Личный кабинет
                </NavLink>
                <NavLink to='locations' className={styles['sidebar__item']} style={({isActive}) => isActive ? ({color: '#0093A2'}) : null} >
                    <img src={accountImg2} alt="location" />
                    Адресы
                </NavLink>
                <NavLink to='orders' className={styles['sidebar__item']}
                style={({isActive}) => isActive ? ({color: '#0093A2'}) : null}>
                    <img src={accountImg3} alt="orders" />
                    Заказы
                </NavLink>
                <NavLink to='settings' className={styles['sidebar__item']}
                style={({isActive}) => isActive ? ({color: '#0093A2'}) : null}>
                    <img src={accountImg4} alt="settings" />
                    Настройки
                </NavLink>
                <NavLink to='reminders' className={styles['sidebar__item']}
                style={({isActive}) => isActive ? ({color: '#0093A2'}) : null}>
                    <img src={accountImg5} alt="reminders" />
                    Напоминания
                </NavLink>
                <NavLink to='discounts' className={styles['sidebar__item']}
                style={({isActive}) => isActive ? ({color: '#0093A2'}) : null}>
                    <img src={accountImg6} alt="discounts" />
                    О скидках
                </NavLink>
                <li 
                    onClick={() => {
                        dispatch(removeUser());
                        navigate('/');
                    }}
                    className={styles['sidebar__item']}
                    style={{'cursor': 'pointer'}}>
                    <img src={accountImg7} alt="log out" />
                    Выйти
                </li>
            </ul>
        </aside>
    )
}

export default AccountSidebar;