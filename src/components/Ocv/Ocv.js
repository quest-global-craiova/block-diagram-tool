import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Spinner from '../Common/Spinner/Spinner';
import {reactLocalStorage} from 'reactjs-localstorage';

export class Ocv extends Component {

    state ={
        shouldShowSpinner: false,
    }

    user = reactLocalStorage.getObject('user')

    async componentDidMount() {
        // this.showSpinner(true)
        // this.showSpinner(false)
    }

    render() {       
        let spinnerElement = undefined;
        if(this.state.shouldShowSpinner){
            spinnerElement = <Spinner show={true}/>;
        }        

        let ocvContent;
        if(this.props.ocvs && this.props.projects){
            ocvContent = (
                <React.Fragment>
                    <div>Ocv page</div>
                </React.Fragment>
            );
        }

        return (
            <div>            
                Ocv     
                {ocvContent}
                {spinnerElement}
            </div>
        );
    }

    showSpinner = (isVisible) => {
        this.setState({shouldShowSpinner: isVisible})
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Ocv));