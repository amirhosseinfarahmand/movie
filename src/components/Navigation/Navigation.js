import "./Navigation.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth, useAuthAction } from "../../Providers/AuthProvider";

const Navigation = () => {
  const userData = useAuth();
  const setData = useAuthAction();

  const onClick = () => {
    setData("");
  };

  return (
    <header className="mainNavigation">
      <nav className="nav-box">
        <ul>
          <li>
            <Link to="/signup">{userData ? "" : "SignUp"}</Link>
          </li>
          <li className="littleBox">
            <Link to={userData ? "" : "/login"} className="profileLink">
              {userData ? `${userData.name}` : "Login"}
            </Link>
            {userData ? <button onClick={onClick}>logOut</button> : ""}
          </li>
        </ul>
      </nav>
      <nav className="navHome">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
