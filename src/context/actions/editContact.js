import {
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_FAIL,
} from '../../constants/actionTypes';
import axiosInstance from '../../helpers/axiosInterceptor';

export default (form, id) => dispatch => onSuccess => {
  console.log('!!!FORM!!!', form);
  const requestPayload = {
    country_code: form.country_code || form.cca2 || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  };
  console.log('requestPayload', requestPayload);
  dispatch({type: EDIT_CONTACT_LOADING});
  axiosInstance
    .put(`api/contacts/${id}`, requestPayload)
    .then(res => {
      dispatch({
        type: EDIT_CONTACT_SUCCESS,
        payload: res.data,
      });
      onSuccess(res.data);
    })
    .catch(err => {
      dispatch({
        type: EDIT_CONTACT_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong!'},
      });
    });
};
