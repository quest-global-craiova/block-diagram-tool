import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
import {reactLocalStorage} from 'reactjs-localstorage';

// // loadOcvsAction
// export const loadOcvsAction = () => {
//     return {
//         type: actionTypes.LOAD_OCVS_ACTION
//     }
// }

// export const loadOcvsActionSuccess = (ocvs) => {
//     return {
//         type: actionTypes.LOAD_OCVS_ACTION_SUCCESS,
//         ocvs: ocvs
//     }
// }
// export const loadOcvsActionFail = () => {
//     return {
//         type: actionTypes.LOAD_OCVS_ACTION_FAIL
//     }
// }

// export const loadOcvsAsyncAction = (projectIds) => {
//     return async (dispatch) => {
//         try {
//             dispatch(loadOcvsAction());
            
//             let queryParams = ''
//             if(projectIds && projectIds.length && projectIds[0]){                
//                 for (let i = 0; i < projectIds.length; i++) {
//                     if(i==0){
//                         queryParams+='?'
//                     }

//                     let projectId = projectIds[i];
//                     queryParams+='projectId='+projectId
                    
//                     if(i!=projectIds.length-1){
//                         queryParams+='&'
//                     }
//                 }
//             }

//             let url = '/ocvs' + queryParams
//             // if(projectId && projectId != -1) {
//             //     url = '/projects/' + projectId + '/ocvs'
//             // }
//             const response = await axios.get(url)
//             dispatch(loadOcvsActionSuccess(response.data));
//             return response
            
//         } catch (e) {
//             dispatch(loadOcvsActionFail());
//         }
//     }
// }

// // loadOcvsAction
// export const saveOcvsAction = () => {
//     return {
//         type: actionTypes.SAVE_OCV_ACTION
//     }
// }

// export const saveOcvActionSuccess = (ocv) => {
//     return {
//         type: actionTypes.SAVE_OCV_ACTION_SUCCESS,
//         ocv: ocv
//     }
// }
// export const saveOcvActionFail = () => {
//     return {
//         type: actionTypes.SAVE_OCV_ACTION_FAIL
//     }
// }

// export const saveOcvAsyncAction = (data) => {
//     return async (dispatch) => {
//         try {
//             dispatch(saveOcvsAction());

//             let url = '/ocvs'
            
//             let response;

//             if(data.ocvId){
//                 const ocvId = data.ocvId
//                 delete data.ocvId
//                 response = await axios.patch(url + '/' + ocvId, data)
//             }else {
//                 delete data.ocvId
//                 response = await axios.post(url, data)
//             }
            
//             // dispatch(saveOcvActionSuccess(response.data));
//             return response
//         } catch (e) {
//             dispatch(saveOcvActionFail());
//         }
//     }
// }

// // deleteOcvsAction
// export const deleteOcvsAction = () => {
//     return {
//         type: actionTypes.DELETE_OCV_ACTION
//     }
// }

// export const deleteOcvActionSuccess = (ocv) => {
//     return {
//         type: actionTypes.DELETE_OCV_ACTION_SUCCESS
//     }
// }
// export const deleteOcvActionFail = () => {
//     return {
//         type: actionTypes.DELETE_OCV_ACTION_FAIL
//     }
// }

// export const deleteOcvAsyncAction = (ocvId) => {
//     return async (dispatch) => {
//         try {
//             dispatch(deleteOcvsAction());

//             let url = '/ocvs'
            
//             let response = await axios.delete(url + '/' + ocvId)
            
//             // dispatch(deleteOcvActionSuccess(response.data));
//             return response
//         } catch (e) {
//             dispatch(deleteOcvActionFail());
//         }
//     }
// }