import React from 'react';

//components
import Dialog from './Dialog/Dialog';
import ActiveDialog from './AciveDialog/ActiveDialog';
import ActiveDialogUser from './ActiveDialogUser/ActiveDialogUser';

//styles
import classes from './Messages.module.css';

//images
import menu from '../../assets/images/menu.png'

const Messages = () => {
  let data = [
    {
      name: 'David Smith',
      id: 1,
      src: 'https://gambolthemes.net/workwise-new/images/resources/m-img2.png',
      status: 'Online',
      message: 'Hello!'
    },
    {
      name: 'Nancy Dilan',
      id: 2,
      src: 'https://gambolthemes.net/workwise-new/images/resources/m-img3.png',
      status: 'Online',
      message: 'Hey, how are you today?'
    },
  ]

  let dialogs = data.map(el => {
    return <Dialog name={el.name} id={el.id} src={el.src}/>
  })

  let messages = data.map(el => {
    return <ActiveDialog message={el.message}/>
  })

  return (
    <div className={classes.messagesContainer}>
      <div className={classes.aside}>
        <div className={classes.aside__header}>
          <p className={classes.aside__title}>Messages</p>
          <button className={classes.aside__btn}>
            <img className={classes.aside__btnImg} src={menu} alt="" />
          </button>
          {/* <input className={classes.aside__search} type="text" /> */}
        </div>
        <ul className={classes.contacts}>
          {dialogs}
         </ul>
      </div>
      <div className={classes.chat}>
        <div className={classes.chat__header}>
          <ActiveDialogUser src={data[0].src} name={data[0].name} status={data[0].status} />
        </div>
        <div className={classes.chat__area}>
          <div className={classes.chat__message}>
            {messages}
          </div>
        </div>
        <div className={classes.chat__field}>
          <input type="text" className={classes.chat__input}></input>
        </div>
    </div>
    </div>
  )
}

export default Messages;