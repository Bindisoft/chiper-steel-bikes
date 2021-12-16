export type responseDTO<T> = {
  success: boolean,
  data: T,
  error?: any
}