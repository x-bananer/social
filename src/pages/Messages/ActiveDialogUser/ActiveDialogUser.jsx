import React from 'react';

//styles
import classes from './../Messages.module.css';

const ActiveDialogUser = (props) => {
  return (
    <>
      <img className={classes.chatContact__avatar} src={props.src} alt="" />
      <div className={classes.chat__headerText}>
        <span className={classes.chatContact__name}>{props.name}</span>
        <span className={classes.chatContact__status}>{props.status}</span>
      </div>
    </>
  )
}

export default ActiveDialogUser;