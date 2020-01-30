import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Spinner.module.css';

const Spinner = (props) => {

    return (
        <div>
            <Backdrop show={props.show} onClickHandler={props.onCloseHandler}>
                {/* add an animated gif or something */}
            </Backdrop>
        </div>
    )
}

export default Spinner;