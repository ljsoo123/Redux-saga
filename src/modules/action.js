export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const todoActionFunc = {
  increase,
  decrease,
};

export const todoAction = {
  INCREASE,
  DECREASE,
};
