import React, {useState} from 'react';
import styles from '../styles/story.module.css';



const Storyupdate = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {

    setModal(!modal);

  }

  if(modal){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <div className={styles.circle}  onClick={toggleModal} >
      <div>
  <img className={styles.img} src="https://cdn.mos.cms.futurecdn.net/snbrHBRigvvzjxNGuUtcck.jpg" alt="" />
  <svg 
  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg " 
     xmlspace="preserve">  
    <circle cx="50" cy="50" r="40" />
  </svg>
  <div className={styles.update}>
    Story Update
  </div>
  </div>


      {
        modal && (
          
    
  <div className={styles.modal}>
      <div onClick={toggleModal} className={styles.overlay}>
        <div className={styles.storyContent}>
          <div className={styles.storyBody}>
          I am currently adding feed
        </div>
          <div  onClick={toggleModal} className={styles.close}>
            X
            </div>
        </div>
      </div>
    </div>
        )
      }

</div>
  );
}

export default Storyupdate;
