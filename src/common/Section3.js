import "./Section3.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { img_300 } from "../services/httpService";
import { FaFilm } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { MdAccessTime } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { ImCoinDollar } from "react-icons/im";
import { BsFileText } from "react-icons/bs";
import ShowMoreText from "react-show-more-text";

const Section3 = ({ data }) => {
  const [detailItem, setDetailItem] = useState({
    genres: [1, 2, 3],
    spoken_languages: [1, 2, 3],
  });

  useEffect(() => {
    const fetchId = async () => {
      try {
        const detail = await axios.get(
          `https://api.themoviedb.org/3/movie/${data.id}?api_key=e9b577e54e388326146a10c5441ab9a3&language=en-US`
        );
        setDetailItem(detail.data);
      } catch (error) {}
    };
    fetchId();
  }, []);

  return (
    <div className="showBox" key={data.id}>
      <div className="title">
        <h3>{detailItem.title}</h3>
      </div>
      <div className="twoBox">
        <img src={`${img_300}${detailItem.poster_path}`} />
        <div className="detailBox">
          <div className="gunres">
            <FaFilm className="filmIcon" />
            <span className="span1">Gunres:</span>
            {detailItem.genres.slice(0, 3).map((genre, index) => (
              <span>{(index ? ", " : "") + genre.name}</span>
            ))}
          </div>
          <div className="calendar">
            <ImCalendar className="calendarIcon" />
            <span>Release: {detailItem.release_date}</span>
          </div>
          <div className="time">
            <MdAccessTime className="timeIcon" />
            <span>Time: {detailItem.runtime}m</span>
          </div>
          <div className="language">
            <MdLanguage className="languageIcon" />
            <span>Original Language: {detailItem.original_language}</span>
          </div>
          <div className="multiLanguage">
            <FaLanguage className="multiLanguageIcon" />
            <span>Spoken Languages:</span>
            {detailItem.spoken_languages.slice(0, 2).map((language, index) => (
              <p>{(index ? "," : "") + language.english_name}</p>
            ))}
          </div>
          <div className="dollar">
            <ImCoinDollar className="dollarIcon" />
            <span>Revenue: {detailItem.revenue}$</span>
          </div>
        </div>
      </div>

      <div className="imdb">
        <img src={require("../images/imdb.png")} className="imdbIcon" />
        <p>{data.vote_average}</p>
      </div>
      <div className="text">
        <BsFileText className="textIcon" />
        <span>Summary:</span>
        <p>
          <ShowMoreText
            lines={2.5}
            more=" "
            less="...Show less"
            anchorClass="oooeeer"
            expanded={false}
            width={0}
          >
            {detailItem.overview}
          </ShowMoreText>
        </p>
      </div>
      <p className="button">Download</p>
    </div>
  );
};

export default Section3;
