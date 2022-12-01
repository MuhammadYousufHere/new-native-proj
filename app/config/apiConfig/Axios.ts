import axios, {AxiosRequestConfig} from 'axios';

const AxiosInstance = async (props: AxiosRequestConfig) => {
  const axiosInstance = axios.create();
  const result = await axiosInstance({...props});
  return result?.data;
};

export default AxiosInstance;
