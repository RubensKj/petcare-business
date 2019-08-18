export function addValue(type, value) {
  return { type: type, value }
}

export function setCompany(value) {
  return { type: 'SET_COMPANY', value }
}

export function setIsLoading(value) {
  return { type: 'SET_ISLOADING', value }
}