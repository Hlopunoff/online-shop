import React, {useRef, useState} from 'react';

import styles from './mainSlider.module.scss';

const Slider = (props) => {
    const sliderRef = useRef();
    const [offset, setOffset] = useState(0);

    const scrollSlider = (side) => {
        if(side === 'left') {
            setOffset(prev => offset < 1 ? prev + 1 : -1);
        } else {
            setOffset(prev => offset > -1 ? prev - 1 : 1);
        }

        // console.log(props.children.length);
        //!todo Сделать более гибкий слайдер, основываясь на количестве получаемых children
        sliderRef.current.style.transform = `translateX(${offset * -100}%)`;
    };
    return (
        <>
            <div className={styles.slider} style={props.styles}>
                <div className={styles.content} ref={sliderRef} style={{left: '0%'}}>
                    {props.children}
                </div>
                <button onClick={() => {scrollSlider('left')}} className={`icon-arrow-right ${styles['arrow-right']}`}></button>
                <button onClick={() => {scrollSlider('right')}} className={`icon-arrow-right ${styles['arrow-left']}`}></button>
            </div>
        </>
    )
}


export default Slider;