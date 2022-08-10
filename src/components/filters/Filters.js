import React from 'react';

import styles from './filters.module.scss';
import arrowTopImg from '../../assets/icons/arrow-top.svg';

const Filters = () => {
  return (
    <aside className={styles.aside}>
        <div className={styles.filters}>
            <div className={styles['filters__header']}>
                <h3 className={styles['filters__header-title']}>Букеты из роз</h3>
                <div className={styles['filters__types']}>
                    <span className={styles['type']}>Местные розы</span>
                    <span className={styles['type']}>Эквадорские розы</span>
                    <span className={styles['type']}>Кенийские розы</span>
                </div>
            </div>
            <div className={styles['filters__price']}>
                <h3 className={styles['filters__price-title']}>Цена</h3>
                <div className={styles['filter']}>
                    <div className={styles['filter__header']}>
                        <input 
                            type="number" 
                            min={500}
                            // value={500}
                            className="filter__header-from"/>
                        <input 
                            type="number" 
                            max={45500} 
                            // value={45500}
                            className="filter__header-to"/>
                    </div>
                    <div className={styles['filter__body']}>
                        <input 
                            type="range"
                            min={500}
                            max={45500} />
                    </div>
                    <div className={styles['filter__footer']}>
                        <span className="filter__footer-from">от 500 ₽</span>
                        <span className="filter__footer-to">до 45 500 ₽</span>
                    </div>
                </div>
            </div>
            <div className={styles['filters__colors']}>
                <h3 className={styles['filters__colors-title']}>Цвета</h3>
                <div className={styles['colors']}>
                    <div id={styles['filter-color-red']} className={`${styles['color']}`}></div>
                    <div id={styles['filter-color-light-red']} className={`${styles['color']}`}></div>
                    <div id={styles['filter-color-light-pink']} className={`${styles['color']}`}></div>
                    <div id={styles['filter-color-pink']} className={`${styles['color']}`}></div>
                    <div id={styles['filter-color-orange']} className={`${styles['color']}`}></div>
                    <div id={styles['filter-color-yellow']} className={`${styles['color']}`}></div>
                    <div id={styles['filter-color-beige']} className={`${styles['color']}`}></div>
                    <div id={styles['filter-color-white']} className={`${styles['color']}`}></div>
                    <div id={styles['filter-color-blue']} className={`${styles['color']}`}></div>
                    <div id={styles['filter-color-light-blue']} className={`${styles['color']}`}></div>
                    <div id={styles['filter-color-green']} className={`${styles['color']}`}></div>
                    <div id={styles['filter-color-purple']} className={`${styles['color']}`}></div>
                    <div id={styles['filter-color-dark-red']} className={`${styles['color']}`}></div>
                    <div id={styles['filter-color-dark-purple']} className={`${styles['color']}`}></div>
                </div>
            </div>
            <div className={styles['filters__size']}>
                <h3 className={styles['filters__size-title']}>Размер</h3>
                <div className={styles['filters__size-d']}>
                    <h4 className={styles['title']}>Диаметр</h4>
                    <div className={styles['options']}>
                        <label className={styles['option']}><input type="checkbox" /> До 25см</label>
                        <label className={styles['option']}><input type="checkbox" /> 41-55 см</label>
                        <label className={styles['option']}><input type="checkbox" /> 26-40 см</label>
                        <label className={styles['option']}><input type="checkbox" /> Более 55 см</label>
                    </div>
                </div>
                <div className={styles['filters__size-h']}>
                    <h4 className={styles['title']}>Высота букета</h4>
                    <div className={styles['options']}>
                        <label className={styles['option']}><input type="checkbox"/>До 45 см</label>
                        <label className={styles['option']}><input type="checkbox"/>61-75 см</label>
                        <label className={styles['option']}><input type="checkbox"/>46-60 см</label>
                        <label className={styles['option']}><input type="checkbox"/>Более 75 см</label>
                    </div>
                </div>
            </div>
            <div className={styles['filters__composition']}>
                <div className={styles['header']}>
                    <h3 className={styles['title']}>Состав</h3>
                    <img src={arrowTopImg} alt="show more" />
                </div>
                <ul className={styles['list']}>
                    <li className={styles['list__item']}>
                        <label><input type="checkbox" />Тюльпаны</label>
                    </li>
                    <li className={styles['list__item']}>
                        <label><input type="checkbox" />Эустомы</label>
                    </li>
                    <li className={styles['list__item']}>
                        <label><input type="checkbox" />Хризантемы</label>
                    </li>
                    <li className={styles['list__item']}>
                        <label><input type="checkbox" />Пионы</label>
                    </li>
                    <li className={styles['list__item']}>
                        <label><input type="checkbox" />Герберы</label>
                    </li>
                    <li className={styles['list__item']}>
                        <label><input type="checkbox" />Альстромерии</label>
                    </li>
                </ul>
                <a href='#' className={styles['filters__composition-btn']}>Показать все</a>
            </div>
            <div className={styles['filters__to']}>
                <h3 className={styles['filters__to-title']}>Кому</h3>
                <ul className={styles['list']}>
                    <li className={styles['list__item']}>
                        <label><input type="checkbox" />Жене</label>
                    </li>
                    <li className={styles['list__item']}>
                        <label><input type="checkbox" />Маме</label>
                    </li>
                    <li className={styles['list__item']}>
                        <label><input type="checkbox" />Коллеге</label>
                    </li>
                    <li className={styles['list__item']}>
                        <label><input type="checkbox" />Дочери</label>
                    </li>
                    <li className={styles['list__item']}>
                        <label><input type="checkbox" />Подруге</label>
                    </li>
                    <li className={styles['list__item']}>
                        <label><input type="checkbox" />Начальнику</label>
                    </li>
                </ul>
            </div>
        </div>
        <button className={styles['filters__btn-clear']}>Очистить фильтры</button>
    </aside>
  )
}


export default Filters;