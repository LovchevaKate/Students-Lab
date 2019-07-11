import { CONSTANTS } from "../actions";

export const addList = title => {
  return { type: CONSTANTS.ADD_LIST, payload: title };
};

export const getLists = () => {
  return { type: CONSTANTS.GET_LISTS };
};
