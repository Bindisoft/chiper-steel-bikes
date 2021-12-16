import axios from "axios";
import { responseDTO } from "../types/responseDTO";
import { paramsAPI } from "../types/paramsAPI";
import { defaultParamsAPI } from "../data/defaultParams";
import { count } from "../types/count";

//Responses
const successResponse = (data: any):responseDTO<any> => ({success:true, data})
const errorResponse = (error: any):responseDTO<any> => 
  ({success:false, data:[], error})

const getSteelBikesOfBerlinCount = async (params:paramsAPI) => {
  const options = {
    url: 'https://bikeindex.org/api/v3/search/count',
    params: {...defaultParamsAPI, ...params}
  };
  const response = await axios.request(options)
  .then((res):responseDTO<count> => {
    return res.data.data ? 
    successResponse(res.data.data as count) :
    successResponse(res.data as count)
  })
  .catch((e):responseDTO<count> => errorResponse(e))
  return response
}

export { getSteelBikesOfBerlinCount }