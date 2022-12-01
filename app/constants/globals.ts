import AsyncStorage from '@react-native-async-storage/async-storage';
import {log} from '../config/logger';

export const saveAccessToken = async (auth0AccessToken: string) => {
  try {
    await AsyncStorage.setItem('accessToken', auth0AccessToken);
  } catch (e) {
    log.error(e);
  }
};

export const getAccessToken = async () => {
  try {
    return await AsyncStorage.getItem('accessToken');
  } catch (e) {
    log.error(e);
  }
};
