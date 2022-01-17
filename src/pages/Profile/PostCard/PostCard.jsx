import React from 'react';

//styles
import classes from './PostCard.module.css';

const PostCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <div className={classes.cardHeader__avatar}>
          <img className={classes.cardHeader__photo} src="https://gambolthemes.net/workwise-new/images/resources/user-pro-img.png" alt="" />
        </div>
        <div className={classes.cardHeader__username}>
          <span>John Doe</span>
        </div>
      </div>
      <div>
        <div>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default PostCard;