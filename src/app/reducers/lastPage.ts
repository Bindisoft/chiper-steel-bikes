import { stateApp } from "../types/stateApp";

export const lastPage = (state:stateApp):stateApp => {
  const lastPage = Math.ceil(state.count/10)
  return {...state, page:lastPage};
}