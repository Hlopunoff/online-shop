import React from 'react';

import styles from './reminders.module.scss';
import refactorImg from '../../assets/icons/refactor.svg';
import deleteImg from '../../assets/icons/delete.svg';

const Reminders = () => {
  return (
    <section className={styles['section']}>
        <h2 className={styles['section__title']}>Напоминания</h2>
        <div className={styles['section__content']}>
            <div className={styles['content__header']}>
                <span className={styles['col__title']}>ФИО</span>
                <span className={styles['col__title']}>Повод</span>
                <span className={styles['col__title']}>Дата события</span>
                <span className={styles['col__title']}>Действия</span>
            </div>
            <div className={styles['content__body']}>
                <div className={styles['col']}>
                    <span className={styles['col__username']}>Зиновьев Евгений С.</span>
                    <span className={styles['col__reason']}>Семейный праздник</span>
                    <span className={styles['col__date']}>23.05.2021</span>
                    <div className={styles['col__actions']}>
                        <img className="col__refactor" src={refactorImg} alt="refactor" />
                        <img className="col__delete" src={deleteImg} alt="delete" />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles['section__btn']}>Добавить</div>
    </section>
  )
}

export default Reminders;