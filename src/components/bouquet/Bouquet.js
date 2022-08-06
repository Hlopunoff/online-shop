import React from 'react';

import styles from './bouquet.module.scss';

const Bouquet = (props) => {
  return (
    <div className={styles['slide']}>
        <div className={styles['slide__img-wrap']}>
            <img src={props.img} alt={props.title} className={styles['slide__img']}/>
        </div>
        <div className={styles['slide__info']}>
            <h3 className={styles['slide__title']}>{props.title}</h3>
            <span className={styles['slide__size']}>{props.size}</span>
            <div className={styles['slide__cla-wrap']}>
                <div className={styles['slide__prices']}>
                    <span className={styles['slide__curr-price']}>{props.currPrice} ₽</span>
                    <span className={styles['slide__prev-price']}>{props.prevPrice} ₽</span>
                </div>
                <button className={styles['slide__btn']}>В корзину</button>
            </div>
        </div>
        <button className={`icon-favourites ${styles['add-to-fav']}`}></button>
    </div>
  )
}

export default Bouquet;