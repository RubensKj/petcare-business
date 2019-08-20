const INITIAL_STATE = {
    data: {},
    paws: 0,
    isLoading: false,
};

export default function companies(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_COMPANY':
            return { ...state, data: { ...action.value } }
        case 'SET_ISLOADING':
            return { ...state, isLoading: action.value }
        case 'SET_PAWS':
            return { ...state, paws: action.value }
        default:
            return state;
    }
};