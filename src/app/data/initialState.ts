import { stateApp } from "../types/stateApp";

export const initialState:stateApp = {
  status:'idle',
  section:'list',
  listBikes:[],
  count:0,
  page:1,
  query:'',
  detailBike:null,
  errors:[]
};