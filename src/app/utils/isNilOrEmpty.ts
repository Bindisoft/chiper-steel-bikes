const { anyPass, isEmpty, isNil } = require('ramda');

export const isNilOrEmpty = anyPass([isNil, isEmpty]);