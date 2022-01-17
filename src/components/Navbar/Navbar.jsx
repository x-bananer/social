import React from 'react';

//styles
import classes from './Navbar.module.css';

//images
import messages from '../../assets/images/ic4.png';
import news from '../../assets/images/ic1.png';
import music from '../../assets/images/ic2.png';
import settings from '../../assets/images/ic3.png';

//router
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  let data = [
    {
      name: 'John Doe',
      desc: 'Graphic Designer at Self Employed',
      src: 'https://gambolthemes.net/workwise-new/images/resources/user-pro-img.png'
    }
  ]

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarUser}>
        <div className={classes.navbarUser__dt}>
          <img className={classes.navbarUser__avatar} src={data[0].src} alt="" />
        </div>
        <div className={classes.navbarUser__specs}>
          <h3 className={classes.navbarUser__name}>{data[0].name}</h3>
          <span className={classes.navbarUser__desc}>{data[0].desc}</span>
        </div>
      </div>
      <ul className={classes.navbar__list}>
        <li className={classes.navbar__listItem}>
          <NavLink to="/messages" activeClassName="" className={classes.navbar__listItemLink}>
            <img src={messages} alt="" className={classes.navbar__listItemIcon} />
            <span className={classes.navbar__listItemDesc}>Messages</span>
          </NavLink>
        </li>
        <li className={classes.navbar__listItem}>
          <NavLink to="/news" activeClassName="" className={classes.navbar__listItemLink}>
            <img src={news} alt="" className={classes.navbar__listItemIcon} />
            <span className={classes.navbar__listItemDesc}>News</span>
          </NavLink>
        </li>
        <li className={classes.navbar__listItem}>
          <NavLink to="/music" activeClassName="" className={classes.navbar__listItemLink}>
            <img src={music} alt="" className={classes.navbar__listItemIcon} />
            <span className={classes.navbar__listItemDesc}>Music</span>
          </NavLink>
        </li>
        <li className={classes.navbar__listItem}>
          <NavLink to="/settings" activeClassName="" className={classes.navbar__listItemLink}>
            <img src={settings} alt="" className={classes.navbar__listItemIcon} />
            <span className={classes.navbar__listItemDesc}>Settings</span>
          </NavLink>
        </li>
      </ul>
      <div className={classes.navbarUser__btnWrapper}>
        <NavLink to="/profile" className={classes.navbarUser__btn}>View Profile</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;