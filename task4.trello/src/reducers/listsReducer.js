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
    id: 0,
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
    default:
      return state;
  }
};

export default listReducer;
