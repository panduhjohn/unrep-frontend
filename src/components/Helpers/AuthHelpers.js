import Axios from './Axios';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

export const createUser = async (userInfo) => {
    try {
        let success = await Axios.post('/api/users/create-user', userInfo);

        return success.data;
    } catch (e) {
        console.log(e);
        throw Error(e.response.data.message);
    }
};

export const login = async (userInfo) => {
    try {
        let success = await Axios.post('/api/users/login', userInfo, {
            withCredentials: true,
        });
        return success.data;
    } catch (e) {
        console.log(e);
        throw Error(e.response.data.message);
    }
};

export const isAuthenticated = () => {
    if (typeof window == 'undefined') return false;

    let foundCookie = Cookies.get('jwt-cookie-expense');

    if (foundCookie) {
        return foundCookie;
    } else {
        return false;
    }
};

export const setUserAuth = (jwtToken, dispatch) => {
    let decodedToken = jwt_decode(jwtToken);
    dispatch({
        type: 'SUCCESS_SIGNED_IN',
        payload: decodedToken,
    });
};

export const logout = async () => {
    try {
        //destroy token on server side
        await Axios.get('/api/users/logout');
        //destroy token on client side
        Cookies.remove('jwt-cookie-expense');
        Cookies.remove('jwt-cookie-refresh-expense');
    } catch (e) {
        throw Error(e.response.data.message);
    }
};

export const createExpense = async (expenseInfo) => {
    try {
        let attempt = await Axios.post('/api/expense', expenseInfo);

        return attempt.data;
    } catch (e) {
        console.log(e);
        throw Error(e.response.data.message);
    }
};
