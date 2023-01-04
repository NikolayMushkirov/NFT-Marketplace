import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CreateAccountPage from "./pages/CreateAccountPage/CreateAccountPage";
import ConnectWalletPage from "./pages/ConnectWalletPage/ConnectWalletPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import NFTPage from "./pages/NFTPage/NFTPage";
import MarketPlacePage from "./pages/MarketPlacePage/MarketPlacePage";
import RankingsPage from "./pages/RankingsPage/RankingsPage";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"createaccount"} element={<CreateAccountPage />} />
            <Route path={"connectwallet"} element={<ConnectWalletPage />} />
            <Route path={"artist"} element={<ArtistPage />} />
            <Route path={"nftpage"} element={<NFTPage />} />
            <Route path={"marketplace"} element={<MarketPlacePage />} />
            <Route path={"rankings"} element={<RankingsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
