import React from 'react';

//components
import PostTopbar from './PostTopbar/PostTopbar';
import PostCard from './PostCard/PostCard'

//styles
import classes from './Profile.module.css';

const Profile = () => {
  let data = [
    {
      post: 'Hello'
    },
    {
      post: 'New post'
    },
    {
      post: 'First'
    }
  ]

  let posts = data.map(el => {
    return <PostCard text={el.post} />
  })

  return (
    <div className={classes.profileContainer}>
      <PostTopbar />
      {posts}
    </div>
  )
}

export default Profile;