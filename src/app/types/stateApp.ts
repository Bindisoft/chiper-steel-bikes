import { bike } from "./bike"

export type stateApp = {
  status: 'idle' | 'loading' | 'failed' | 'empty',
  section: 'list' | 'detail'
  listBikes:bike[]
  count:number
  page:number
  query:string
  detailBike:bike | null
  errors:string[]
}