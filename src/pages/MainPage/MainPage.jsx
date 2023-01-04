import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import TrendCollection from "../../components/TrendCollection/TrendCollection";
import TopCreators from "../../components/TopCreators/TopCreators";
import BrowseCategories from "../../components/BrowseCategories/BrowseCategories";
import DiscoverNFT from "../../components/DiscoverNFT/DiscoverNFT";
import NFTHighlight from "../../components/NFTHighlight/NFTHighlight";
import HotItWorks from "../../components/HowItWorks/HotItWorks";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

import styles from "./MainPage.scss";

const MainPage = () => {
  return (
    <main className="mainPage">
      <Header />
      <div className="container">
        <HeroSection />
        <TrendCollection />
        <TopCreators />
        <BrowseCategories />
        <DiscoverNFT />
        <NFTHighlight />
        <HotItWorks />
        <Subscribe />
      </div>
      <Footer />
    </main>
  );
};

export default MainPage;
