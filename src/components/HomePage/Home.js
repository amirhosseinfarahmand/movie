import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { deleteData, img_300, img_500 } from "../../services/httpService";
import Section3 from "../../common/Section3";
import { BiSearch } from "react-icons/bi";
import Select from "react-select";
import { customStyles } from "../../common/select";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import CustomPagination from "../Pagination/CustomPagination";
import { usePageAction } from "../../Providers/PageProvider";

const Home = () => {
  const [items, setItems] = useState([{ genre_ids: [] }]);
  const [navItems, setNavItem] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [allItems, setAllItems] = useState();
  const [status, setStatus] = useState("All");
  const [imdbStatus, setImdbStatus] = useState("All");
  const [page, setPage] = useState(1);

  const options = [
    { value: "All", label: "All" },
    { value: "12", label: "Adventure" },
    { value: "28", label: "Action" },
    { value: "16", label: "Animation" },
    { value: "35", label: "Comedy" },
    { value: "80", label: "Crime" },
    { value: "10751", label: "Family" },
    { value: "18", label: "Drama" },
    { value: "14", label: "Fantasy" },
    { value: "36", label: "History" },
    { value: "27", label: "Horror" },
    { value: "878", label: "Science Fiction" },
    { value: "10752", label: "War" },
  ];

  const imdbOption = [
    { value: "All", label: "All" },
    { value: "4>", label: "above 4" },
    { value: "4-5", label: "4-5" },
    { value: "5>", label: "above 5" },
    { value: "5-6", label: "5-6" },
    { value: "6>", label: "above 6" },
    { value: "6-7", label: "6-7" },
    { value: "7>", label: "above 7" },
    { value: "7-8", label: "7-8" },
    { value: "8>", label: "above 8" },
    { value: "8-9", label: "8-9" },
    { value: "9>", label: "above 9" },
  ];

  const { state } = useLocation();
  const navigate = useNavigate();
  const setPageSearch = usePageAction();
  setPageSearch(page);

  useEffect(() => {
    const fetchName = async () => {
      try {
        const allData = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=e9b577e54e388326146a10c5441ab9a3&page=${page}`
        );

        setItems(allData.data.results.slice(0, 12));
        setAllItems(allData.data.results.slice(0, 12));
      } catch (error) {}
    };
    fetchName();
  }, [page]);

  useEffect(() => {
    const navFetch = async () => {
      const allData = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=e9b577e54e388326146a10c5441ab9a3"
      );
      setNavItem(allData.data.results.slice(0, 12));
    };
    navFetch();
  }, []);

  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    const search = e.target.value;
  };

  const filterGenres = (status) => {
    switch (status) {
      case "28":
        const action1 = items.filter(
          (i, index) => i.genre_ids[(index = 0)] === 28
        );
        const action2 = items.filter(
          (i, index) => i.genre_ids[(index = 1)] === 28
        );
        const action3 = items.filter(
          (i, index) => i.genre_ids[(index = 2)] === 28
        );
        setItems(action1.concat(action2).concat(action3));
        break;
      case "12":
        const adventure1 = items.filter(
          (i, index) => i.genre_ids[(index = 0)] === 12
        );
        const adventure2 = items.filter(
          (i, index) => i.genre_ids[(index = 1)] === 12
        );
        const adventure3 = items.filter(
          (i, index) => i.genre_ids[(index = 2)] === 12
        );
        setItems(adventure1.concat(adventure2).concat(adventure3));
        break;
      case "16":
        const animation1 = items.filter(
          (i, index) => i.genre_ids[(index = 0)] === 16
        );
        const animation2 = items.filter(
          (i, index) => i.genre_ids[(index = 1)] === 16
        );
        const animation3 = items.filter(
          (i, index) => i.genre_ids[(index = 2)] === 16
        );
        setItems(animation1.concat(animation2).concat(animation3));
        break;
      case "35":
        const comedy1 = items.filter(
          (i, index) => i.genre_ids[(index = 0)] === 35
        );
        const comedy2 = items.filter(
          (i, index) => i.genre_ids[(index = 1)] === 35
        );
        const comedy3 = items.filter(
          (i, index) => i.genre_ids[(index = 2)] === 35
        );
        setItems(comedy3.concat(comedy2).concat(comedy3));
        break;
      case "80":
        const crime1 = items.filter(
          (i, index) => i.genre_ids[(index = 0)] === 80
        );
        const crime2 = items.filter(
          (i, index) => i.genre_ids[(index = 1)] === 80
        );
        const crime3 = items.filter(
          (i, index) => i.genre_ids[(index = 2)] === 80
        );
        setItems(crime1.concat(crime2).concat(crime3));
        break;
      case "10751":
        const family1 = items.filter(
          (i, index) => i.genre_ids[(index = 0)] === 10751
        );
        const family2 = items.filter(
          (i, index) => i.genre_ids[(index = 1)] === 10751
        );
        const family3 = items.filter(
          (i, index) => i.genre_ids[(index = 2)] === 10751
        );
        setItems(family1.concat(family2).concat(family3));
        break;
      case "18":
        const drama1 = items.filter(
          (i, index) => i.genre_ids[(index = 0)] === 18
        );
        const drama2 = items.filter(
          (i, index) => i.genre_ids[(index = 1)] === 18
        );
        const drama3 = items.filter(
          (i, index) => i.genre_ids[(index = 2)] === 18
        );
        setItems(drama1.concat(drama2).concat(drama3));
        break;
      case "14":
        const fantasy1 = items.filter(
          (i, index) => i.genre_ids[(index = 0)] === 14
        );
        const fantasy2 = items.filter(
          (i, index) => i.genre_ids[(index = 1)] === 14
        );
        const fantasy3 = items.filter(
          (i, index) => i.genre_ids[(index = 2)] === 14
        );
        setItems(fantasy1.concat(fantasy2).concat(fantasy3));
        break;
      case "36":
        const history1 = items.filter(
          (i, index) => i.genre_ids[(index = 0)] === 36
        );
        const history2 = items.filter(
          (i, index) => i.genre_ids[(index = 1)] === 36
        );
        const history3 = items.filter(
          (i, index) => i.genre_ids[(index = 2)] === 36
        );
        setItems(history1.concat(history2).concat(history3));
        break;
      case "27":
        const horror1 = items.filter(
          (i, index) => i.genre_ids[(index = 0)] === 27
        );
        const horror2 = items.filter(
          (i, index) => i.genre_ids[(index = 1)] === 27
        );
        const horror3 = items.filter(
          (i, index) => i.genre_ids[(index = 2)] === 27
        );
        setItems(horror1.concat(horror2).concat(horror3));
        break;
      case "878":
        const sf1 = items.filter(
          (i, index) => i.genre_ids[(index = 0)] === 878
        );
        const sf2 = items.filter(
          (i, index) => i.genre_ids[(index = 1)] === 878
        );
        const sf3 = items.filter(
          (i, index) => i.genre_ids[(index = 2)] === 878
        );
        setItems(sf1.concat(sf2).concat(sf3));
        break;
      case "10752":
        const war1 = items.filter(
          (i, index) => i.genre_ids[(index = 0)] === 10752
        );
        const war2 = items.filter(
          (i, index) => i.genre_ids[(index = 1)] === 10752
        );
        const war3 = items.filter(
          (i, index) => i.genre_ids[(index = 2)] === 10752
        );
        setItems(war1.concat(war2).concat(war3));
        break;
      default:
        setItems(allItems);
    }
  };

  const filterImdb = (status) => {
    switch (status) {
      case "4>":
        setItems(items.filter((items) => items.vote_average > 4));
        break;
      case "4-5":
        setItems(
          items.filter(
            (items) => items.vote_average > 4 && items.vote_average < 5
          )
        );
        break;
      case "5>":
        setItems(items.filter((items) => items.vote_average > 5));
        break;
      case "5-6":
        setItems(
          items.filter(
            (items) => items.vote_average > 5 && items.vote_average < 6
          )
        );
        break;
      case "6>":
        setItems(items.filter((items) => items.vote_average > 6));
        break;
      case "6-7":
        setItems(
          items.filter(
            (items) => items.vote_average > 6 && items.vote_average < 7
          )
        );
        break;
      case "7>":
        setItems(items.filter((items) => items.vote_average > 7));
        break;
      case "7-8":
        setItems(
          items.filter(
            (items) => items.vote_average > 7 && items.vote_average < 8
          )
        );
        break;
      case "8>":
        setItems(items.filter((items) => items.vote_average > 8));
        break;
      case "8-9":
        setItems(
          items.filter(
            (items) => items.vote_average > 8 && items.vote_average < 9
          )
        );
        break;
      case "9>":
        setItems(items.filter((items) => items.vote_average > 9));
        break;

      default:
        setItems(allItems);
    }
  };

  const onChange = (e) => {
    setStatus(e);
    filterGenres(e.value);
  };

  const imdbOnChange = (e) => {
    setImdbStatus(e);
    filterImdb(e.value);
  };

  const onClick = () => {
    if (searchItem) {
      const filter = allItems.filter((items) => {
        return items.original_title
          .toLowerCase()
          .includes(searchItem.toLowerCase());
      });

      setItems(filter);
      navigate(`/search/${searchItem}`, { state: state.name });
    } else {
      setItems(allItems);
    }
  };

  return (
    <main className="container">
      <section className="sectionBox1">
        {navItems.slice(0, 6).map((data) => (
          <div className="pictureBox" key={data.id}>
            <img src={`${img_300}${data.poster_path}`} />
            <div className="footerBox">
              <div className="iconBox">
                <img src={require("../../images/imdb.png")} />
                <p>{data.vote_average}</p>
              </div>
              <p>{data.original_title}</p>
            </div>
          </div>
        ))}
      </section>
      <section>
        <div className="sectionBox2">
          {items.length ? (
            ""
          ) : (
            <div
              style={{
                display: "flex",
                position: "relative",
                top: "100px",
                left: "200px",
              }}
            >
              <h2 style={{ color: "red", display: "flex" }}>ops!</h2>
            </div>
          )}
          <div className="search">
            <div style={{ display: "flex" }}>
              <Select
                options={imdbOption}
                value={imdbStatus}
                placeholder="Imdb Score"
                onChange={imdbOnChange}
                styles={customStyles}
                className="imdbSelect"
              />

              <Select
                options={options}
                value={status}
                placeholder="Gunres"
                onChange={onChange}
                styles={customStyles}
                className="genreSelect"
              />
            </div>

            <div className="searchBox">
              <input
                type="text"
                placeholder="Find your movie"
                value={searchItem}
                onChange={searchHandler}
                className="searchInput"
              />

              {searchItem ? (
                <button onClick={onClick} className="searchBtn">
                  <Link to={`/search/${searchItem}`}>
                    <BiSearch className="searchIcon" />
                  </Link>
                </button>
              ) : (
                <button className="searchBtn">
                  <BiSearch className="searchIcon" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="sectionBox3">
        {items
          ? items.map((data) => <Section3 data={data} key={data.id} />)
          : "ops"}
      </section>
      <section className="sectionBox4">
        <CustomPagination setPage={setPage} />
      </section>
    </main>
  );
};

export default Home;
