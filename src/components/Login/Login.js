import React from 'react';
import {connect} from 'react-redux';
import {withRouter } from 'react-router-dom';
import classes from './Login.module.css';

const Login = () => {

  return (
    <main className={classes.loginForm} >
        <h2>Login Form</h2>

        <div className={classes.container}>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
                
            <button type="submit">Login</button>
        </div>
    </main>
  );
}



const mapStateToProps = () => {
  return {
  };
};

const mapDispatchToProps = () => {
  return {
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

