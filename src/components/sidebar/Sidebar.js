import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles['sidebar']}>
        <ul className={styles['sidebar__list']}>
            <NavLink to='aboutUs' className={styles['sidebar__item']} style={({isActive}) => isActive ? {color: '#0093A2', borderLeft: '2px solid #0093A2'} : null}>О нас</NavLink>
            <NavLink to='payment' className={styles['sidebar__item']} style={({isActive}) => isActive ? {color: '#0093A2', borderLeft: '2px solid #0093A2'} : null}>Оплата</NavLink>
            <NavLink to='delivery' className={styles['sidebar__item']} style={({isActive}) => isActive ? {color: '#0093A2', borderLeft: '2px solid #0093A2'} : null}>Доставка</NavLink>
        </ul>
    </aside>
  )
}

export default Sidebar;