import {
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAIL,
} from '../../constants/actionTypes';
import axiosInstance from '../../helpers/axiosInterceptor';

export default form => dispatch => onSuccess => {
  // console.log('!!!FORM!!!', form);
  const requestPayload = {
    country_code: form.country_code || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  };
  dispatch({type: CREATE_CONTACT_LOADING});
  axiosInstance
    .post('api/contacts/', requestPayload)
    .then(res => {
      dispatch({
        type: CREATE_CONTACT_SUCCESS,
        payload: res.data,
      });
      onSuccess();
    })
    .catch(err => {
      dispatch({
        type: CREATE_CONTACT_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong!'},
      });
    });
};
