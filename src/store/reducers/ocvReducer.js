import * as actionTypes from '../actions/actionTypes';

const initialStote = {
    ocvs: undefined,
    ocv: undefined
}

const ocvReducer = (state = initialStote, action) => {
    let stateCopy = {};
    switch (action.type) {
        case actionTypes.LOAD_OCVS_ACTION_SUCCESS:
            stateCopy = {
                ...state,
                ocvs: action.ocvs
            };
            return stateCopy;
        case actionTypes.SAVE_OCV_ACTION_SUCCESS:
            stateCopy = {
                ...state,
                ocv: action.ocv
            };
            return stateCopy;            
        case actionTypes.DELETE_OCV_ACTION_SUCCESS:
            stateCopy = {
                ...state
            };
            return stateCopy;                                 
        default:
            return state;
    }
}

export default ocvReducer;