import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { createUser } from '../../reducers/userSlice';

import styles from './settings.module.scss';

const Settings = () => {
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [birthday, setBirthday] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e) => {
      e.preventDefault();

      dispatch(createUser({
        userName,
        phone,
        location,
        email,
        birthday
      }));
    }

    return (
      <section className={styles['section']}>
            <h2 className={styles['section__title']}>Настройки</h2>
            <form action="POST" className={styles['form']}>
                <h3 className={styles['form__title']}>Ваши данные</h3>
                <span className={styles['form__desc']}>Ваши контактные данные будут использованы только для обработки заказов и не будут передаваться третьим лицам</span>
                <label htmlFor="username">ФИО</label>
                <input 
                  type="text" 
                  className="form__username" 
                  name='username' 
                  id='username'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}/>
                <label htmlFor="cellphone">Телефон</label>
                <input 
                  type="tel" 
                  className="form__cellphone" 
                  id='cellphone' 
                  name='cellphone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}/>
                <label htmlFor="Email">E-mail</label>
                <input 
                  type="email" 
                  className="form__email" 
                  id='Email' 
                  name='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="location">Город, страна</label>
                <input 
                  type="text" 
                  className="form__location" 
                  id='location' 
                  name='location'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}/>
                <label htmlFor="birthday">Дата рождения</label>
                <input 
                  type="date" 
                  className="form__birthday" 
                  id='birthday' 
                  name='birthday'
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}/>
                <button 
                  className={styles['form__btn']} 
                  type="submit"
                  onClick={onSubmit}>Сохранить данные</button>
            </form>
      </section>
    )
}

export default Settings;