import axios from "axios";
import { CONSTANTS } from "../actions";

const test = async () => {
  let userId = localStorage.getItem("userId");
  let token = `Bearer ${localStorage.getItem("token")}`;
  let url = `https://localhost:44342/api/user/${userId}/ListAPI`;

  const res = await axios.get(url, {
    headers: {
      Authorization: token
    }
  });

  return res;
};

const listsReducer = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.GET_LISTS: {
      console.log(test(), test().data);

      return [...state, test()];
    }
    case CONSTANTS.ADD_LIST: {
      let userId = localStorage.getItem("userId");
      let token = `Bearer ${localStorage.getItem("token")}`;
      let url = `https://localhost:44342/api/user/${userId}/ListAPI`;
      axios
        .post(
          url,
          {
            userId: userId,
            title: action.payload
          },
          {
            headers: {
              Authorization: token
            }
          }
        )
        .then(list => {
          state = [...state, list.data];
        })
        .catch(e => {
          console.log(e);
        });
      return state;
    }

    default:
      return state;
  }
};

export default listsReducer;
