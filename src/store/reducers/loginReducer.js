import * as actionTypes from '../actions/actionTypes';

const initialStote = {
    email: '',
    password: ''
}

const loginReducer = (state = initialStote, action) => {
    let stateCopy = {};
    switch (action.type) {
        case actionTypes.CLICK_LOGIN_ACTION:
            stateCopy = {
                ...state,
                email: action.email,
                password: action.password
            };
            return stateCopy;
        default:
            return state;
    }
}

export default loginReducer;