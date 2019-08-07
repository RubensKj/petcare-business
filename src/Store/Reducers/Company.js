const INITIAL_STATE = {
    data: {},
};

export default function companies(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_COMPANY':
            return { ...state, data: { ...action.company } }
        default:
            return state;
    }
};