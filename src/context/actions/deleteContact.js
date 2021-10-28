import {
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
} from '../../constants/actionTypes';
import axiosInstance from '../../helpers/axiosInterceptor';

export default id => dispatch => onSuccess => {
  dispatch({type: DELETE_CONTACT_LOADING});
  axiosInstance
    .delete(`api/contacts/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_CONTACT_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch(err => {
      dispatch({
        type: DELETE_CONTACT_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong!'},
      });
    });
};
