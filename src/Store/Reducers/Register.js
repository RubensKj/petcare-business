const INITIAL_STATE = {
  registerUser: {
    completeName: "",
    email: "",
    phoneNumber: "",
    cpf: "",
    cnpj: "",
    companyName: "",
    address: {
      placeNumber: 0,
      street: '',
      complement: '',
      neighborhood: '',
      city: '',
      states: '',
      cep: '',
    },
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
    case 'ADD_PLACENUMBER':
      return { ...state, registerUser: { ...state.registerUser, address: { ...state.registerUser.address, placeNumber: action.value } } }
    case 'ADD_STREET':
      return { ...state, registerUser: { ...state.registerUser, address: { ...state.registerUser.address, street: action.value } } }
    case 'ADD_COMPLEMENT':
      return { ...state, registerUser: { ...state.registerUser, address: { ...state.registerUser.address, complement: action.value } } }
    case 'ADD_NEIGHBORHOOD':
      return { ...state, registerUser: { ...state.registerUser, address: { ...state.registerUser.address, neighborhood: action.value } } }
    case 'ADD_CITY':
      return { ...state, registerUser: { ...state.registerUser, address: { ...state.registerUser.address, city: action.value } } }
    case 'ADD_STATES':
        return { ...state, registerUser: { ...state.registerUser, address: { ...state.registerUser.address, states: action.value } } }
    case 'ADD_CEP':
      return { ...state, registerUser: { ...state.registerUser, address: { ...state.registerUser.address, cep: action.value } } }
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