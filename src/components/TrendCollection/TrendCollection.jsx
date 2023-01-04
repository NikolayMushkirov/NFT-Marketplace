import React from "react";
import styles from "./TrendCollection.module.scss";

import dogImage from "../../assets/img/dog.png";
import bearImage from "../../assets/img/bear.png";
import catImage from "../../assets/img/cat.png";

import mushRoom from "../../assets/img/mushroom.png";
import mushRoom2 from "../../assets/img/mushroom2.png";
import mushRoom3 from "../../assets/img/mushroom3.png";

import robot from "../../assets/img/robot.png";
import robot2 from "../../assets/img/robot2.png";
import robot3 from "../../assets/img/robot3.png";

import avatar from "../../assets/icons/Avatar(1).svg";
import avatar2 from "../../assets/icons/Avatar(4).svg";
import avatar3 from "../../assets/icons/Avatar(3).svg";


const TrendCollection = () => {
  return (
    <>
      <section className={styles.trendCollection}>
        <div className={styles.infoBox}>
          <h3 className={styles.title}>Trending Collection</h3>
          <p className={styles.info}>
            Checkout our weekly updated trending collection.
          </p>
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.images}>
            <img className={styles.primaryImg} src={dogImage} alt="dog" />
            <div className={styles.imagesBox}>
              <img className={styles.img} src={bearImage} alt="bear" />
              <img className={styles.img} src={catImage} alt="cat" />
              <div className={styles.number}>1025+</div>
            </div>

            <div className={styles.author}>
              <p className={styles.authorTitle}>DSGN Animals</p>
              <div className={styles.avatarBox}>
                <img className={styles.avatar} src={avatar} alt="avatar" />
                <span className={styles.name}>MrFox</span>
              </div>
            </div>
          </div>

          <div className={styles.images}>
            <img className={styles.primaryImg} src={mushRoom} alt="dog" />
            <div className={styles.imagesBox}>
              <img className={styles.img} src={mushRoom2} alt="bear" />
              <img className={styles.img} src={mushRoom3} alt="cat" />
              <div className={styles.number}>1025+</div>
            </div>

            <div className={styles.author}>
              <p className={styles.authorTitle}>DSGN Animals</p>
              <div className={styles.avatarBox}>
                <img className={styles.avatar} src={avatar2} alt="avatar" />
                <span className={styles.name}>MrFox</span>
              </div>
            </div>
          </div>

          <div className={styles.images}>
            <img className={styles.primaryImg} src={robot} alt="dog" />
            <div className={styles.imagesBox}>
              <img className={styles.img} src={robot2} alt="bear" />
              <img className={styles.img} src={robot3} alt="cat" />
              <div className={styles.number}>1025+</div>
            </div>

            <div className={styles.author}>
              <p className={styles.authorTitle}>DSGN Animals</p>
              <div className={styles.avatarBox}>
                <img className={styles.avatar} src={avatar3} alt="avatar" />
                <span className={styles.name}>MrFox</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendCollection;
