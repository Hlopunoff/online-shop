import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchBouquets} from '../../actions/actions';
import CatalogCard from '../catalogCard/CatalogCard';
import FutureBouquets from '../futureBouquets/FutureBouquets';

import styles from './catalog.module.scss';
import showMoreImg from '../../assets/icons/Rotate.svg';

const Catalog = (props) => {
    const bouquets = useSelector(state => state.bouquets.bouquets?.filter(item => {
        return item.types.includes(props.type);
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBouquets('http://localhost:3001/bouquets'));
    }, [ ]);

    return (
        <section className={styles['catalog']}>
            <div className={styles['catalog__header']}>
                <h2 className={styles['catalog__title']}>Букеты из Роз</h2>
                <div className={styles['catalog__header-filter']}>
                    <label >
                        Сортировать:
                        <select>
                            <option value="alphabet">По алфавиту</option>
                            <option value="fame">По популярности</option>
                            <option value="price decrease">По убыванию цены</option>
                            <option value="price increase">По возрастанию цены</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className={styles['catalog__filters']}>
                <span className={styles['catalog__filter']}>Букеты из 25 роз</span>
                <span className={styles['catalog__filter']}>Букеты из 21 розы</span>
                <span className={styles['catalog__filter']}>Букеты из 39 роз</span>
                <span className={styles['catalog__filter']}>Букеты из 301 розы</span>
                <span className={styles['catalog__filter']}>Букеты из 35 роз</span>
                <span className={styles['catalog__filter']}>Букеты из 31 розы</span>
                <span className={styles['catalog__filter']}>Букеты из 33 роз</span>
                <span className={styles['catalog__filter']}>Букеты из 37 роз</span>
                <span className={styles['catalog__filter']}>Букеты из 301 розы</span>
                <span className={styles['catalog__filter']}>Букеты из 301 розы</span>
                <span className={styles['catalog__filter']}>Букеты из 301 розы</span>
            </div>
            <div className={styles['catalog__list']}>
                {bouquets ? bouquets.map(item => {
                    return <CatalogCard 
                            key={item.id}
                            title={item.name}
                            img={item.img}
                            currPrice={item.currPrice}
                            prevPrice={item.prevPrice}
                            amountOfComments={item.amountOfComments}
                            rating={item.rating}
                            duration={item.deliveryDuration}/>
                }) : null}
            </div>
            <FutureBouquets/>
            <button className={styles['show-more']}>
                <img src={showMoreImg} alt="show more" />
                Показать еще
            </button>
        </section>
    )
}

export default Catalog;