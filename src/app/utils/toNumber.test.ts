import { isNumber, isString, numbersArray, validateNumber, buildNumber, toNumber } from './toNumber';

//Validamos la funcion auxiliar isNumber
test('Validate isNumber',()=>{
  expect.assertions(7);
  expect(isNumber('')).toBe(false)
  expect(isNumber('foo')).toBe(false)
  expect(isNumber({})).toBe(false)
  expect(isNumber([])).toBe(false)
  expect(isNumber('47,254.27')).toBe(false)
  expect(isNumber(20.4)).toBe(true)
  expect(isNumber(0)).toBe(true)
})

//Validamos la funcion auxiliar isString
test('Validate isString',()=>{
  expect.assertions(7);
  expect(isString('')).toBe(true)
  expect(isString('foo')).toBe(true)
  expect(isString({})).toBe(false)
  expect(isString([])).toBe(false)
  expect(isString('47,254.27')).toBe(true)
  expect(isString(20.4)).toBe(false)
  expect(isString(0)).toBe(false)
})

//Validamos la funcion auxiliar numbersArray
test('Validate numbersToArray',()=>{
  expect.assertions(3);
  expect(numbersArray('')).toStrictEqual([])
  expect(numbersArray('47,254.27')).toStrictEqual(['47','254','27'])
  expect(numbersArray('47254,27')).toStrictEqual(['47254','27'])
})

//Validamos la funcion auxiliar validateNumber
test('Validate validateNumber',()=>{
  expect.assertions(6);
  expect(validateNumber('')).toBe('0')
  expect(validateNumber('47000')).toBe('47000')
  expect(validateNumber('47,254.27')).toBe('0')
  expect(validateNumber('47254,27')).toBe('0')
  expect(validateNumber('47254.27')).toBe('47254.27')
  expect(validateNumber('4.725427')).toBe('4.725427')
})

//Validamos la funcion auxiliar buildNumber
test('Validate buildNumber',()=>{
  expect.assertions(3);
  expect(buildNumber('')).toBe(0)
  expect(buildNumber('47,254.27')).toBe(47254.27)
  expect(buildNumber('47254,27')).toBe(47254.27)
})

// Validamos la funcion toNumber con diferentes valores y tipos de datos
test('Validate toNumber',()=>{
  expect.assertions(10);
  expect(toNumber('')).toBe(0)
  expect(toNumber('foo')).toBe(0)
  expect(toNumber('2oo,45')).toBe(2.45)
  expect(toNumber({})).toBe(0)
  expect(toNumber([])).toBe(0)
  expect(toNumber('47,254.27')).toBe(47254.27)
  expect(toNumber('47254,27')).toBe(47254.27)
  expect(toNumber('47,254,27')).toBe(47254.27)
  expect(toNumber(20.4)).toBe(20.4)
  expect(toNumber(0)).toBe(0)
})