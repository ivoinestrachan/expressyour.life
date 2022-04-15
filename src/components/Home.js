import React, {useState} from 'react';
import ImageHead from "../assets/headerbanner.svg";
import styles from "../styles/header.module.css"

const Home = () => {

  const [user, setUser] = useState({
    username: '',
    message: '',
  });

  const [isError, setIsError] = useState(false);

  const [fieldError, setFieldError] = useState({
    username: '',
    message: '',
  });


  const handleOnChange = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!user.username || !user.message) setIsError(true);
    if (!user.message) setFieldError({...fieldError, message: 'Express yourself here ', username: 'You need a username or you can type Anonymous '});
  }



  

  return (
    <div className={styles.container}>
      <div className={styles.imagebanner}>
      <img  draggable="false"  src={ImageHead} alt="imagehead" />
      </div>
      <div className={styles.formcontainer}>
        <form className={styles.form} onSubmit={handleOnSubmit}>
          <div className={styles.inputWrapper}>
            <input 
             className={`${styles.input} ${
              isError && fieldError ? styles.errorfield : ''
            } `}
            placeholder='Name or Anonymous'
             name="username"
             value={user.username}
             onChange={handleOnChange}
            autoComplete='off' />
               <p className={styles.fielderrormsg}>{fieldError.username}</p>
          </div>
          <div className={styles.textareawrapper}>
      <textarea 
        placeholder="Express yourself"
        className={`${styles.textArea} ${
          isError && fieldError ? styles.errorfield : ''
        } `}
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        name="message" />
         <p className={styles.fielderrormsg}>{fieldError.message}</p>
      </div>
      <div className={styles.buttonWrapper}>
      <button className={styles.inputButton}>Express</button>
      </div>
      </form>
      </div>
    </div>
  );
}

export default Home;
