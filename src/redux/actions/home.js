import * as types from '../actions/types';
import axios from 'axios';
import {Platform} from 'react-native';
import {baseUrl} from '../../constants/constants';
import ShowSnackBar from '../../components/SnackBar';
import {authLoad, dollarRate} from './auth';

export const activeScreen = params => ({
  type: types.ACTIVE_SCREEN,
  payload: params,
});

export const getHotels = (data, onSuccessNews) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}fetch_hotels.php`, requestOptions)
        .then(response => response.json())
        .then(response => {
          dispatch(homeLoad(false));
          if (response.state) {
            onSuccessNews(response.data);
          }
        })
        .catch(error => console.log('error', error));
    } catch (err) {
      ShowSnackBar('Something went wrong');
    }
  };
};

export const reserveRoom = (data, onSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}reserve_hotel_room.php`, requestOptions)
        .then(response => response.json())
        .then(response => {
          dispatch(homeLoad(false));
          if (response.state) {
            onSuccess(response.data);
          } else {
            ShowSnackBar('Something Went Wrong');
          }
        })
        .catch(error => console.log('error', error));
    } catch (err) {
      ShowSnackBar('Something went wrong');
    }
  };
};

export const userReservation = (data, success) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}fetch_user_reservations.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          if (response.state === 'OK') {
            dispatch(homeLoad(false));
            success(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const conversations = (data, success) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}fetch_user_conversations.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            console.log('it is ok');
            success(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const messages = (data, success) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(
        `${baseUrl}fetch_conversation_between_manager_and_user.php`,
        requestOptions,
      )
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            console.log('it is ok');
            dispatch(homeLoad(false));
            success(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const sendMessag = (data, success) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}send_manager_user_message.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          if (response.state === 'OK') {
            success(true);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      dispatch(homeLoad(false));
      console.log(err);
    }
  };
};

export const changeAvatar = (data, imageSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}update_user_avatar.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            dispatch(loginSuccess(response.data.manager));
            ShowSnackBar('Profile picture changed.', 'green');
          } else {
            ShowSnackBar('There is something wrong');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      onErrorNews(err);
    }
  };
};

export const changePassword = (data, passwordSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}update_user_password.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            ShowSnackBar('Password changed successfully', 'green');
            passwordSuccess(true);
          } else {
            ShowSnackBar('Something went wrong');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      onErrorNews(err);
    }
  };
};

export const addReview = (data, passwordSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}send_review.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            ShowSnackBar('Review Added', 'green');
            passwordSuccess(true);
          } else {
            ShowSnackBar('Something went wrong');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      onErrorNews(err);
    }
  };
};

export const likeHotel = (data, passwordSuccess) => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch(`${baseUrl}toggle_hotel_like.php`, requestOptions)
        .then(response => response.json())
        .then(function (response) {
          console.log(response);
          dispatch(homeLoad(false));
          if (response.state === 'OK') {
            ShowSnackBar('Hotel added to Favourite', 'green');
            passwordSuccess(true);
          } else {
            ShowSnackBar('Something went wrong');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      onErrorNews(err);
    }
  };
};
export const convert = data => {
  return async dispatch => {
    try {
      var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
      };

      fetch('https://admin.raklissd.com/convert.php', requestOptions)
        .then(response => response.json())
        .then(result => {
          dispatch(homeLoad(false));
          if (result.success) {
            console.log(result);
            console.log(Math.round(result.result));
            dispatch(dollarRate(Math.round(result.result)));
            ShowSnackBar('Currency Converted Successfully.', 'green');
          }
        })
        .catch(error => console.log('error', error));
    } catch (err) {
      dispatch(homeLoad(false));
      console.log('err');
      console.log(err);
    }
  };
};

// helping functions
export const homeLoad = data => {
  return {
    type: types.HOME_LOADING,
    payload: data,
  };
};

export const homeDat = data => {
  return {
    type: types.HOME_DATA,
    payload: data,
  };
};

export const finalReservation = data => {
  return {
    type: types.FINAL_RESERVE,
    payload: data,
  };
};

export const storeHotels = data => {
  return {
    type: types.STORE_HOTELS,
    payload: data,
  };
};

export const storeConversation = data => {
  return {
    type: types.STORE_CONVERSATION,
    payload: data,
  };
};
export const setLanguage = data => {
  return {
    type: types.SET_LANGUAGE,
    payload: data,
  };
};

export const changeCurrency = data => {
  return {
    type: types.CHNAGE_CURRENCY,
    payload: data,
  };
};
