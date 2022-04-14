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
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
  }
    const { username,  message} = user;


   // if (!username || !message) return console.log('pls provide with all details');
   if (!username) {
    setIsError(true);
    setFieldError({
      ...fieldError,
      username: 'You need a username or you can type Anonymous ',
    });
  }
  if (!message) {
    setIsError(true);
    setFieldError({
      ...fieldError,
      message: 'Express yourself Im here for you',
    });
  }


  if (isError) return;

  return (
    <div className={styles.container}>
      <div className={styles.imagebanner}>
      <img  draggable="false"  src={ImageHead} alt="imagehead" />
      </div>
      <div className={styles.formcontainer}>
        <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
          <div className={styles.inputWrapper}>
            <input 
             className={`${styles.input} ${
              isError && fieldError ? styles.errorfield : ''
            } `}
            placeholder='Name or Anonymous'
             name="username"
             value={user.username}
             onChange={(e) => handleOnChange(e)}
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
        onChange={(e) => handleOnChange(e)}
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
