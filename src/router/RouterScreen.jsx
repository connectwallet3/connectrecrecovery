import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import WalletPage from "../components/walletPage/WalletPage";
import ConnectWallet from "../pages/connect/ConnectWallet";
import Contact from "../pages/contact/Contact";
import Homepage from "../pages/home/Homepage";
import RedirectPage from "../pages/redirect/RedirectPage";

function RouterScreen() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/connect-wallet" element={<ConnectWallet />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/link-wallet/:id" element={<WalletPage />} />
        <Route exact path="*" element={<RedirectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RouterScreen;
