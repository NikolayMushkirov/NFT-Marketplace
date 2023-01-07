import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Timer from "../../components/Timer/Timer";
import NFTCard from "../../components/NFTCard/NFTCard";

import { OrbitianCards } from "../../data/data";

import placeholder from "../../assets/img/NFT page/placeholder.png";
import globeIcon from "../../assets/icons/Globe.svg";
import orbitian from "../../assets/avatars/Orbitian.svg";
import arrow from "../../assets/icons/ArrowRight.svg";

import styles from "./NFTPage.module.scss";

const NFTPage = () => {
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
          <div className={styles.infoBox}>
            <div className={styles.titleBox}>
              <h2 className={styles.title}>The Orbitians</h2>
              <p className={styles.subtitle}>Minted on Sep 30, 2022</p>
            </div>

            <div className={styles.authorBox}>
              <span className={styles.authorTitle}>Created By</span>
              <div className={styles.authorInfoBox}>
                <img src={orbitian} alt="orbitian" className={styles.avatar} />
                <span className={styles.name}>Orbitian</span>
              </div>
            </div>

            <div className={styles.descriptionBox}>
              <span className={styles.descrTitle}>Description</span>
              <p className={styles.description}>
                <p className={styles.paragraph}>
                  The Orbitians is a collection of 10,000 unique NFTs on the
                  Ethereum blockchain.
                </p>
                <p className={styles.paragraph}>
                  There are all sorts of beings in the NFT Universe. The most
                  advanced and friendly of the bunch are Orbitians.
                </p>
                <p className={styles.paragraph}>
                  They live in a metal space machines, high up in the sky and
                  only have one foot on Earth. These Orbitians are a peaceful
                  race, but they have been at war with a group of invaders for
                  many generations. The invaders are called Upside-Downs,
                  because of their inverted bodies that live on the ground, yet
                  do not know any other way to be. Upside-Downs believe that
                  they will be able to win this war if they could only get an
                  eye into Orbitian territory, so they've taken to make human
                  beings their target.
                </p>
              </p>
            </div>

            <div className={styles.detailsBox}>
              <span className={styles.detailsTitle}>Details</span>
              <div className={styles.viewBox}>
                <img
                  src={globeIcon}
                  alt="globeIcon"
                  className={styles.globeIcon}
                />
                <span className={styles.info}>View on Etherscan</span>
              </div>
              <div className={styles.viewBox}>
                <img
                  src={globeIcon}
                  alt="globeIcon"
                  className={styles.globeIcon}
                />
                <span className={styles.info}>View Original</span>
              </div>
            </div>

            <div className={styles.tagsBox}>
              <span className={styles.tagsTitle}>Tags</span>
              <span className={styles.tag}>Animation</span>
              <span className={styles.tag}>Illustration</span>
              <span className={styles.tag}>Moon</span>
              <span className={styles.tag}>Moon</span>
            </div>
          </div>
          <Timer deadline="December, 31, 2023"/>
        </div>

        <div className={styles.otherArtBox}>
          <div className={styles.otherTitleBox}>
            <h2 className={styles.otherTitle}>More from this artist</h2>
            <a className={styles.artistPageLink} href = 'artist'>
              <img src={arrow} alt="arrow" className={styles.arrowIcon} />
              Go To Artist Page
            </a>
          </div>

          <div className={styles.otherCardsBox}>
            <NFTCard cardsData={OrbitianCards}  />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NFTPage;
