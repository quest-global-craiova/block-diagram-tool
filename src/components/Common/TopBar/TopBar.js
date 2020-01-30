import React from 'react';
import classes from './TopBar.module.css';


const topBar = (props) => (
    <div className={classes.topBar}>
      <div className="toolbar" id="toolbar" />
    </div>
)

function callback(key) {
  console.log(key);
}
export default topBar;