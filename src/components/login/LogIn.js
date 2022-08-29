import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {setUser} from '../../reducers/userSlice';

import styles from './login.module.scss';
import closeImg from '../../assets/icons/cross.svg'

const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const onLogIn = (e) => {
        e.preventDefault();
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, pass)
        .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }));
            navigate('/account');
        })
        .catch((error) => {
            throw new Error(`Could not log in: ${error.message}`);
        });
    }

    return (
    <div className={styles['wrap']}>
        <form action="POST" className={styles['form']}>
            <h2 className={styles['form__title']}>Войти</h2>
            <label htmlFor="email" className={styles['form__label']}>E-mail</label>
            <input 
                type="email" 
                className={styles['form__input']} 
                id='email' 
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="pass" className={styles['form__label']}>Пароль</label>
            <input 
                type="password" 
                name="password" 
                id="pass" 
                className={styles['form__input']}
                value={pass}
                onChange={(e) => setPass(e.target.value)}/>
            <button 
                type='submit' 
                className={styles['form__btn']}
                onClick={onLogIn}>Войти</button>
            <span className={styles['form__cla']}>Нет аккаунта? <Link to="/register" className={styles['form__reg']}>Зарегестрироваться</Link></span>
            <div onClick={() => navigate(-2)} className={styles['form__close']}>
            <img src={closeImg} alt="close" />
            </div>
        </form>
    </div>
    )
}

export default LogIn;