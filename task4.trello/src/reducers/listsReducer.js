import { CONSTANTS } from "../actions";

let listID = 2;

const initialState = [
  {
    title: "First",
    id: 0,
    cards: [
      {
        id: 0,
        text: "testtesttesttesttesttesttest"
      },
      {
        id: 1,
        text: "testtesttesttesttesttesttesttest"
      }
    ]
  },
  {
    title: "Second",
    id: 1,
    cards: [
      {
        id: 0,
        text: "testtesttesttesttesttesttest"
      },
      {
        id: 1,
        text: "testtesttesttesttesttesttesttest"
      },
      {
        id: 2,
        text: "testtesttesttesttesttesttesttest"
      }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID
      };
      listID += 1;
      return [...state, newList];
    default:
      return state;
  }
};

export default listReducer;
