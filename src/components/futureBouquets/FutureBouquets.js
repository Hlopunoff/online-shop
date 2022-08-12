import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CatalogCard from '../catalogCard/CatalogCard';
import { fetchFutureBouquets } from '../../actions/actions';

import styles from './futureBouquets.module.scss';

const FutureBouquets = () => {
    const bouquets = useSelector(state => state.soon.soon);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFutureBouquets('http://localhost:3001/comingSoon'));
    }, [ ]);

    return (
        <div className={styles['soon']}>
            <div className={styles['soon__header']}>
                <h3 className={styles['soon__title']}>Ожидаем поступление</h3>
            </div>
            <div className={styles['soon__content']}>
                {bouquets ? bouquets.map(item => {
                    return <CatalogCard
                            img={item.img}
                            title={item.name}
                            key={item.id}
                            rating={item.rating}
                            prevPrice={item.prevPrice}
                            currPrice={item.currPrice}
                            amountOfComments={item.amountOfComments}
                            duration={item.duration}/>
                }) : null}
            </div>
        </div>
    )
}

export default FutureBouquets;