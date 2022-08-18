import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchComments} from '../../reducers/commentsSlice';
import { v4 as uuidv4 } from 'uuid';

import styles from './reviews.module.scss';

const Reviews = () => {
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
        <section className={styles['reviews']}>
            <div className={styles['reviews__header']}>
                <h2 className={styles['reviews__title']}>Отзывы</h2>
                <button className={styles['reviews__btn-add']}>Оставить отзыв</button>
            </div>
            <div className={styles['reviews__content']}>
                {comments ? comments.map(comment => {
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
                }) : null}
            </div>
        </section>
    )
}

export default Reviews;