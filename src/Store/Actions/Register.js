export function addErrors(message) {
  return { type: 'ADD_ERRORS', message }
}

export function addInput(type, value) {
  return { type: type, value }
}

export function changePhase(number) {
  return { type: 'ADD_PHASE', number }
}