import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../actions/actions';

import styles from './news.module.scss';

const News = () => {
    const news = useSelector(state => state.news.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews('http://localhost:3001/news'));
    }, [ ]);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles['section__header']}>
                    <h2 className={styles['section__title']}>Новости</h2>
                    <button className={`${styles['section__btn-all']}`}>Все новости <span className='icon-arrow-right'></span></button>
                </div>
                <div className={styles['section__content']}>
                    {news.map(item => {
                        return (
                            <div className={styles['card']} key={item.id}>
                                <div className={styles['card__img-wrap']}>
                                    <img src={item.img} alt={item.title} className={styles['card__img']}/>
                                </div>
                                <h3 className={styles['card__title']}>{item.title}</h3>
                                <p className={styles['card__descr']}>{item.preview}</p>
                                <span className={styles['card__date']}>{item.date}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}


export default News;