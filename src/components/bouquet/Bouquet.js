import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBouquetTo, addToCart } from '../../reducers/singleBouquetSlice';

import styles from './bouquet.module.scss';

const Bouquet = (props) => {
    const dispatch = useDispatch();
    const bouquets = useSelector(state => state.bouquets.bouquets);

    const addBouquet = (id, purpose) => {
        const bouquet = bouquets.find(item => item.id === id);
        if(bouquet.selected) {
            return 0;
        }

        if(purpose === 'fav') {
            dispatch(addBouquetTo({
                url: 'http://localhost:3001/bouquets',
                id
            }));
        } else {
            dispatch(addToCart(bouquet));
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
            <button 
            className={`icon-favourites ${styles['add-to-fav']}`} 
            onClick={() => {
                addBouquet(props.id, 'fav');
                }}></button>
        </div>
    )
}

export default Bouquet;