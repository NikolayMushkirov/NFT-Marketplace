import React, { useState } from "react";
import styles from "./BrowseCategories.module.scss";
import CategoryCard from "./CategoryCard/CategoryCard";
const BrowseCategories = () => {
  return (
    <>
      <section className={styles.categories}>
        <h3 className={styles.title}>Browse Categories</h3>
        <div className={styles.container}>
          <CategoryCard />
        </div>
      </section>
    </>
  );
};

export default BrowseCategories;
