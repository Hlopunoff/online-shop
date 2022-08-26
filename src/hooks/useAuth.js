import { useSelector } from "react-redux";

export const useAuth = () => {
    const {userName, email, id} = useSelector(state => state.user.user);

    return {
        isAuth: !!id,
        userName,
        email,
        id,
    };
};