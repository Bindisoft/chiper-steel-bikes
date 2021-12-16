import { stateApp } from "../types/stateApp";
import { getSteelBikesOfBerlin } from "../api/getSteelBikesOfBerlin";
import { getSteelBikesOfBerlinCount } from "../api/getSteelBikesOfBerlinCount";
import { paramsAPI } from "../types/paramsAPI";

export const getBikes = async (state:stateApp):Promise<stateApp> => {
  const params:paramsAPI = {
    page: state.page.toString(),
    per_page: '10', 
    location: 'Berlin - DE',
    stolenness: 'proximity', 
    query: state.query
  }
  const resBikes = await getSteelBikesOfBerlin(params);
  const resCount = await getSteelBikesOfBerlinCount(params);
  const allSuccess = resBikes.success && resCount.success;
  
  if (allSuccess && resCount.data?.proximity === 0) { 
    return {...state, status: 'empty', page:1}
  }

  if (allSuccess) {
    return {
      ...state,
      status: 'idle',
      listBikes: resBikes.data,
      count: resCount.data.proximity
    }
  }
  
  return {...state, status: 'failed', errors: [resBikes.error, resCount.error]}
}