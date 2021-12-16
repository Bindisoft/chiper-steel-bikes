import { stateApp } from "../types/stateApp";

export const firstPage = (state:stateApp):stateApp => {
  return {...state, page:1};
}