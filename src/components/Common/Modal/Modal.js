import React, {Component} from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{

    //for optimization
    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render(){
        let classNames = [classes.Modal, this.props.show?classes.Show:classes.Hide];
        classNames = classNames.join(' ');
        return (
            <React.Fragment>
                <div className={classNames}>
                    {this.props.children}
                </div>
                <Backdrop show={this.props.show} onClickHandler={this.props.closeModalHandler}/>
            </React.Fragment>
        );
    }
}
export default Modal;