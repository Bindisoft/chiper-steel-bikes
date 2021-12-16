import { is, test, unless, always, cond, identity, T, match, and } from 'ramda';

export const isNumber = is(Number)
export const isString = is(String)
export const numbersArray = match(/(\d+)/g)
export const validateNumber = unless(test(/^\d+(\.\d+)?$/), always('0'))

export const hasFloat = (arr:string[],idx:number) => 
  and((arr.length > 1),(arr.length - 1 === idx))

export const buildNumber = (value:string):Number => {
  const numberString = numbersArray(value).reduce((acc,cur,idx,arr)=>{
    acc = hasFloat(arr,idx) ? `${acc}.${cur}` : `${acc}${cur}`
    return acc
  },'')
  const numberFormat = validateNumber(numberString)
  return parseFloat(numberFormat);
}

export const toNumber = cond([
  [isNumber, identity],
  [isString, buildNumber],
  [T, always(0)]
]);