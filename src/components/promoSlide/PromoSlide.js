import React, {useRef} from 'react';

import styles from './promoSlide.module.scss';
import copyImg from '../../assets/icons/copy.svg';

const PromoSlide = ({title, code}) => {
    const promoCode = useRef(null);
    const messageSuccess = useRef(null);
    const messageFailed = useRef(null);

    return (
        <div className={styles['promo-slide']}>
            <h3 className={styles['promo-slide__title']}>{title}</h3>
            <div className={styles['promo-slide__wrap']}>
                <span className={styles['promo-slide__slogan']}>Промокод:</span>
                <div className={styles['promo-code__cla']}>
                    <span className={styles['promo-code']} ref={promoCode}>{code}</span>
                    <button 
                    className={styles['btn-copy']}
                    onClick={() => {
                        navigator.clipboard.writeText(promoCode.current.textContent)
                        .then(() => messageSuccess.current.style.visibility = 'visible')
                        .catch(() => messageFailed.current.style.visibility = 'visible')
                        .finally(() => {
                            const clearMessages = () => {
                                messageSuccess.current.style.visibility = 'hidden';
                                messageFailed.current.style.visibility = 'hidden';
                                clearTimeout(timeOutId);
                            }
                            const timeOutId = setTimeout(() => {
                                clearMessages();
                            }, 2000);
                        });
                    }}><img src={copyImg} alt="press to copy promo code" /></button>
                    <div className={styles.success} ref={messageSuccess}>Скопировано</div>
                    <div className={styles.failed} ref={messageFailed}>Ошибка!</div>
                </div>
            </div>
        </div>
    )
}

export default PromoSlide;