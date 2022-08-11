import React from 'react';

import styles from './catalogCard.module.scss';

const CatalogCard = (props) => {
  return (
    <div className={styles['card']}>
        <div className={styles['card__img-wrap']}>
            <img src={props.img} alt={props.title} className={styles['card__img']} />
        </div>
        <div className={styles['card__content']}>
            <h3 className={styles['card__title']}>{props.title}</h3>
            <div className={styles['card__content-head']}>
                <div className={styles['rating']}>
                    <span className={`icon-star ${styles['star']}`}></span>
                    <span className={styles['rating__mark']}>4.0</span>
                    <span className={styles['rating__amount']}>(15 отзывов)</span>
                </div>
                <span className={styles['duration']}>150 мин</span>
            </div>
            <div className={styles['card__sizes']}>
                Размер:
                <span className={styles['card__size']}>mini</span>
                <span className={styles['card__size']}>standart</span>
                <span className={styles['card__size']}>maxi</span>
            </div>
            <div className={styles['card__content-footer']}>
                <div className={styles['card__prices']}>
                    <span className={styles['card__curr-price']}>{props.currPrice}</span>
                    <span className={styles['card__prev-price']}>{props.prevPrice}</span>
                </div>
                <button className={styles['card__btn-add']}>В корзину</button>
            </div>
        </div>
    </div>
  )
}


export default CatalogCard;