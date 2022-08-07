import React from 'react';
import Slider from '../slider/Slider';

import styles from './comments.module.scss';
import slide from '../../assets/img/bouquet2.png';

const Comments = () => {
  return (
    <section className={styles.section}>
        <div className="container">
            <div className={styles['section__header']}>
                <h2 className={styles['section__title']}>Отзывы наших покупателей</h2>
                <button className={styles['section__btn-add']}>Оставить отзыв</button>
            </div>
            <Slider styles={{width:'100%', height:'300px'}}>
                <div className={styles['slide']}>
                    <div className="slide__content">
                        <div className={styles['slide__rating']}>
                            <span className={`icon-star ${styles['slide__star']}`}></span>
                            <span className={`icon-star ${styles['slide__star']}`}></span>
                            <span className={`icon-star ${styles['slide__star']}`}></span>
                            <span className={`icon-star ${styles['slide__star']}`}></span>
                            <span className={`icon-star ${styles['slide__star']}`}></span>
                        </div>
                        <h3 className={styles['slide__username']}>Мередова Елена Григорьевна</h3>
                        <p className={styles['slide__comment']}>Хочу выразить свою благодарность коллективу, за великолепную работу и профессионализм! Заказываю уже 3 раз и каждый раз се полный восторг! Букеты красивые, цветочки свежие, стоят долго! Заказывала и готовые и собирал по своему желанию- все чудесно! Спасибо Мегацвет24 - вы тот случай, когда точно знаешь куда возвращаться за цветочками.</p>
                        <span className={styles['slide__comment-belongs-to']}>
                            Отзывы к букету:
                            <a href="#" className={styles['slide__link']}>Розы 80см</a>
                        </span>
                    </div>
                    <div className={styles['slide__img-wrap']}>
                        <img src={slide} alt="flower" className={styles['slide__img']} />
                    </div>
                </div>
            </Slider>
            <button className={styles['section__btn-all']}>Все отзывы</button>
        </div>
    </section>
  )
}

export default Comments;