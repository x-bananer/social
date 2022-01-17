import React from 'react';

//styles
import classes from './../Messages.module.css';

//router
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
  return (
    <NavLink to={"/messages/" + props.id} className={classes.contact}>
      <img className={classes.contact__avatar} src={props.src} alt=""/>
      <span className={classes.contact__name}>{props.name}</span>
    </NavLink>
  )
}

export default Dialog;