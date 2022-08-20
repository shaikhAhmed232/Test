import * as types from "./actionsType";

export const getContacts = (data) => {
  return {
    type: types.GET_CONTACTS,
    payload: data,
  };
};

export const deleteAllContacts = () => {
  return {
    type: types.DELETE_ALL_CONTACTS,
    payload: [],
  };
};

export const fetchContactsApi = () => {
  return (dispatch) => {
    fetch("http://127.0.0.1:8000/api/")
      .then((res) => res.json())
      .then((data) => {
        dispatch(getContacts(data));
      })
      .catch((err) => console.log(err.message));
  };
};
