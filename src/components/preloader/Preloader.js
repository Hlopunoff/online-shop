import React from 'react';

import styles from './preloader.module.scss';
import preloaderImg from '../../assets/img/preloader.gif';

const Preloader = () => {
    return (
        <div className={styles['preloader']}>
            <div className="preloader__img-wrap">
                <img src={preloaderImg} alt="loading..." className="preloader__img" />
            </div>
        </div>
    )
}

export default Preloader;