import React from 'react';

import styles from './benefits.module.scss';
import bgImg from '../../assets/img/benefits-bg.png';

const Benefits = () => {
    return (
        <section className={styles['section']}>
            <div className="container">
                <h2 className={styles['section__title']}>Почему Лавка Роз</h2>
                <span className={styles['section__subtitle']}>Мы предоставляем исключительно комфортные условия взаимодействия всем категориям покупателей, в том числе коммерческим и корпоративным:</span>
                <ul className={styles['section__list']}>
                    <li className="section__item">Удобные способы оплаты – наличными, банковскими картами, по безналичному расчету.</li>
                    <li className="section__item">Вручение по любому адресу (город + пригород) в течение 2 часов.</li>
                    <li className="section__item">Работаем ежедневно, в том числе в выходные и праздничные дни.</li>
                    <li className="section__item">Пошаговое консультационное и информационное сопровождение.</li>
                    <li className="section__item">Предоставление фото- и видеоотчетов (по желанию).</li>
                </ul>
                <img src={bgImg} alt="background" className={styles['section__bg']} />
            </div>
        </section>
    );
}

export default Benefits;