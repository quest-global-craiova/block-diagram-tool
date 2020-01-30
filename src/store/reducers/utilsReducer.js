import * as actionTypes from '../actions/actionTypes';

const initialStote = {
    users: undefined,
    ocvReasons: undefined,
    clarityRules: undefined,
    projects: undefined,    
}

const utilsReducer = (state = initialStote, action) => {
    let stateCopy = {};
    switch (action.type) {
        case actionTypes.SAVE_AUDIT_ACTION_SUCCESS:
            stateCopy = {
                ...state
            };
            return stateCopy;
        case actionTypes.LOAD_USERS_ACTION_SUCCESS:
            stateCopy = {
                ...state,
                users: action.users
            };
            return stateCopy;            
        case actionTypes.LOAD_OCV_REASONS_ACTION_SUCCESS:
            stateCopy = {
                ...state,
                ocvReasons: action.ocvReasons
            };
            return stateCopy;       
        case actionTypes.LOAD_CLARITY_RULES_ACTION_SUCCESS:
            stateCopy = {
                ...state,
                clarityRules: action.clarityRules
            };
            return stateCopy;                         
        case actionTypes.LOAD_PROJECTS_ACTION_SUCCESS:
            stateCopy = {
                ...state,
                projects: action.projects
            };
            return stateCopy;               
        default:
            return state;
    }
}

export default utilsReducer;