import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClients } from '../../actions/actions';
import Preloader from '../preloader/Preloader';
import Slider from '../slider/Slider';

import styles from './gallery.module.scss';
// import slide from '../../assets/img/galery.png';

const Gallery = () => {
    const {clients, isLoading, isError} = useSelector(state => state.clients);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchClients('http://localhost:3001/clients'));
    }, [ ]);

    const loading = isLoading ? <Preloader/> : null;
    const error = isError ? <h2>Ошибка!</h2> : null;
    const content = !(isLoading || isError || !clients) ? clients.map(client => {
        return (
            <div className={styles.slide} key={client.id}>
                <img src={client.img} alt="client" />
            </div>
        );
    }) : null;

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles['section__title']}>Галерея</h2>
                <Slider styles={{width: '100%', height: '300px'}}>
                    {loading}
                    {error}
                    {content}
                </Slider>
            </div>
        </section>
    )
}

export default Gallery;