import React from 'react';

//styles
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__section}>
        <div className={classes.header__container}>
          <span className={classes.header__logoWrap}>
            <img src="https://gambolthemes.net/workwise-new/images/logo.png" alt="logo" />
          </span>
          <div className={classes.header__login}>
              <button className={classes.header__loginBtn}>
                Log Out
              </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;