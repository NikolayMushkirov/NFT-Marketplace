import React from "react";
import { categoriesData } from "../../../data/data";
import styles from "./CategoryCard.module.scss";
const CategoryCard = () => {
  return (
    <>
      {categoriesData.map((category) => (
        <div className={styles.card} key={category.id}>
          <div className={styles.imageBox}>
            <img
              className={styles.background}
              src={category.background}
              alt="background"
            />
            <img className={styles.icon} src={category.icon} alt="icon" />
          </div>

          <div className={styles.name}>{category.name} </div>
        </div>
      ))}
    </>
  );
};

export default CategoryCard;
