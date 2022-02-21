import React from "react";
import "./App.css";
import HomePage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import AuthProvider from "./Providers/AuthProvider";
import PageProvider from "./Providers/PageProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <PageProvider>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/search/:name" element={<SearchPage />} />
            {/* <Route path="/search" element={<SearchPage />} /> */}
          </Routes>
        </PageProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
