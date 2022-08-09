import {clientsFetching, clientsFetched, clientsError} from '../reducers/clientsSlice';
import { bouquetsFetching, bouquetsFetched, bouquetsError } from "../reducers/bouquetsSlice";
import { commentsError, commentsFetching, commentsFetched } from '../reducers/commentsSlice';
import { newsFetched, newsError, newsFetching } from '../reducers/newsSlice';
export const fetchBouquets = (url) => {
    return async (dispatch) => {
        try {
            dispatch(bouquetsFetching());

            const res = await fetch(url);
            const data = await res.json();

            dispatch(bouquetsFetched(data));
        } catch (error) {
            dispatch(bouquetsError());
        }
    }
};

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

export const fetchComments = (url) => {
    return async (dispatch) => {
        try {
            dispatch(commentsFetching());

            const res = await fetch(url);
            const data = await res.json();

            dispatch(commentsFetched(data));
        } catch (error) {
            dispatch(commentsError());
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