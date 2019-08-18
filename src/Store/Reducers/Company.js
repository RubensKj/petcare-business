const INITIAL_STATE = {
    data: {},
    isLoading: false,
};

export default function companies(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_COMPANY':
            return { ...state, data: { ...action.value } }
        case 'SET_ISLOADING':
            return { ...state, isLoading: action.value }
        default:
            return state;
    }
};