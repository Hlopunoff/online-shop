import React from 'react'

import styles from './aboutUs.module.scss';
import bossImg from '../../assets/img/boss.png';
import managerImg1 from '../../assets/img/manager1.png';
import managerImg2 from '../../assets/img/manager2.png';
import floristImg1 from '../../assets/img/florist1.png';
import floristImg2 from '../../assets/img/florist2.png';
import floristImg3 from '../../assets/img/florist3.png';

const AboutUs = () => {
  return (
    <div className={styles['about']}>
        <h2 className={styles['about__title']}>О нас</h2>
        <div className={styles['about__info']}>
            <p className={styles['about__desc']}>На ваш выбор представлены как классические, так и необычные экзотические букеты, которых Вам не предложат другие магазины цветов. Мы предлагаем своим клиентам букеты из самых разных цветов: лилий, роз, ирисов, тюльпанов, герберов, а для любителей экзотики подойдут букеты из орхидей, фаленопсисов, ванды, цимбидиума, геликонии брунии, стрелиции.<br></br><br></br>Можете быть уверены, что в нашем интернет магазине осуществляется продажа только свежесрезанных цветов, поражающих своей красотой и благоуханием. Мы не используем химические вещества для искусственного сохранения свежести, потому что ценим доверие, оказанное нам нашими клиентами.</p>
            <h3 className={styles['about__subtitle']}>Основные причины сделать заказ в нашем цветочном салоне</h3>
            <ul className={styles['about__list']}>
                <li className={styles['about__item']}>Невероятное разнообразие цветов к любому событию</li>
                <li className={styles['about__item']}>Быстрая доставка цветов по Воронежу</li>
                <li className={styles['about__item']}>Разработка эксклюзивных букетов из роз</li>
            </ul>
            <h3 className={styles['about__subtitle']}> Как сделать заказ в нашем интернет магазине?</h3>
            <span className={styles['about__howto']}>Вы делаете заказ, мы подготавливаем букет к назначеному времени , или можете оформить доставку, и наши курьеры доставят вам букет.</span>
        </div>
        <div className={styles['about__employees']}>
            <h2 className={styles['about__title']}>Наши сотрудники:</h2>
            <div className={styles['employees']}>
                <div className={styles['employee']}>
                    <div className={styles['employee__img-wrap']}>
                        <img src={bossImg} alt="boss" className={styles['employee__img']} />
                    </div>
                    <h4 className={styles['employee__name']}>Денис, руководитель.</h4>
                </div>
                <div className={styles['employee']}>
                    <div className={styles['employee__img-wrap']}>
                        <img src={managerImg1} alt="manager" className={styles['employee__img']} />
                    </div>
                    <h4 className={styles['employee__name']}>Марина, менеджер.</h4>
                </div>
                <div className={styles['employee']}>
                    <div className={styles['employee__img-wrap']}>
                        <img src={managerImg2} alt="manager" className={styles['employee__img']} />
                    </div>
                    <h4 className={styles['employee__name']}>Дмитрий, менеджер.</h4>
                </div>
                <div className={styles['employee']}>
                    <div className={styles['employee__img-wrap']}>
                        <img src={floristImg1} alt="florist" className={styles['employee__img']} />
                    </div>
                    <h4 className={styles['employee__name']}>Кристина, флорист.</h4>
                </div>
                <div className={styles['employee']}>
                    <div className={styles['employee__img-wrap']}>
                        <img src={floristImg2} alt="florist" className={styles['employee__img']} />
                    </div>
                    <h4 className={styles['employee__name']}>Мадина, флорист.</h4>
                </div>
                <div className={styles['employee']}>
                    <div className={styles['employee__img-wrap']}>
                        <img src={floristImg3} alt="florist" className={styles['employee__img']} />
                    </div>
                    <h4 className={styles['employee__name']}>Татьяна, флорист.</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;