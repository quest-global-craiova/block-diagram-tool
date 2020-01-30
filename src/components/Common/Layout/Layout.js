import React, { Component } from 'react';
import {withRouter, BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import {reactLocalStorage} from 'reactjs-localstorage';
import classes from './Layout.module.css';
import Login from '../../Login/Login'
import OcvReports from '../../OcvReports/OcvReports';
import Ocv from '../../Ocv/Ocv';
import Diagram from '../../Diagram/Diagram';
import LeftBar from '../LeftBar/LeftBar'
import TopBar from '../TopBar/TopBar'

class Layout extends Component {
  state = {    
    shouldShowMessage: false,    
    messageVariant: 'error', 
    messageText: '',
    shouldShowConfirmation: false,
    confirmationCallback: undefined
  }
  
  user = reactLocalStorage.getObject('user')
  token = reactLocalStorage.get('token')

  async componentDidMount() {
  }

  // clickLogoutHandler = async (e) => {
  //   const response = await this.props.clickLogoutAsyncAction()
    
  //   if (response && response.status === 200) {
  //     await this.props.saveAuditAsyncAction({user: this.user, action: Constants.AUDIT_LOGOUT, details: {}})
  //     reactLocalStorage.set('token', undefined);
  //     reactLocalStorage.setObject('user', undefined);
  
  //     this.props.history.push('/')
  //   } 
  // }

  render() {
   
    // let messageElement = undefined;
    // if(this.state.shouldShowMessage){
    //   messageElement = <Message variant= {this.state.messageVariant} message={this.state.messageText} open={this.state.shouldShowMessage} onCloseHandler={this.onMessageClose}/>
    // }

    // let confirmationDialogElement = undefined;
    // if(this.state.shouldShowConfirmation){
    //   confirmationDialogElement = <ConfirmationDialog title="Delete Ocv" keepMounted open={this.state.shouldShowConfirmation} onCloseHandler={this.onConfirmationDialogClose}/>
    // }    

    return (
        <React.Fragment>
          <Route path="/login" exact  component={Login}/>

          <div className={classes.layoutTopBar}><TopBar/></div>
          <div className={classes.layoutLeftBar}><LeftBar/></div>          
          <div className={classes.layoutContent}>
            
            {/* <Route path="/ocv" exact render={(props) => <Ocv {...props} showSpinner = {this.showSpinner} showMessage = {this.showMessage} showConfirmationDialog = {this.showConfirmationDialog}/>}/> */}
            <Route path="/diagram" exact render={(props) => <Diagram {...props} showSpinner = {this.showSpinner} showMessage = {this.showMessage} showConfirmationDialog = {this.showConfirmationDialog}/>}/>
            <Route path="/ocv" exact render={(props) => <Ocv {...props} showSpinner = {this.showSpinner} showMessage = {this.showMessage} showConfirmationDialog = {this.showConfirmationDialog}/>}/>
            <Route path="/ocvReports" exact render={(props) => <OcvReports {...props} showMessage = {this.showMessage}/>}/>
          </div>
          {/* {messageElement}
          {confirmationDialogElement}         */}
        </React.Fragment>
    )
  };
}



const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickLogoutAsyncAction: () => dispatch(actionCreators.clickLogoutAsyncAction()),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));