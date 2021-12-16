import { stateApp } from "../types/stateApp";

export const prevPage = (state:stateApp):stateApp => {
  if (state.page > 1) { return {...state, page: state.page - 1} };
  return state;
}