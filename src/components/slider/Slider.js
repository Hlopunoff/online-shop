import React, {useRef, useState} from 'react';

import styles from './mainSlider.module.scss';

const Slider = (props) => {
    const sliderRef = useRef();
    const [offset, setOffset] = useState(0);

    const scrollSlider = (side) => {
        if(side === 'left') {
            if(offset === -200) {
                setOffset(0);
            } else {
                setOffset(prevOffset => prevOffset - 100);
            }
        } else {
            if(offset === 0) {
                setOffset(-200);
            } else {
                setOffset(prevOffset => prevOffset + 100);
            }
        }

        sliderRef.current.style.left = `${offset}%`;
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