import React from 'react';

import styles from './locations.module.scss';
import refactorImg from '../../assets/icons/refactor.svg';
import deleteImg from '../../assets/icons/delete.svg';

const Locations = () => {
  return (
    <section className={styles['section']}>
        <div className="container">
            <h2 className={styles['section__title']}>Адресы</h2>
            <div className={styles['section__content']}>
                <div className={styles['content__header']}>
                    <span className={styles['col__title']}>Адрес</span>
                    <span className={styles['col__title']}>ФИО получателя</span>
                    <span className={styles['col__title']}>Телефон</span>
                </div>
                <div className={styles['content__body']}>
                    <div className={styles['col']}>
                        <span className={styles['col__location']}>г Санкт-Петербург, г Колпино 45890</span>
                        <span className={styles['col__name']}>Зиновьев Сергей</span>
                        <span className={styles['col__phone']}>+7 (987) 490-90-89</span>
                        <span className={styles['col__refactor']}><img src={refactorImg} alt="refactor" /></span>
                        <span className={styles['col__delete']}><img src={deleteImg} alt="delete" /></span>
                    </div>
                    <div className={styles['col']}>
                        <span className={styles['col__location']}>г Санкт-Петербург, г Колпино 45890</span>
                        <span className={styles['col__name']}>Зиновьев Сергей</span>
                        <span className={styles['col__phone']}>+7 (987) 490-90-89</span>
                        <span className={styles['col__refactor']}><img src={refactorImg} alt="refactor" /></span>
                        <span className={styles['col__delete']}><img src={deleteImg} alt="delete" /></span>
                    </div>
                </div>
            </div>
            <button className={styles['section__btn-add']}>Добавить</button>
        </div>
    </section>
  )
}

export default Locations;