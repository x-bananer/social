import React, { useState } from 'react';

//сomponents
import Modal from '../../../components/Modal/Modal';

//styles
import classes from './PostTopbar.module.css';

const PostTopbar = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={classes.postTopbar}>
      <div className={classes.postTopbar__avatar}>
        <img className={classes.postTopbar__photo} src="https://gambolthemes.net/workwise-new/images/resources/user-pro-img.png" alt="" />
      </div>
      <div className={classes.postTopbar__btnWrapper}>
        <button className={classes.postTopbar__btn} onClick={() => setModalActive(true)} title="">
          New Post
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={classes.postModal}>
          <h3>Add Post</h3>
            <div className={classes.postModal__content}>
              <div className={classes.postModal__text}>
                <textarea className={classes.postModal__textarea}></textarea>
              </div>
              <div className={classes.postModal__btns}>
                <button className={classes.postTopbar__btn} onClick={() => setModalActive(false)} title="">
                  Cancel
                </button>
                <button className={classes.postTopbar__btn} onClick={() => setModalActive(true)} title="">
                  Add Post
                </button>
              </div>
            </div>
        </div>
      </Modal>
    </div>
  )
}

export default PostTopbar;