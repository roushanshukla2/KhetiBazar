// src/App.js
import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import AutoImageSlider from "./components/AutoImageSlider";
import Loader from "./components/Loader";
import FlipCard from "./components/FlipCard";
import Header from "./components/Header";
import FloatingSocialIcons from "./components/FloatingSocialIcons";
import MyPurchased from "./components/MyPurchased";
import WalletProfile from "./components/WalletProfile";
import ReferralRebatePage from "./components/ReferralRebatePage";
import ProductSection from "./components/ProductSection";
import AutoScrollingNotifications from "./components/AutoScrollingNotifications";
import InvestmentCard from "./components/InvestmentCard";

// Check login status from localStorage or sessionStorage
const isLoggedIn = () => !!localStorage.getItem("user");

function AppWrapper() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  if (location.pathname === "/" && loading) return <Loader />;

  return isLoggedIn() ? <Navigate to="/home" /> : <Navigate to="/login" />;
}

// Protect private routes
const PrivateRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" />;
};

// Protect public routes like login/signup
const PublicRoute = ({ children }) => {
  return isLoggedIn() ? <Navigate to="/home" /> : children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppWrapper />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <FlipCard />
            </PublicRoute>
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <>
                <Header />
                <AutoImageSlider />
                <FloatingSocialIcons />
                <InvestmentCard />
                <AutoScrollingNotifications />
                <Navbar />
              </>
            </PrivateRoute>
          }
        />

        <Route
          path="/products"
          element={
            <PrivateRoute>
              <>
                <Header />
                <ProductSection />
                <FloatingSocialIcons />
                <Navbar />
              </>
            </PrivateRoute>
          }
        />

        <Route
          path="/promotions"
          element={
            <PrivateRoute>
              <>
                <Header />
                <ReferralRebatePage />
                <FloatingSocialIcons />
                <Navbar />
              </>
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <>
                <Header />
                <WalletProfile />
                <FloatingSocialIcons />
                <Navbar />
              </>
            </PrivateRoute>
          }
        />

        <Route
          path="/purchased"
          element={
            <PrivateRoute>
              <MyPurchased />
            </PrivateRoute>
          }
        />

        {/* Catch-all for unknown paths */}
        <Route path="*" element={<Navigate to={isLoggedIn() ? "/home" : "/login"} />} />
      </Routes>
    </Router>
  );
} 

export default App;
