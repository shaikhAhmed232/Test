import * as types from "../actionsType";

const initialState = {
  contacts: [],
};

const getContactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_CONTACTS:
      return {
        contacts: payload,
      };
    case types.DELETE_ALL_CONTACTS:
      return {
        contacts: payload,
      };

    default:
      return state;
  }
};

export default getContactsReducer;
