import React from 'react';

import styles from './settings.module.scss';

const Settings = () => {
  return (
    <section className={styles['section']}>
          <h2 className={styles['section__title']}>Настройки</h2>
          <form action="GET" className={styles['form']}>
              <h3 className={styles['form__title']}>Ваши данные</h3>
              <span className={styles['form__desc']}>Ваши контактные данные будут использованы только для обработки заказов и не будут передаваться третьим лицам</span>
              <label htmlFor="username">ФИО</label>
              <input type="text" className="form__username" name='username' id='username'/>
              <label htmlFor="cellphone">Телефон</label>
              <input type="tel" className="form__cellphone" id='cellphone' name='cellphone'/>
              <label htmlFor="Email">E-mail</label>
              <input type="email" className="form__email" id='Email' name='Email'/>
              <label htmlFor="location">Город, страна</label>
              <input type="text" className="form__location" id='location' name='location'/>
              <label htmlFor="birthday">Дата рождения</label>
              <input type="date" className="form__birthday" id='birthday' name='birthday'/>
              <button className={styles['form__btn']} type="submit">Сохранить данные</button>
          </form>
    </section>
  )
}

export default Settings;