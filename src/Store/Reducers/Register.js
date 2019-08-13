const INITIAL_STATE = {
  registerUser: {
    completeName: "",
    email: "",
    phoneNumber: "",
    cpf: "",
    cnpj: "",
    companyName: "",
    description: "",
    rate: 5.0,
    password: "",
  },
  phase: 1,
  error: '',
};

export default function registerUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COMPLETE_NAME':
      return { ...state, registerUser: { ...state.registerUser, completeName: action.value } }
    case 'ADD_EMAIL':
      return { ...state, registerUser: { ...state.registerUser, email: action.value } }
    case 'ADD_PHONENUMBER':
      return { ...state, registerUser: { ...state.registerUser, phoneNumber: action.value } }
    case 'ADD_CNPJ':
      return { ...state, registerUser: { ...state.registerUser, cnpj: action.value } }
    case 'ADD_COMPANY_NAME':
      return { ...state, registerUser: { ...state.registerUser, companyName: action.value } }
    case 'ADD_CPF':
      return { ...state, registerUser: { ...state.registerUser, cpf: action.value } }
    case 'ADD_DESCRIPTION':
      return { ...state, registerUser: { ...state.registerUser, description: action.value } }
    case 'ADD_PASSWORD':
      return { ...state, registerUser: { ...state.registerUser, password: action.value } }
    case 'ADD_PHASE':
      return { ...state, phase: action.number }
    case 'ADD_ERRORS':
      return { ...state, error: action.message }
    default:
      return state;
  }
};