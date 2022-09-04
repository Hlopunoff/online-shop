import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchBouquets} from '../../reducers/bouquetsSlice';
import CatalogCard from '../catalogCard/CatalogCard';
import FutureBouquets from '../futureBouquets/FutureBouquets';
import { bouquetsSortBy, addLimit } from '../../reducers/bouquetsSlice';
import { addFilter, deleteFilter } from '../../reducers/filterSlice';

import styles from './catalog.module.scss';
import showMoreImg from '../../assets/icons/Rotate.svg';

const Catalog = (props) => {
    const selectRef = useRef();
    const filters = useSelector(state => state.filter.filters);
    const offset = useSelector(state => state.bouquets.offset);
    const bouquets = useSelector(state => state.bouquets.bouquets?.filter(item => {
        if(item.types.includes(props.type)) {
            for(let key in filters) {
                if(Array.isArray(filters[key])) {
                    if (filters[key].includes(item[key]) && item['currPrice'] > filters.price) {
                        return true;
                    }
                }else if(key === 'price') {
                    //!todo придумать механизм, чтобы при первой загрузке показывались все букеты
                }
            }
            return false;
        } else {
            return false;
        }
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBouquets(`http://localhost:3001/bouquets`));
    }, [filters]);

    useEffect(() => {
        dispatch(fetchBouquets(`http://localhost:3001/bouquets`));
    }, [ ]);

    const chooseFilter = (e) => {
        const target = e.target;

        if(target && target.classList.contains('catalog_catalog__filter_active__8XLSw')) {
            target.classList.remove(`${styles['catalog__filter_active']}`);
            dispatch(deleteFilter({
                filterName: target.getAttribute('data-filter'),
                filter: +target.getAttribute('data-value')
            }));
        } else {
            target.classList.add(`${styles['catalog__filter_active']}`);
            dispatch(addFilter({
                filterName: target.getAttribute('data-filter'),
                filter: +target.getAttribute('data-value')
            }));
        }
    }

    return (
        <section className={styles['catalog']}>
            <div className={styles['catalog__header']}>
                <h2 className={styles['catalog__title']}>Букеты из Роз</h2>
                <div className={styles['catalog__header-filter']}>
                    <label >
                        Сортировать:
                        <select 
                            ref={selectRef} 
                            onChange={() => dispatch(bouquetsSortBy(selectRef.current.value))}>
                            <option value="alphabet">По алфавиту</option>
                            <option value="fame">По популярности</option>
                            <option value="price decrease">По убыванию цены</option>
                            <option value="price increase">По возрастанию цены</option>
                        </select>
                    </label>
                </div>
            </div>
            <div 
                className={styles['catalog__filters']}
                onClick={chooseFilter}>
                <span 
                    data-value="25"
                    data-filter='amountOfFlowers'
                    className={styles['catalog__filter']}>Букеты из 25 роз</span>
                <span 
                    data-value="21"
                    data-filter='amountOfFlowers'
                    className={styles['catalog__filter']}>Букеты из 21 розы</span>
                <span 
                    data-value="39"
                    data-filter='amountOfFlowers'
                    className={styles['catalog__filter']}>Букеты из 39 роз</span>
                <span 
                    data-value="301"
                    data-filter='amountOfFlowers'
                    className={styles['catalog__filter']}>Букеты из 301 розы</span>
                <span 
                    data-value="35"
                    data-filter='amountOfFlowers'
                    className={styles['catalog__filter']}>Букеты из 35 роз</span>
                <span 
                    data-value="31"
                    data-filter='amountOfFlowers'
                    className={styles['catalog__filter']}>Букеты из 31 розы</span>
                <span 
                    data-value="33"
                    data-filter='amountOfFlowers'
                    className={styles['catalog__filter']}>Букеты из 33 роз</span>
                <span 
                    data-value="37"
                    data-filter='amountOfFlowers'
                    className={styles['catalog__filter']}>Букеты из 37 роз</span>
                <span 
                    data-value="301"
                    data-filter='amountOfFlowers'
                    className={styles['catalog__filter']}>Букеты из 301 розы</span>
                <span 
                    data-value="301"
                    data-filter='amountOfFlowers'
                    className={styles['catalog__filter']}>Букеты из 301 розы</span>
                <span 
                    data-value="301"
                    data-filter='amountOfFlowers'
                    className={styles['catalog__filter']}>Букеты из 301 розы</span>
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
                            duration={item.deliveryDuration}
                            id={item.id}/>
                }) : null}
            </div>
            <FutureBouquets/>
            <button 
                onClick={() => {
                    dispatch(addLimit());
                    dispatch(fetchBouquets(`http://localhost:3001/bouquets?_start=0&_end=${offset}`));
                }}
                className={styles['show-more']}>
                <img src={showMoreImg} alt="show more" />
                Показать еще
            </button>
        </section>
    )
}

export default Catalog;