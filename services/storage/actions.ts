// https://blog.usejournal.com/persisting-user-authentication-in-a-react-native-app-778e028ac816
/* import { API } from "../fetcher"; */

// =======================================================================
// ROOT
// =======================================================================

export const getToken = (token) => ({
  type: "GET_TOKEN",
  token,
});

export const saveToken = (token) => ({
  type: "SAVE_TOKEN",
  token,
});

export const removeToken = () => ({
  type: "REMOVE_TOKEN",
});

export const loading = (bool) => ({
  type: "LOADING",
  isLoading: bool,
});

export const error = (error) => ({
  type: "ERROR",
  error,
});

/* export const getUserToken = () => (dispatch) => {
  const verifyToken = (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${data}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    dispatch(getToken(data));

    console.log("cookie loaded");

    /* fetch(`${API}auth/user/`, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        dispatch(loading(false));
        if (json.id) {
          dispatch(getToken(data));
          console.log("Token verified.");
        } else {
          console.log("Invalid token.");
        }
      })
      .catch((error) => console.log("error", error));
  };
  const token = getUser();
  verifyToken(token);
}; */

export const saveUserToken = (data) => (dispatch) => {
  dispatch(loading(false));
  dispatch(saveToken(data));
};

export const removeUserToken = () => (dispatch) => {
  dispatch(loading(false));
  dispatch(removeToken());
};
