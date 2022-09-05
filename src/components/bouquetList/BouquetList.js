import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBouquets } from '../../reducers/bouquetsSlice';

import Slider from '../slider/Slider';
import Bouquet from '../bouquet/Bouquet';
import Preloader from '../preloader/Preloader';
import styles from './bouquetList.module.scss';

const BouquetList = (props) => {

    const {bouquets, isLoading, isError} = useSelector(state => state.bouquets);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBouquets('http://localhost:3001/bouquets'));
    }, [ ]);


    const loading = isLoading ? <Preloader/> : null;
    const error = isError ? <h2>Ошибка</h2> : null;
    const content = !(loading || error || !bouquets) ? bouquets.filter(item => item.category.includes(props.category)).map(item => {
        return <Bouquet
                    title={item.name}
                    key={item.id}
                    size={item.size}
                    currPrice={item.currPrice}
                    prevPrice={item.prevPrice}
                    img={item.img}
                    id={item.id}/>
    }) : null;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles['section__header']}>
                    <h2 className={styles['section__title']}>{props.title}</h2>
                    <button className={styles['section__btn-all']}>
                        <span className='icon-arrow-right'></span>
                    </button>
                </div>
                <Slider styles={{width: '100%', height: '430px'}}>
                    {loading}
                    {error}
                    {content}
                </Slider>
            </div>
        </section>
    );
};


export default BouquetList;