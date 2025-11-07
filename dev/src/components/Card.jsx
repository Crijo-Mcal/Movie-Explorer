import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* image */
import imgDefault from "../assets/image.png";

export default function Card({ movie, setImgbgUrl, type }) {
  const imgurl = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();

  function handlebg(url) {
    if (!setImgbgUrl) return;
    setImgbgUrl(url);
  }

  function handleClick(id) {
    type == "movie" && navigate(`/movie/detail/${id}`);
    type == "tv" && navigate(`/TV/detail/${id}`);
  }

  return (
    <motion.div
      className="w-[180px]  h-87 gap-2 bg-bg2 flex flex-col items-center shadow-type1 rounded-b-xl cursor-pointer"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ amount: 0.1 }}
      onHoverStart={() => handlebg(movie.backdrop_path)}
      onClick={() => handleClick(movie.id)}
    >
      {movie.poster_path ? (
        <img
          src={`${imgurl}${movie.poster_path}`}
          alt={movie.title}
          className="w-[154px] mt-2 rounded-lg"
        />
      ) : (
        <div className="w-[154px] h-[231px]  mt-2 rounded-lg flex justify-center items-center">
          <img src={imgDefault} alt={movie.title} className="w-[50%]" />
        </div>
      )}

      <div className="w-[154px]">
        <h1 className="text-[15px] font-semibold text-secondary">
          {movie.title || movie.name}
        </h1>
        <h2 className="text-[13px] font-roboto_italic font-light text-secondary">
          {movie.release_date || movie.first_air_date}
        </h2>
      </div>
    </motion.div>
  );
}
