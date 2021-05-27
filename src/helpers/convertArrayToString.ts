type Array = string[] | number[]

export const convertArrayToString = (array: Array, separator = ',') => array.join(separator)
