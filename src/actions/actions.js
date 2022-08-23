import {clientsFetching, clientsFetched, clientsError} from '../reducers/clientsSlice';
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