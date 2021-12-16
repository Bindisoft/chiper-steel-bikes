import { stateApp } from "../types/stateApp";

type section = 'list' | 'detail';

export const changeSection = (state:stateApp, newSection:section):stateApp => {
  return {...state, section: newSection};
}