import React from 'react';

import styles from './payment.module.scss';
import paymentMethod1 from '../../assets/icons/hand-credit-card.svg';
import paymentMethod2 from '../../assets/icons/cards.svg';
import alertImg from '../../assets/icons/Info.svg';
import cardImg1 from '../../assets/img/piece.png';
import cardImg2 from '../../assets/img/visa.png';
import cardImg3 from '../../assets/img/mastercard.png';
import cardImg4 from '../../assets/img/maestro.png';
import cardImg5 from '../../assets/icons/youpay.svg';
import cardImg6 from '../../assets/icons/webmoney.png';
import cardImg7 from '../../assets/icons/qiwi.svg';



const Payment = () => {
  return (
    <div className={styles['payment']}>
        <h2 className={styles['payment__title']}>Оплата</h2>
        <span className={styles['payment__subtitle']}>Мы предлагаем Вам следующие способы оплаты заказов:</span>
        <div className={styles['payment__method']}>
            <img src={paymentMethod1} alt="pay by credit card or in cash" />
            <span>Оплата в цветочном магазине наличными или банковской картой;</span>
        </div>
        <div className={styles['payment__method']}>
            <img src={paymentMethod2} alt="pay by credit card" />
            <span>Банковской картой</span>
        </div>
        <div className={styles['payment__alert']}>
            <img src={alertImg} alt="alert" />
            <span>Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо нажать кнопку «Оплата заказа банковской картой».</span>
        </div>
        <span className={styles['payment__info']}>Оплата происходит через ПАО СБЕРБАНК с использованием Банковских карт следующих платежных систем:</span>
        <div className={styles['payment__banks']}>
            <div className={styles['payment__bank']}>
                <div className={styles['img__wrap']}>
                    <img src={cardImg1} alt="piece" />
                    <img src={cardImg2} alt="visa" />
                    <img src={cardImg3} alt="mastercard" />
                    <img src={cardImg4} alt="maestro" />
                </div>
                <span>Банковские карты</span>
            </div>
            <div className={styles['payment__bank']}>
                <div className={styles['img__wrap']}>
                    <img src={cardImg5} alt="youpay" />
                    <img src={cardImg6} alt="webmoney" />
                    <img src={cardImg7} alt="qiwi" />
                </div>
                <span>Электронные деньги</span>
            </div>
        </div>
        <div className={styles['payment__alert']}>
            <img src={alertImg} alt="alert" />
            <span>Если заказ сделан в рабочее время (с 8:00 до 20:00 MSK), то в течение 20 минут наш менеджер свяжется с Вами по телефону для подтверждения заказа и уточнения удобного для Вас времени доставки.</span>
        </div>
    </div>
  )
}

export default Payment;