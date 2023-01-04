import React from "react";
import styles from "./Table.module.scss";
const Table = ({ id, name, avatar, change, sold, volume }) => {
  return (
    <>

        <div className={styles.tableCell}>
          <div className={styles.creatorNameBox}>
            <div className={styles.serialNumber}>{id}</div>
            <img src={avatar} alt="avatar" className={styles.avatar} />
            <span className={styles.name}>{name}</span>
          </div>
          <div className={styles.statsBox}>
            <span className={styles.change}>{change}</span>
            <span className={styles.sold}>{sold}</span>
            <span className={styles.volume}>{volume}</span>
          </div>
        </div>

    </>
  );
};

export default Table;
