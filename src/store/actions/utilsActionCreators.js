import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
import {reactLocalStorage} from 'reactjs-localstorage';

// // saveAuditAction
// export const saveAuditAction = () => {
//     return {
//         type: actionTypes.SAVE_AUDIT_ACTION
//     }
// }

// export const saveAuditActionSuccess = () => {
//     return {
//         type: actionTypes.SAVE_AUDIT_ACTION_SUCCESS
//     }
// }
// export const saveAuditActionFail = () => {
//     return {
//         type: actionTypes.SAVE_AUDIT_ACTION_FAIL
//     }
// }

// export const saveAuditAsyncAction = (data) => {
//     return async (dispatch) => {
//         try {
//             dispatch(saveAuditAction());

//             let url = '/audits'
//             const response = await axios.post(url, data)
            
//             dispatch(saveAuditActionSuccess(response.data));
//         } catch (e) {
//             dispatch(saveAuditActionFail());
//         }
//     }
// }

// // loadUsersAsyncAction
// export const loadUsersAction = () => {
//     return {
//         type: actionTypes.LOAD_USERS_ACTION
//     }
// }

// export const loadUsersActionSuccess = (users) => {
//     return {
//         type: actionTypes.LOAD_USERS_ACTION_SUCCESS,
//         users: users
//     }
// }
// export const loadUsersActionFail = () => {
//     return {
//         type: actionTypes.LOAD_USERS_ACTION_FAIL
//     }
// }

// export const loadUsersAsyncAction = () => {
//     return async (dispatch) => {
//         try {
//             dispatch(loadUsersAction());

//             const data = {}
//             let url = '/users'
//             const response = await axios.get(url, data)
            
//             dispatch(loadUsersActionSuccess(response.data));
//         } catch (e) {
//             dispatch(loadUsersActionFail());
//         }
//     }
// }

// // loadOcvReasonsAction
// export const loadOcvReasonsAction = () => {
//     return {
//         type: actionTypes.LOAD_OCV_REASONS_ACTION
//     }
// }

// export const loadOcvReasonsActionSuccess = (ocvReasons) => {
//     return {
//         type: actionTypes.LOAD_OCV_REASONS_ACTION_SUCCESS,
//         ocvReasons: ocvReasons
//     }
// }
// export const loadOcvReasonsActionFail = () => {
//     return {
//         type: actionTypes.LOAD_OCV_REASONS_ACTION_FAIL
//     }
// }

// export const loadOcvReasonsAsyncAction = () => {
//     return async (dispatch) => {
//         try {
//             dispatch(loadOcvReasonsAction());

//             const data = {}
//             let url = '/ocvReasons'
//             const response = await axios.get(url, data)
            
//             dispatch(loadOcvReasonsActionSuccess(response.data));
//         } catch (e) {
//             dispatch(loadOcvReasonsActionFail());
//         }
//     }
// }

// // loadClarityRulesAction
// export const loadClarityRulesAction = () => {
//     return {
//         type: actionTypes.LOAD_CLARITY_RULES_ACTION
//     }
// }

// export const loadClarityRulesActionSuccess = (clarityRules) => {
//     return {
//         type: actionTypes.LOAD_CLARITY_RULES_ACTION_SUCCESS,
//         clarityRules: clarityRules
//     }
// }
// export const loadClarityRulesActionFail = () => {
//     return {
//         type: actionTypes.LOAD_CLARITY_RULES_ACTION_FAIL
//     }
// }

// export const loadClarityRulesAsyncAction = () => {
//     return async (dispatch) => {
//         try {
//             dispatch(loadClarityRulesAction());

//             const data = {}
//             let url = '/clarityRules'
//             const response = await axios.get(url, data)
            
//             dispatch(loadClarityRulesActionSuccess(response.data));
//         } catch (e) {
//             dispatch(loadClarityRulesActionFail());
//         }
//     }
// }

// // loadProjectsAction
// export const loadProjectsAction = () => {
//     return {
//         type: actionTypes.LOAD_PROJECTS_ACTION
//     }
// }

// export const loadProjectsActionSuccess = (projects) => {
//     return {
//         type: actionTypes.LOAD_PROJECTS_ACTION_SUCCESS,
//         projects: projects
//     }
// }
// export const loadProjectsActionFail = () => {
//     return {
//         type: actionTypes.LOAD_PROJECTS_ACTION_FAIL
//     }
// }

// export const loadProjectsAsyncAction = () => {
//     return async (dispatch) => {
//         try {
//             dispatch(loadProjectsAction());

//             const data = {}
//             const response = await axios.get('/projects', data);
            
//             dispatch(loadProjectsActionSuccess(response.data));
//             return response;
//         } catch (e) {
//             dispatch(loadProjectsActionFail());
//         }
//     }
// }

// // uploadFileAction
// export const uploadFileFileAction = () => {
//     return {
//         type: actionTypes.UPLOAD_FILE_ACTION
//     }
// }

// export const uploadFileFileActionSuccess = (ocv) => {
//     return {
//         type: actionTypes.UPLOAD_FILE_ACTION_SUCCESS
//     }
// }
// export const uploadFileFileActionFail = () => {
//     return {
//         type: actionTypes.UPLOAD_FILE_ACTION_FAIL
//     }
// }

// export const uploadFileAsyncAction = (formData) => {
//     return async (dispatch) => {
//         try {
//             dispatch(uploadFileFileAction());
//             let response = await axios.post('/upload', formData, {})
            
//             // dispatch(deleteOcvActionSuccess(response.data));
//             return response
//         } catch (e) {
//             dispatch(uploadFileFileActionFail());
//         }
//     }
// }