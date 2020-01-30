import React, {Component} from 'react';
// import classes from './Stream.module.css';
import Modal from '../Common/Modal/Modal';
import Spinner from '../Common/Spinner/Spinner';
import ErrorHandler from '../Common/ErrorHandler/ErrorHandler';
import axios from '../../axios-instance';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {reactLocalStorage} from 'reactjs-localstorage';
import { Constants } from '../../utils/constants';
import * as actionCreators from '../../store/actions/index';

export class Admin extends Component {

    state ={
    }

    user = reactLocalStorage.getObject('user')

    async componentDidMount() {
        await this.props.saveAuditAsyncAction({user: this.user, action: Constants.AUDIT_ENTER_ADMIN_PAGE, details: {}})
    }

    render() {
        console.log('admin');
        
        let adminContent = <Spinner/>;
        if(true){
            adminContent = (
                <div>Admin</div>
            );
        }


        return (
            <div>                 
                {adminContent}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveAuditAsyncAction: (data) => dispatch(actionCreators.saveAuditAsyncAction(data)),
    }
};

export default ErrorHandler(withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin)), axios);