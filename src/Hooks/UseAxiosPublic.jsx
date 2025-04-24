import axios from "axios";



 const AxiosPublic = axios.create({
    baseURL: 'https://server-site-rust.vercel.app'
})

const useAxiosPublic = () => {
  return AxiosPublic;
};

export default useAxiosPublic;