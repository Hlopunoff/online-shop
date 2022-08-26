import React from 'react';

import styles from './discounts.module.scss';

const Discounts = () => {
  return (
    <section className={styles['section']}>
        <h2 className={`${styles['section__title']}`}>О скидках</h2>
        <h3 className={`${styles['section__subtitle']} ${styles.first}`}>1. Накопительная система скидок для зарегистрированных пользователей</h3>
        <p className={`${styles['section__text']} ${styles.first}`}>Наша шкала скидок основывается на общей сумме, потраченной вами на заказ цветов, и не распространяется на другие группы товаров. Ваша скидка высчитывается автоматически, и вы всегда можете посмотреть её в Личном Кабинете (в правом верхнем углу сайта). Пожалуйста, помните: чтобы ваши заказы учитывались системой и влияли на скидку, вы должны размещать их как зарегистрированный пользователь, предварительно введя свои логин и пароль. Скидка не действует на букеты с маркой «Акция».</p>
        <table className={styles['table']}>
            <colgroup>
                <col />
                <col style={{background: '#F2F6F7'}}/>
            </colgroup>
            <thead>
                <tr className="table__row">
                    <th className={styles['table__title']}>Общая сумма заказов от</th>
                    <th className={styles['table__title']}>Скидка</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table__row">
                    <td className={styles['table__data']}>$200</td>
                    <td className={styles['table__data']}>2%</td>
                </tr>
                <tr className="table__row">
                    <td className={styles['table__data']}>$300</td>
                    <td className={styles['table__data']}>3%</td>
                </tr>
                <tr className="table__row">
                    <td className={styles['table__data']}>$500</td>
                    <td className={styles['table__data']}>4%</td>
                </tr>
                <tr className="table__row">
                    <td className={styles['table__data']}>$700</td>
                    <td className={styles['table__data']}>5%</td>
                </tr>
                <tr className="table__row">
                    <td className={styles['table__data']}>$1000</td>
                    <td className={styles['table__data']}>6%</td>
                </tr>
                <tr className="table__row">
                    <td className={styles['table__data']}>$1000</td>
                    <td className={styles['table__data']}>7%</td>
                </tr>
            </tbody>
        </table>
        <h3 className={`${styles['section__subtitle']} ${styles.second}`}>2. Партнерские дисконтные программы</h3>
        <p className={styles['section__text']}>Мы предоставляем скидки владельцам некоторых дисконтных, клубных и пластиковых карт. Скидка не действует на букеты с маркой «Акция». <a href="#" className={styles['section__more']}>Подробнее</a></p>
        <h3 className={`${styles['section__subtitle']} ${styles.third}`}>3. Купоны на скидку</h3>
        <p className={styles['section__text']}>Мы проводим различные акции, в ходе которых разыгрываются призы и купоны на скидку (от 3 до 25%). Информацию о проводимых акциях и конкурсах можно найти на наших страницах ВКонтакте и Facebook (признан властями РФ экстремистской организацией). Скидки по нескольким купонам не суммируются. Скидка не действует на букеты с маркой «Акция». </p>
    </section>
  )
}

export default Discounts;