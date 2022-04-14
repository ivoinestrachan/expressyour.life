import React from 'react';
import styles from "../styles/feed.module.css"
const Feed = ({username, message}) => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>{username}</div>
      <div className={styles.message}>
        {message}
      </div>
    </div>
  );
}

export default Feed;
