import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {setUser} from '../../reducers/userSlice';

import styles from './register.module.scss';
import closeImg from '../../assets/icons/cross.svg';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, pass)
        .then(({user}) => {
          // Signed in 
          dispatch(setUser({
            userName,
            email: user.email,
            token: user.accessToken,
            id: user.uid
          }));
          setLoading(false);
          navigate('/account');
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }

    return (
      <div className={styles['wrap']}>
          <form action="POST" className={styles['form']}>
              <h2 className={styles['form__title']}>Регистрация</h2>
              <label htmlFor="username" className={styles['form__label']}>ФИО</label>
              <input 
                id='username' 
                type="text" 
                className={styles['form__input']} 
                name='username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}/>
              <label htmlFor="email" className={styles['form__label']}>E-mail</label>
              <input 
                id='email' 
                type="email" 
                className={styles['form__input']} 
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
              <label htmlFor="password" className={styles['form__label']}>Пароль</label>
              <input 
                id='password' 
                type="password" 
                className={styles['form__input']} 
                name='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}/>
              <button 
                type="submit" 
                className={styles['form__btn']}
                onClick={handleSubmit}
                disabled={loading}
                style={loading ? {background: '#505567'} : null}>Зарегистрироваться</button>
              <p className={styles['form__policy']}>Нажимая кнопку "Зарегистрироваться" вы соглашаетесь с условиями <a href="#" className={styles['form__policy-link']}>обработки персональных данных и публичной офертой</a>.</p>
              <div onClick={() => navigate(-2)} className={styles['form__close']}>
                <img src={closeImg} alt="close" />
              </div>
          </form>
      </div>
    )
}

export default Register;