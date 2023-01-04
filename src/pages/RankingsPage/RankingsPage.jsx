import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import Footer from "../../components/Footer/Footer";

import { namesData, rankingsTabsData } from "../../data/data";

import styles from "./RankingsPage.module.scss";
import Tabs from "../../components/Tabs/Tabs";

const RankingsPage = () => {
  const [activeTab, setActiveTab] = useState('1');

  const handleActiveTab = (e) => {
    if (e.target.id !== activeTab) {
      setActiveTab(e.target.id);
    }
  };
  console.log(activeTab);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>Top Creators</h2>
          <p className={styles.subtitle}>
            Check out top ranking NFT artists on the NFT Marketplace.
          </p>
        </div>

        {/* <div className={styles.tabs}>
          <div className={`${styles.tab} ${styles.tabActive}`}>Today</div>
          <div className={styles.tab}>This Week</div>
          <div className={styles.tab}>This Month</div>
          <div className={styles.tab}>All Time</div>
        </div> */}
        <div className={styles.tabs}>
          <Tabs
            tabsData={rankingsTabsData}
            handleActiveTab={handleActiveTab}
            activeTab={activeTab}
          />
        </div>

        <div className={styles.table}>
          <div className={styles.tableCellHeader}>
            <div className={styles.creatorNameBox}>
              <div className={styles.serialNumber}>#</div>
              <span className={styles.name}>Artist</span>
            </div>
            <div className={styles.statsBox}>
              <span className={styles.change}>Change</span>
              <span className={styles.sold}>NFTs Sold</span>
              <span className={styles.volume}>Volume</span>
            </div>
          </div>
          {namesData.map((creator) => (
            <Table
              id={creator.id}
              name={creator.name}
              avatar={creator.avatar}
              change={creator.change}
              sold={creator.NFTsSold}
              volume={creator.volume}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RankingsPage;
