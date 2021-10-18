import axiosInstance from '../../helpers/axiosInterceptor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../../constants/actionTypes';

export default ({username, password}) =>
  dispatch => {
    dispatch({type: LOGIN_LOADING});
    axiosInstance
      .post('api/auth/login', {
        username,
        password,
      })
      .then(res => {
        console.log('LOGIN SUCCESS!!!', res.data);
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data));
        dispatch({type: LOGIN_SUCCESS, payload: res.data});
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong!'},
        });
      });
  };
