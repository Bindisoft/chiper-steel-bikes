import axios from "axios";
import { responseDTO } from "../types/responseDTO";
import { paramsAPI } from "../types/paramsAPI";
import { defaultParamsAPI } from "../data/defaultParams";
import { bike } from "../types/bike";

//Responses
const successResponse = (data: any):responseDTO<any> => ({success:true, data})
const errorResponse = (error: any):responseDTO<any> => 
  ({success:false, data:[], error})

const getSteelBikesOfBerlin = async (params:paramsAPI) => {
  const options = {
    url: 'https://bikeindex.org/api/v3/search',
    params: {...defaultParamsAPI, ...params}
  };
  const response = await axios.request(options)
  .then((res):responseDTO<bike[]> => {
    return res.data.data ? 
    successResponse(res.data.data.bikes as bike[]) :
    successResponse(res.data.bikes as bike[])
  })
  .catch((e):responseDTO<bike[]> => errorResponse(e))
  return response
}

export { getSteelBikesOfBerlin }