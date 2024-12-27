import axios from 'axios';
import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const axiosInstance = axios.create({
    baseURL: 'https://server-site-rust.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('api response error status from our interceptor', error.status);
            if (error.status === 401 || error.status === 403) {
                signOutUser()
                    .then(() => {
                        // redirect to the login page
                        navigate('/login')
                    })
                    .catch(err => console.log(err))
            }
            return Promise.reject(error);
        })
    }, [signOutUser,navigate])

    return axiosInstance;
};

export default useAxiosSecure;