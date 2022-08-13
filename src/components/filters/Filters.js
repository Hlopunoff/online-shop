import React, {useRef, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {addFilter, deleteFilter, clearAllFilters} from '../../reducers/filterSlice';

import styles from './filters.module.scss';
import arrowTopImg from '../../assets/icons/arrow-top.svg';

const Filters = () => {
    const dispatch = useDispatch();
    const rangeRef = useRef();
    const filterField = useRef();
    // const [maxPrice, setMaxPrice] = useState();

    const filterBy = (e) => {
        if(e.target && e.target.checked) {
            dispatch(addFilter({
                filter: e.target.getAttribute('data-value'),
                filterName: e.target.getAttribute('data-filter')
            }));
        } else {
            dispatch(deleteFilter({
                filter: e.target.getAttribute('data-value'),
                filterName: e.target.getAttribute('data-filter')
            }));
        }
    }

    const filterByColor = (e) => {
        const target = e.target;
        if(target && target.getAttribute('data-filter') === 'color' && target.getAttribute('data-checked') === 'false') {
            target.style.border = '6px solid #222A46';
            target.setAttribute('data-checked', 'true');
            dispatch(addFilter({
                filterName: target.getAttribute('data-filter'),
                filter: target.getAttribute('data-value')
            }));
        } else {
            target.style.border = '6px solid #fff';
            target.setAttribute('data-checked', 'false');
            dispatch(deleteFilter({
                filterName: target.getAttribute('data-filter'),
                filter: target.getAttribute('data-value')
            }));
        }
    }

    return (
        <aside className={styles.aside}>
            <div className={styles.filters} ref={filterField}>
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
                                // value={maxPrice}
                                className="filter__header-to"/>
                        </div>
                        <div className={styles['filter__body']}>
                            <input 
                                ref={rangeRef}
                                type="range"
                                min={500}
                                max={45500}
                                // onInput={() => setMaxPrice(rangeRef.current.value)}
                                />
                            <div 
                                className={styles['progress-line']}
                                ></div>
                            <div 
                                className={styles['progress-thumb']}
                                ></div>
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
                        <div 
                            id={styles['filter-color-red']} 
                            className={`${styles['color']}`}
                            data-value='red'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>
                        <div 
                            id={styles['filter-color-light-red']} 
                            className={`${styles['color']}`}
                            data-value='light-red'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>
                        <div 
                            id={styles['filter-color-light-pink']} 
                            className={`${styles['color']}`}
                            data-value='light-pink'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>
                        <div 
                            id={styles['filter-color-pink']} 
                            className={`${styles['color']}`}
                            data-value='pink'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>
                        <div 
                            id={styles['filter-color-orange']} 
                            className={`${styles['color']}`}
                            data-value='orange'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>
                        <div 
                            id={styles['filter-color-yellow']} 
                            className={`${styles['color']}`}
                            data-value='yellow'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>
                        <div 
                            id={styles['filter-color-beige']} 
                            className={`${styles['color']}`}
                            data-value='beige'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>
                        <div 
                            id={styles['filter-color-white']} 
                            className={`${styles['color']}`}
                            data-value='white'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>
                        <div 
                            id={styles['filter-color-blue']} 
                            className={`${styles['color']}`}
                            data-value='blue'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>
                        <div 
                            id={styles['filter-color-light-blue']} 
                            className={`${styles['color']}`}
                            data-value='light-blue'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>
                        <div 
                            id={styles['filter-color-green']} 
                            className={`${styles['color']}`}
                            data-value='green'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>
                        <div 
                            id={styles['filter-color-purple']} 
                            className={`${styles['color']}`}
                            data-value='purple'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>
                        <div 
                            id={styles['filter-color-dark-red']} 
                            className={`${styles['color']}`}
                            data-value='dark-red'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>
                        <div 
                            id={styles['filter-color-dark-purple']} 
                            className={`${styles['color']}`}
                            data-value='dark-purple'
                            data-filter='color'
                            data-checked={false}
                            onClick={filterByColor}></div>

                    </div>
                </div>
                <div className={styles['filters__size']}>
                    <h3 className={styles['filters__size-title']}>Размер</h3>
                    <div className={styles['filters__size-d']}>
                        <h4 className={styles['title']}>Диаметр</h4>
                        <div className={styles['options']}>
                            <label className={styles['option']}><input type="checkbox"
                            data-value='<25'
                            data-filter='d'
                            onInput={filterBy} /> До 25см</label>
                            <label className={styles['option']}><input type="checkbox"
                            data-value='41-55'
                            data-filter='d'
                            onInput={filterBy} /> 41-55 см</label>
                            <label className={styles['option']}><input type="checkbox"
                            data-value='26-40'
                            data-filter='d'
                            onInput={filterBy} /> 26-40 см</label>
                            <label className={styles['option']}><input type="checkbox"
                            data-value='>55'
                            data-filter='d'
                            onInput={filterBy} /> Более 55 см</label>
                        </div>
                    </div>
                    <div className={styles['filters__size-h']}>
                        <h4 className={styles['title']}>Высота букета</h4>
                        <div className={styles['options']}>
                            <label className={styles['option']}><input 
                            type="checkbox"
                            data-value='<45'
                            data-filter='h'
                            onInput={filterBy}/>До 45 см</label>
                            <label className={styles['option']}><input 
                            type="checkbox"
                            data-value='61-75'
                            data-filter='h'
                            onInput={filterBy}/>61-75 см</label>
                            <label className={styles['option']}><input 
                            type="checkbox"
                            data-value='46-60'
                            data-filter='h'
                            onInput={filterBy}/>46-60 см</label>
                            <label className={styles['option']}><input 
                            type="checkbox"
                            data-value='>75'
                            data-filter='h'
                            onInput={filterBy}/>Более 75 см</label>
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
                            <label><input 
                            type="checkbox"
                            data-value='tulips'
                            data-filter='type'
                            onInput={filterBy} />Тюльпаны</label>
                        </li>
                        <li className={styles['list__item']}>
                            <label><input 
                            type="checkbox"
                            data-value='eustoma'
                            data-filter='type'
                            onInput={filterBy} />Эустомы</label>
                        </li>
                        <li className={styles['list__item']}>
                            <label><input 
                            type="checkbox"
                            data-value='chrysanthemums'
                            data-filter='type'
                            onInput={filterBy} />Хризантемы</label>
                        </li>
                        <li className={styles['list__item']}>
                            <label><input 
                            type="checkbox"
                            data-value='peonies'
                            data-filter='type'
                            onInput={filterBy} />Пионы</label>
                        </li>
                        <li className={styles['list__item']}>
                            <label><input 
                            type="checkbox"
                            data-value='gerberas'
                            data-filter='type'
                            onInput={filterBy} />Герберы</label>
                        </li>
                        <li className={styles['list__item']}>
                            <label><input 
                            type="checkbox"
                            data-value='Alstroemeria'
                            data-filter='type'
                            onInput={filterBy} />Альстромерии</label>
                        </li>
                    </ul>
                    <a href='#' className={styles['filters__composition-btn']}>Показать все</a>
                </div>
                <div className={styles['filters__to']}>
                    <h3 className={styles['filters__to-title']}>Кому</h3>
                    <ul className={styles['list']}>
                        <li className={styles['list__item']}>
                            <label><input 
                            type="checkbox"
                            data-value="wife"
                            data-filter='relativeTo'
                            onInput={filterBy} />Жене</label>
                        </li>
                        <li className={styles['list__item']}>
                            <label><input 
                            type="checkbox"
                            data-value="mom"
                            data-filter='relativeTo'
                            onInput={filterBy} />Маме</label>
                        </li>
                        <li className={styles['list__item']}>
                            <label><input 
                            type="checkbox"
                            data-value="colleague"
                            data-filter='relativeTo'
                            onInput={filterBy} />Коллеге</label>
                        </li>
                        <li className={styles['list__item']}>
                            <label><input 
                            type="checkbox"
                            data-value="daughter"
                            data-filter='relativeTo'
                            onInput={filterBy} />Дочери</label>
                        </li>
                        <li className={styles['list__item']}>
                            <label><input 
                            type="checkbox"
                            data-value="friend"
                            data-filter='relativeTo'
                            onInput={filterBy} />Подруге</label>
                        </li>
                        <li className={styles['list__item']}>
                            <label><input 
                            type="checkbox"
                            data-value="boss"
                            data-filter='relativeTo'
                            onInput={filterBy} />Начальнику</label>
                        </li>
                    </ul>
                </div>
            </div>
            <button 
                className={styles['filters__btn-clear']}
                onClick={() => {
                    dispatch(clearAllFilters());
                    filterField.current.querySelectorAll('input').forEach(item => {
                        item.checked = false;
                    });
                    filterField.current.querySelectorAll('[data-filter=color]').forEach(item => {
                        item.style.border = '6px solid #fff';
                    });
                }}
                >Очистить фильтры</button>
        </aside>
    )
}


export default Filters;