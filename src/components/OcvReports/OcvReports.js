import React, {Component} from 'react';
import Spinner from '../Common/Spinner/Spinner';
import ErrorHandler from '../Common/ErrorHandler/ErrorHandler';
import axios from '../../axios-instance';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {reactLocalStorage} from 'reactjs-localstorage';

export class OcvReports extends Component {

    state ={
        shouldShowSpinner: false,
    }

    user = reactLocalStorage.getObject('user')

    async componentDidMount() {
    }

    render() {
        let spinnerElement = undefined;
        if(this.state.shouldShowSpinner){
            spinnerElement = <Spinner show={true}/>;
        }        
        

        let ocvReportsContent = undefined;

        return (
            <div>       
                ocvReports          
                {ocvReportsContent}
                {spinnerElement}
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {
    };
};

const mapDispatchToProps = () => {
    return {
    }
};

export default ErrorHandler(withRouter(connect(mapStateToProps, mapDispatchToProps)(OcvReports)), axios);