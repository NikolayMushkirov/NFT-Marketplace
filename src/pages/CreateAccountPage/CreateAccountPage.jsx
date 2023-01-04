import React from "react";
import Header from "../../components/Header/Header";
import placeholder from "../../assets/img/createAccountImg.png";

import styles from "./CreateAccountPage.module.scss";
import lockKey from "../../assets/icons/createAccount/LockKey.svg";
import user from "../../assets/icons/createAccount/User.svg";
import envelopeSimple from "../../assets/icons/createAccount/EnvelopeSimple.svg";
import Footer from "../../components/Footer/Footer";

const CreateAccountPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <img
          src={placeholder}
          alt="placeholder"
          className={styles.placeholder}
        />
        <div className={styles.box}>
          <div action="" className={styles.titleBox}>
            <h2 className={styles.title}>Create account</h2>
            <p className={styles.subTitle}>
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
          </div>
          <form action="" className={styles.form}>
            <div className={styles.inputWrapper}>
              <div className={styles.inputBox}>
                <img src={user} alt="user" className={styles.icon} />
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Username"
                />
              </div>

              <div className={styles.inputBox}>
                <img
                  src={envelopeSimple}
                  alt="envelopeSimple"
                  className={styles.icon}
                />
                <input
                  type="email"
                  className={styles.input}
                  placeholder="Email Address"
                />
              </div>
              <div className={styles.inputBox}>
                <img src={lockKey} alt="lockKey" className={styles.icon} />
                <input
                  type="password"
                  className={styles.input}
                  placeholder="Password"
                />
              </div>
              <div className={styles.inputBox}>
                <img src={lockKey} alt="lockKey" className={styles.icon} />
                <input
                  type="password"
                  className={styles.input}
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className={styles.button}>Create account</div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateAccountPage;
