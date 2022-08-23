import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { fetchNews } from '../../reducers/newsSlice';

import styles from './blog.module.scss';

const Blog = () => {
    const news = useSelector(state => state.news.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews('http://localhost:3001/news'));
    }, [ ]);

    return (
        <section className={styles['blog']}>
            <div className="container">
                <h2 className={styles['blog__title']}>Блог</h2>
                <div className={styles['blog__content']}>
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
                <button className={styles['blog__btn']}>Показать еще</button>
            </div>
        </section>
    )
}

export default Blog;