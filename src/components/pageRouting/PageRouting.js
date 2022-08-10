import React from 'react';
import {Link} from 'react-router-dom';

import styles from './pageRouting.module.scss';

const PageRouting = () => {
    return (
        <div className="page__route-wrap">
            <div className="container">
                <div className={styles['page__route']}>
                    <Link to="/" className={styles['route-main']}>Главная</Link>
                    <span className='icon-arrow-right'></span>
                    <Link to="/roses" className={styles['route']}>Букеты из роз</Link>
                </div>
            </div>
        </div>
    )
}


export default PageRouting;