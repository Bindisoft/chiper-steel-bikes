import { stateApp } from "../types/stateApp";

export const nextPage = (state:stateApp):stateApp => {
  const lastPage = Math.ceil(state.count/10)
  if (state.page < lastPage) { return {...state, page: state.page + 1} };
  return state;
}