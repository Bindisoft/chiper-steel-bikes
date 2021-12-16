import { stateApp } from "../types/stateApp";

type status = 'idle' | 'loading' | 'failed';

export const changeStatus = (state:stateApp, newStatus:status):stateApp => {
  return {...state, status: newStatus};
}