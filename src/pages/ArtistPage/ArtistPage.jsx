import React, { useState } from "react";

import Header from "../../components/Header/Header";
import NFTCard from "../../components/NFTCard/NFTCard";
import Footer from "../../components/Footer/Footer";

import placeholder from "../../assets/img/artist/placeholder.png";
import globe from "../../assets/icons//artist/Globe.svg";
import discordLogo from "../../assets/icons//artist/DiscordLogo.svg";
import instagramLogo from "../../assets/icons//artist/InstagramLogo.svg";
import twitterLogo from "../../assets/icons//artist/TwitterLogo.svg";
import youtubeLogo from "../../assets/icons//artist/YoutubeLogo.svg";
import copy from "../../assets/icons/artist/Copy.svg";
import plus from "../../assets/icons/artist/Plus.svg";
import animaKidAvatar from "../../assets/icons/artist/animaKidRect.svg";

import { AnimaKidCards, artistPageTabsData } from "../../data/data";

import styles from "./ArtistPage.module.scss";
import Tabs from "../../components/Tabs/Tabs";

const ArtistPage = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleActiveTab = (e) => {
    if (e.target.id !== activeTab) {
      setActiveTab(e.target.id);
    }
  };

  return (
    <>
      <Header />

      <div className={styles.background}>
        <img
          src={placeholder}
          alt="placeholder"
          className={styles.placeholder}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img
            src={animaKidAvatar}
            alt="animaKidAvatar"
            className={styles.avatar}
          />
          <div className={styles.artistWrapper}>
            <h2 className={styles.title}>Animakid</h2>
            <div className={styles.statBox}>
              <p className={styles.boldInfoText}>250k+</p>
              <p className={styles.boldInfoText}>50+</p>
              <p className={styles.boldInfoText}>3000+</p>

              <p className={styles.infoText}>Volume</p>
              <p className={styles.infoText}>NFTs Sold</p>
              <p className={styles.infoText}>Followers</p>
            </div>
            <div className={styles.bioBox}>
              <p className={styles.subtitle}>Bio</p>
              <p className={styles.infoText}>
                The internet's friendliest designer kid.
              </p>
            </div>
            <div className={styles.linksBox}>
              <p className={styles.subtitle}>Links</p>
              <div className={styles.linksWrapper}>
                <a href="" className={styles.link}>
                  <img src={globe} alt="globe" className={styles.icon} />
                </a>
                <a href="" className={styles.link}>
                  <img
                    src={discordLogo}
                    alt="discordLogo"
                    className={styles.icon}
                  />
                </a>
                <a href="" className={styles.link}>
                  <img
                    src={youtubeLogo}
                    alt="youtubeLogo"
                    className={styles.icon}
                  />
                </a>
                <a href="" className={styles.link}>
                  <img
                    src={twitterLogo}
                    alt="twitterLogo"
                    className={styles.icon}
                  />
                </a>
                <a href="" className={styles.link}>
                  <img
                    src={instagramLogo}
                    alt="instagramLogo"
                    className={styles.icon}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.followButtons}>
            <div className={styles.hashButton}>
              <img src={copy} alt="copy" className={styles.icon} />
              <span className={styles.text}>0xc0E3...B79C</span>
            </div>
            <div className={styles.followButton}>
              <img src={plus} alt="plus" className={styles.icon} />
              <span className={styles.text}>Follow</span>
            </div>
          </div>
        </div>

        <div className={styles.tabs}>
          <Tabs
            tabsData={artistPageTabsData}
            handleActiveTab={handleActiveTab}
            activeTab={activeTab}
          />
        </div>

        <div className={styles.cardsContainer}>
          <NFTCard cardsData={AnimaKidCards} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArtistPage;
