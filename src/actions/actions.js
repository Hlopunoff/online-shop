import { bouquetsFetching, bouquetsFetched, bouquetsError } from "../reducers/bouquetsSlice";
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