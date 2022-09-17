import axios from "axios";
import CONSTANTS from "../../../Comman/constants";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const domain = `https://my-milk-dairy-14b69-default-rtdb.asia-southeast1.firebasedatabase.app`;

export const GetAllUsers = () => async (dispatch) => {
  dispatch({ type: CONSTANTS.GET_USER_REQUEST });

  const url = `${domain}/users.json`;
  const { status, data } = await axios.get(url, config);

  if (status === 200) {
    const allUsers = [];
    for (const key in data) {
      const obj = {
        id: key,
        ...data[key],
      };
      allUsers.push(obj);
    }

    dispatch({ type: CONSTANTS.GET_USER_SUCCESS, payload: allUsers });
  } else {
    dispatch({ type: CONSTANTS.GET_USER_FAILED, payload: "error" });
  }
};

export const updateUserAction = (user) => async (dispatch) => {
  dispatch({ type: CONSTANTS.UPDATE_USER_REQUEST });
  let url;
  if (user?.role === "User") {
    url = `${domain}/users/${user?.id}/.json`;
  } else if (user?.role === "User") {
    url = `${domain}/users/${user?.id}/.json`;
  }

  const response = await axios.patch(url, JSON.stringify(user), config);

  if (response?.status === 200) {
    dispatch({
      type: CONSTANTS.UPDATE_USER_SUCCESS,
      payload: "User details updated successfully",
    });
  } else {
    dispatch({
      type: CONSTANTS.UPDATE_USER_FAILED,
      payload: "Something went wrong!",
    });
  }
};

export const clearUpdateRes = () => {
  return {
    type: CONSTANTS.CLEAR_UPDATE_USER_RES,
  };
};

export const GetAllAdmins = () => async (dispatch) => {
  dispatch({ type: CONSTANTS.GET_USER_REQUEST });

  const url = `${domain}/admin.json`;
  const { status, data } = await axios.get(url, config);

  if (status === 200) {
    const allUsers = [];
    for (const key in data) {
      const obj = {
        id: key,
        ...data[key],
      };
      allUsers.push(obj);
    }

    dispatch({ type: CONSTANTS.GET_USER_SUCCESS, payload: allUsers });
  } else {
    dispatch({ type: CONSTANTS.GET_USER_FAILED, payload: "error" });
  }
};

export const addAdminUser = (userData) => async (dispatch) => {
  dispatch({ type: CONSTANTS.GET_SIGNUP_REQUEST });
  try {
    const url = `${domain}/admin.json`;
    const { status } = await axios.post(url, userData, config);

    if (status === 200) {
      dispatch({
        type: CONSTANTS.SIGNUP_USER_SUCCESS,
        payload: { status: 200, message: "Added Admin User Successfully" },
      });
    } else {
      dispatch({ type: CONSTANTS.SIGNUP_USER_FAILED, payload: "error" });
    }
  } catch (error) {
    dispatch({ type: CONSTANTS.SIGNUP_USER_FAILED, payload: "error" });
  }
};

export const ChangePassword = (id, newPassword) => async (dispatch) => {
  // const url = `https://my-milk-dairy-14b69-default-rtdb.asia-southeast1.firebasedatabase.app/users/:${id}`
  // const response = await axios.put(`${url}`, newPassword, config)
  // console.log(response)
};
