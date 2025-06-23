"use client";

import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import StoryPage from "./components/StoryPage";
import ProfilePage from "./components/ProfilePage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/main" replace />
              ) : (
                <LoginPage setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          <Route
            path="/main"
            element={isLoggedIn ? <MainPage /> : <Navigate to="/" replace />}
          />
          <Route
            path="/story/:id"
            element={isLoggedIn ? <StoryPage /> : <Navigate to="/" replace />}
          />
          <Route
            path="/profile/:username"
            element={isLoggedIn ? <ProfilePage /> : <Navigate to="/" replace />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
