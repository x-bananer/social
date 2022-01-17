import React from 'react';

//styles
import classes from './RedButton.module.css';

const RedButton = (props) => {
  return (
    <button className={classes.redBtn} title="">
      {props.btn}
    </button>
  )
}

export default RedButton;