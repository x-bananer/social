import React from 'react';

//styles
import classes from './../Messages.module.css';

const ActiveDialog = (props) => {
  return (
    <div className={classes.chat__area}>
      <div className={classes.chat__message}>
        <p>{props.message}</p>
      </div>
    </div>
  )
}

export default ActiveDialog;