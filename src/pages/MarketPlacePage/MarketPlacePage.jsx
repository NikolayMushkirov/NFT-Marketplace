import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import searchIcon from "../../assets/icons/searchIcon.svg";
import styles from "./MarketPlacePage.module.scss";
import { MarketPlaceCards, marketplaceTabsData } from "../../data/data";
import NFTCard from "../../components/NFTCard/NFTCard";
import Tabs from "../../components/Tabs/Tabs";

const MarketPlacePage = () => {
  const [activeTab, setActiveTab] = useState('1');

  const handleActiveTab = (e) => {
    if (e.target.id !== activeTab) {
      setActiveTab(e.target.id);
    }
  };
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.browseBox}>
          <div className={styles.titleBox}>
            <h2 className={styles.title}>Browse Marketplace</h2>
            <p className={styles.subtitle}>
              Browse through more than 50k NFTs on the NFT Marketplace.
            </p>
          </div>
          <form action="" className={styles.form}>
            <input
              type="text"
              className={styles.search}
              placeholder="Search your favourite NFTs"
            />
            <img
              src={searchIcon}
              alt="searchIcon"
              className={styles.searchIcon}
            />
          </form>
        </div>

        <div className={styles.tabs}>
          <Tabs
            tabsData={marketplaceTabsData}
            handleActiveTab={handleActiveTab}
            activeTab={activeTab}
          />
        </div>

        <div className={styles.cardsContainer}>
          <NFTCard cardsData={MarketPlaceCards} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketPlacePage;
