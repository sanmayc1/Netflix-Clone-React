import "./row.css";
import TMDB from "../../Api/api.jsx";
import { useEffect, useState } from "react";
import { Img_BaseUrl } from "../../Api/constants.jsx";
import MovieModal from "../modals/Modals.jsx";
import { ToastContainer, toast } from "react-toastify";
const api_Key = import.meta.env.VITE_API_KEY;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "./slider.jsx";

const Row = ({ url, tittle }) => {
  const [posterImages, setPosterImage] = useState([]);
  const [movie, setMovie] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [ytId, setYtId] = useState("");

  // data fetching from TMDB
  useEffect(() => {
    TMDB.get(url, { params: { api_key: api_Key } })
      .then((response) => {
        setPosterImage(response.data.results);
      })
      .catch((err) => {
        toast.error("Oops! Something went wrong.", {
          position: "top-center",
          theme: "dark",
          autoClose: 3000,
        });
      });
  }, [url]);

  // Movie youtube video Modals
  const Modals = (movie) => {
    setYtId("Loading...");

    TMDB.get(`/movie/${movie.id}/videos`)
      .then((response) => {
        const trailer = response.data.results.find(
          (video) => video.type === "Trailer"
        );
        trailer
          ? setYtId(trailer.key)
          : response.data.results.length > 0
          ? setYtId(response.data.results[0].key)
          : setYtId("noData");
      })
      .catch((err) => {
        console.log("Error fetching video:", err);
        setYtId("noData");
      });

    setIsOpen(true);
    setMovie(movie);
  };

  return (
    <>
      <div className="row " id={tittle}>
        <h3 className="text-white font-bold font-sans text-xl ml-5">
          {tittle}
        </h3>

        <div className="posters">
          <Slider {...settings}>
            {posterImages.map((data) => {
              return (
                <img
                  key={data.id}
                  src={`${Img_BaseUrl}${data ? data.poster_path : ""}`}
                  alt="Poster img"
                  className="poster"
                  onClick={() => Modals(data)}
                />
              );
            })}
          </Slider>
        </div>
      </div>
      <ToastContainer />
      <MovieModal
        isOpen={isOpen}
        movie={movie}
        onClose={() => {
          setIsOpen(false);
          setYtId("");
        }}
        ytId={ytId}
      />
    </>
  );
};

export default Row;
