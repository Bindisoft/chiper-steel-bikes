import { stateApp } from "../types/stateApp";

export const changePage = (state:stateApp, page:number):stateApp => {
  return {...state, page};
}