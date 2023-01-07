import React, { useState } from "react";
import styles from "./BrowseCategories.module.scss";
import CategoryCard from "./CategoryCard/CategoryCard";
const BrowseCategories = () => {
  const [isBlurred, setIsBlurred] = useState(true);


  const changeFilter = (e) => {
    if (isBlurred) {
      e.target.style.filter = "none";
      setIsBlurred(!isBlurred);
    } else {
      e.target.style.filter = "blur(7.5px)";
      setIsBlurred(!isBlurred);
    }
  };

  return (
    <>
      <section className={styles.categories}>
        <h3 className={styles.title}>Browse Categories</h3>
        <div className={styles.container}>
          <CategoryCard changeFilter={changeFilter} />
        </div>
      </section>
    </>
  );
};

export default BrowseCategories;
