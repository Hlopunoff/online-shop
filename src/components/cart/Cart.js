import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { addToCart, deleteFromCart } from '../../reducers/singleBouquetSlice';

import styles from './cart.module.scss';

const Cart = () => {
    const cartWrapRef = useRef();
    const cartRef = useRef();
    const cart = useSelector(state => state.singleBouquet.cart);
    const dispatch = useDispatch();

    const closeCart = () => {
        cartWrapRef.current.style.visibility = 'hidden';
        cartRef.current.right = '-100%';
        document.body.classList.remove('cart-shown');
    }

    const deleteCartItem = (id, action) => {
        dispatch(deleteFromCart({
            id, action
        }));
    }

    const renderContent = (items) => {
        const cache = {};
        const res = [...new Set(items)];
        if(items.length > 0) {
            items.forEach(item => {
                if(item.id in cache) {
                    cache[item.id] = cache[item.id] + 1;
                } else {
                    cache[item.id] = 1;
                }
            })
        } else {
            return <span>Корзина пуста</span>;
        }

        return ({
            content: res.map(item => {
            return (
                <div className={styles['cart__item']} key={item.id}>
                    <div className={styles['cart__img-wrap']}>
                        <img src={item.img} alt={item.name} className={styles['cart__img']} />
                    </div>
                    <div className="cart__info">
                        <h4 className={styles['cart__item-title']}>{item.name}</h4>
                        <span className={styles['cart__item-id']}>Артикул: 0092S40240</span>
                        <div className={styles['cart__item-cla']}>
                            <button 
                            className={styles['cart__item-less']}
                            onClick={() => deleteCartItem(item.id, 'decrease')}>-</button>
                            <span className={styles['cart__item-amount']}>{cache[item.id]}</span>
                            <button 
                            className={styles['cart__item-add']}
                            onClick={() => dispatch(addToCart(item))}>+</button>
                            <span className={styles['cart__item-price']}>{item.currPrice * cache[item.id]} ₽</span>
                        </div>
                    </div>
                    <div 
                        className={styles['cart__item-remove']}
                        onClick={() => {
                            deleteCartItem(item.id, 'remove');
                        }}>&times;</div>
                </div>
            );
        }),
            totalPrice: res.reduce((sum, {currPrice, id}) => sum += currPrice * cache[id], 0)
    })}

    const {content, totalPrice} = renderContent(cart);
    return (
        <div className={`cart__substrate ${styles['cart__substrate']}`} ref={cartWrapRef}>
            <div className={`cart ${styles['cart']}`} ref={cartRef}>
                <div className={styles['cart__header']}>
                    <h3 className={styles['cart__title']}>Корзина</h3>
                    <div 
                        className={styles['cart__close']} 
                        onClick={closeCart}>&times;</div>
                </div>
                <div className={styles['cart__list']}>
                    {content}
                </div>
                <div className={styles['cart__footer']}>
                    <div className={styles['cart__total']}>
                        <span className={styles['cart__total-word']}>Итого:</span>
                        <span className={styles['cart__total-price']}>{totalPrice || '0'} ₽</span>
                    </div>
                    <div className={styles['cart__cla']}>
                        <button className={styles['cart__continue']}>Продолжить покупки</button>
                        <button className={styles['cart__checkout']}>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;