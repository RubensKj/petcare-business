export function addValue(type, value) {
  return { type: type, value }
}

export function setCompany(value) {
  return { type: 'SET_COMPANY', value }
}

export function setCompanyStatus(value) {
  return { type: 'SET_COMPANY_STATUS', value }
}

export function setIsLoading(value) {
  return { type: 'SET_ISLOADING', value }
}

export function setPaws(value) {
  return { type: 'SET_PAWS', value }
}