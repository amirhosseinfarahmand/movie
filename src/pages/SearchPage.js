import Layout from "../layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "../components/HomePage/Home";
import { useParams } from "react-router";
import Search from "../components/Search/Search";

const SearchPage = () => {
  const params = useParams();
  const [users, setUsers] = useState();
  const [state, setState] = useState();
  const getFind = (item) => {
    setUsers(item);
  };
  const getState = (state) => {
    setState(state);
  };
  return (
    <Layout users={users} state={state}>
      <Search params={params.name} getFind={getFind} getState={getState} />
    </Layout>
  );
};

export default SearchPage;
