import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, addToFavorite } from '../../reducers/singleBouquetSlice';

import styles from './bouquet.module.scss';

const Bouquet = (props) => {
    const bouquets = useSelector(state => state.bouquets.bouquets);
    const dispatch = useDispatch();

    const addBouquet = (id, purpose) => {
        const selected = bouquets.filter(item => item.id === id)[0];
        if(purpose === 'cart') {
            dispatch(addToCart(selected));
        } else {
            dispatch(addToFavorite(selected));
        }
    };
    return (
        <div className={styles['slide']}>
            <div className={styles['slide__img-wrap']}>
                <img src={props.img} alt={props.title} className={styles['slide__img']}/>
            </div>
            <div className={styles['slide__info']}>
                <div className="slide__descr">
                    <h3 className={styles['slide__title']}>{props.title}</h3>
                    <span className={styles['slide__size']}>{props.size}</span>
                </div>
                <div className={styles['slide__cla-wrap']}>
                    <div className={styles['slide__prices']}>
                        <span className={styles['slide__curr-price']}>{props.currPrice} ₽</span>
                        <span className={styles['slide__prev-price']}>{props.prevPrice} ₽</span>
                    </div>
                    <button className={styles['slide__btn']} onClick={() => {addBouquet(props.id, 'cart')}}>В корзину</button>
                </div>
            </div>
            <button className={`icon-favourites ${styles['add-to-fav']}`} onClick={() => {addBouquet(props.id, 'fav')}}></button>
        </div>
    )
}

export default Bouquet;