import Layout from "../layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "../components/HomePage/Home";

const HomePage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
