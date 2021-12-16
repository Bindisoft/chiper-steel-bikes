import {getSteelBikesOfBerlin} from './getSteelBikesOfBerlin';
import { defaultParamsAPI } from '../data/defaultParams'

//En este test se valida que se encuentren los keys necesarios.
test('Validate Keys', async()=>{
  const res = await getSteelBikesOfBerlin(defaultParamsAPI);
  expect(res.data[0]).toHaveProperty('id')
  expect(res.data[0]).toHaveProperty('description')
  expect(res.data[0]).toHaveProperty('date_stolen')
  expect(res.data[0]).toHaveProperty('manufacturer_name')
  expect(res.data[0]).toHaveProperty('serial')
  expect(res.data[0]).toHaveProperty('stolen_coordinates')
  expect(res.data[0]).toHaveProperty('stolen_location')
  expect(res.data[0]).toHaveProperty('thumb')
  expect(res.data[0]).toHaveProperty('title')
  expect(res.data[0]).toHaveProperty('year')
})
