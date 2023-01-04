import React from "react";
import styles from "./Tabs.module.scss";

const Tabs = ({ tabsData, handleActiveTab, activeTab, tabsAmount}) => {
  return (
    <>

        {tabsData.map((tab) => (
          <>
            <div
              className={activeTab === tab.id ? styles.tabActive : styles.tab}
              id={tab.id}
              key={tab.id}
              onClick={handleActiveTab}
            >
              {tab.tabName}
              {tab.amount && <span id = {tab.id} className={styles.amount}>{tab.amount}</span>}
            </div>

          </>
        ))}

    </>
  );
};

export default Tabs;
