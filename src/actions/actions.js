import {clientsFetching, clientsFetched, clientsError} from '../reducers/clientsSlice';
import { newsFetched, newsError, newsFetching } from '../reducers/newsSlice';
import { soonFetching, soonFetched, soonError} from '../reducers/incomingSlice';

export const fetchClients = (url) => {
    return async (dispatch) => {
        try {
            dispatch(clientsFetching());

            const res = await fetch(url);
            const data = await res.json();

            dispatch(clientsFetched(data));
        } catch (error) {
            dispatch(clientsError());
        }
    }
};

export const fetchNews = (url) => {
    return async (dispatch) => {
        try {
            dispatch(newsFetching());

            const res = await fetch(url);
            const data = await res.json();

            dispatch(newsFetched(data));
        } catch (error) {
            dispatch(newsError());
        }
    }
};

export const fetchFutureBouquets = (url) => {
    return async (dispatch) => {
        try {
            dispatch(soonFetching());

            const res = await fetch(url);
            const data = await res.json();

            dispatch(soonFetched(data));
        } catch (error) {
            dispatch(soonError());
        }
    }
};