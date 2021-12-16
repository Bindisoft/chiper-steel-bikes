import { stateApp } from "../types/stateApp";

export const changeQuery = (state:stateApp, query:string):stateApp => {
  return {...state, query};
}