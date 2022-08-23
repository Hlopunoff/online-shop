import React from 'react';

import styles from './delivery.module.scss';
import deliveryImg1 from '../../assets/icons/Truck_Speed.svg';
import deliveryImg2 from '../../assets/icons/Ruble.svg';
import deliveryImg3 from '../../assets/icons/red-clock.svg';

const Delivery = () => {
  return (
    <div className={styles['delivery']}>
        <h2 className={styles['delivery__title']}>Доставка</h2>
        <div className={styles['delivery__speed']}>
            <img src={deliveryImg1} alt="the fastest delivery" />
            <span>Доставка цветов осуществляется по Воронежу и пригороду Воронежа в течении двух часов!</span>
        </div>
        <span className={styles['delivery__subtitle']}>Наша служба доставки работает без праздников и выходных.<br></br>Доставка цветов осуществляется в указанное время +- 30 минут.</span>
        <div className={styles['delivery__info']}>
            <div className={styles['delivery__rate']}>
                <img src={deliveryImg2} alt="Rates for delivery" className="rate__img" />
                <div className="rate__info">
                    <h3 className={styles['rate__title']}>Тарифы на доставку:</h3>
                    <span className={styles['rate__price']}>По городу 300 руб.</span>
                    <span className={styles['rate__text']}>Отдаленые районы - расчет производится автоматически при оформление заказа!</span>
                </div>
            </div>
            <div className={styles['delivery__timeline']}>
                <img src={deliveryImg3} alt="timeline" />
                <div className="timeline__info">
                    <h3 className={styles['timeline__title']}>Время работы магазина:</h3>
                    <span className={styles['timeline__timeline']}>Пн-Сб: 8:00-20:00 
                    <br></br>Вс: 9:00-20:00</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delivery;