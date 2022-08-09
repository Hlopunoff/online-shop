import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../../actions/actions';
import { v4 as uuidv4 } from 'uuid';
import Slider from '../slider/Slider';

import styles from './comments.module.scss';

const Comments = () => {
    const comments = useSelector(state => state.comments.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComments('http://localhost:3001/comments'));
    }, [ ]);

    const renderRating = (rating) => {
        const res = [];
        for(let i = 0; i < rating; i++) {
            res.push(
                <span className={`icon-star ${styles['slide__star_active']}`} key={uuidv4()}></span>
            );
        }
        for(let i = 0; i < 5 - rating; i++) {
            res.push(
                <span className={`icon-star ${styles['slide__star']}`} key={uuidv4()}></span>
            );
        }

        return res;
    }

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles['section__header']}>
                    <h2 className={styles['section__title']}>Отзывы наших покупателей</h2>
                    <button className={styles['section__btn-add']}>Оставить отзыв</button>
                </div>
                <Slider styles={{width:'100%', height:'300px'}}>
                    {comments.map(comment => {
                        return (
                            <div className={styles['slide']} key={comment.id}>
                                <div className="slide__content">
                                    <div className={styles['slide__rating']}>
                                        {renderRating(comment.rating)}
                                    </div>
                                    <h3 className={styles['slide__username']}>{comment.userName}</h3>
                                    <p className={styles['slide__comment']}>{comment.text}</p>
                                    <span className={styles['slide__comment-belongs-to']}>
                                        Отзывы к букету:
                                        <a href="#" className={styles['slide__link']}>{comment.commentTo}</a>
                                    </span>
                                </div>
                                <div className={styles['slide__img-wrap']}>
                                    <img src={comment.img} alt={comment.commentTo} className={styles['slide__img']} />
                                </div>
                            </div>
                        );
                    })}
                </Slider>
                <button className={styles['section__btn-all']}>Все отзывы</button>
            </div>
        </section>
    )
}

export default Comments;