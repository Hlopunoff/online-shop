import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, addToFavorite } from '../../reducers/singleBouquetSlice';

import styles from './catalogCard.module.scss';

const CatalogCard = (props) => {
    const bouquets = useSelector(state => state.bouquets.bouquets);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.user.id);

    const addBouquet = (id, purpose) => {
        const selected = bouquets.filter(item => item.id === id)[0];
        if (purpose === 'cart') {
            dispatch(addToCart({...selected, userId}));
        } else {
            dispatch(addToFavorite(selected));
        }
    };
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
                        <span className={styles['rating__mark']}>{props.rating}</span>
                        <span className={styles['rating__amount']}>({props.amountOfComments} отзывов)</span>
                    </div>
                    <span className={styles['duration']}>{props.duration} мин</span>
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
                    <button 
                        className={styles['card__btn-add']}
                        onClick={() => addBouquet(props.id, 'cart')}>В корзину</button>
                </div>
            </div>
            <div 
                className={`icon-favourites ${styles['add-to-fav']}`}
                onClick={() => addBouquet(props.id, 'fav')}></div>
        </div>
    )
}


export default CatalogCard;