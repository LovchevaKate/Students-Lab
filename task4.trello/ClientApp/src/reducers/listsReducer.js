import axios from "axios";
import { CONSTANTS } from "../actions";

function getLists() {
  let userId = localStorage.getItem("userId");
  let token = `Bearer ${localStorage.getItem("token")}`;
  let url = `https://localhost:44342/api/user/${userId}/ListAPI`;
  let res = [];
  axios
    .get(url, {
      headers: {
        Authorization: token
      }
    })
    .then(list => {
      res = list;
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    });
  return res;
}

const listsReducer = (state = getLists(), action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
    default:
      return state;
  }
};

export default listsReducer;
