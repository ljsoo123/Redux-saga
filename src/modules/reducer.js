import { todoAction } from "./action";

const initialState = {
  number: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case todoAction.INCREASE: {
      return {
        number: state.number + 1,
      };
    }
    case todoAction.DECREASE: {
      return {
        number: state.number - 1,
      };
    }
    default: {
      return state;
    }
  }
};
