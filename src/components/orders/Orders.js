import React from 'react';

import styles from './orders.module.scss';

const Orders = () => {
  return (
    <section className={styles['section']}>
        <h2 className={styles['section__title']}>Заказы</h2>
        <div className={styles['section__content']}>
            <div className={styles['content__header']}>
                <span className={styles['col__title']}>Номер заказа</span>
                <span className={styles['col__title']}>Название</span>
                <span className={styles['col__title']}>Дата доставки</span>
                <span className={styles['col__title']}>Получатель</span>
                <span className={styles['col__title']}>Статус</span>
                <span className={styles['col__title']}>Сумма</span>
            </div>
            <div className={styles['content__body']}>
                <div className={styles['order']}>
                    <span className={styles['order__id']}>64587930</span>
                    <span className={styles['order__name']}>Букет малиновых роз</span>
                    <span className={styles['order__date']}>23.05.2021</span>
                    <span className={styles['order__owner']}>Зиновьев Сергей</span>
                    <span data-status='reject' className={styles['order__status']}>Отменён</span>
                    <span className={styles['order__price']}>5 739 ₽</span>
                    <span className={styles['order__comment']}>Добавить отзыв</span>
                </div>
                <div className={styles['order']}>
                    <span className={styles['order__id']}>64587930</span>
                    <span className={styles['order__name']}>Букет малиновых роз</span>
                    <span className={styles['order__date']}>23.05.2021</span>
                    <span className={styles['order__owner']}>Зиновьев Сергей</span>
                    <span data-status='waiting' className={styles['order__status']}>Ожидает оплаты</span>
                    <span className={styles['order__price']}>5 739 ₽</span>
                    <span className={styles['order__comment']}>Добавить отзыв</span>
                </div>
                <div className={styles['order']}>
                    <span className={styles['order__id']}>64587930</span>
                    <span className={styles['order__name']}>Букет малиновых роз</span>
                    <span className={styles['order__date']}>23.05.2021</span>
                    <span className={styles['order__owner']}>Зиновьев Сергей</span>
                    <span data-status='success' className={styles['order__status']}>Оплачено</span>
                    <span className={styles['order__price']}>5 739 ₽</span>
                    <span className={styles['order__comment']}>Добавить отзыв</span>
                </div>
                <div className={styles['order']}>
                    <span className={styles['order__id']}>64587930</span>
                    <span className={styles['order__name']}>Букет малиновых роз</span>
                    <span className={styles['order__date']}>23.05.2021</span>
                    <span className={styles['order__owner']}>Зиновьев Сергей</span>
                    <span data-status='success' className={styles['order__status']}>Оплачено</span>
                    <span className={styles['order__price']}>5 739 ₽</span>
                    <span className={styles['order__comment']}>Добавить отзыв</span>
                </div>
                <div className={styles['order']}>
                    <span className={styles['order__id']}>64587930</span>
                    <span className={styles['order__name']}>Букет малиновых роз</span>
                    <span className={styles['order__date']}>23.05.2021</span>
                    <span className={styles['order__owner']}>Зиновьев Сергей</span>
                    <span data-status='success' className={styles['order__status']}>Оплачено</span>
                    <span className={styles['order__price']}>5 739 ₽</span>
                    <span className={styles['order__comment']}>Добавить отзыв</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Orders;