import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* components */
import NavBar from "../components/Navbar";
import { getmulti } from "../api/get";
/* image */
import imgDefault from "../assets/image.png";

export default function Search() {
  const [data, setData] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  function Navigate(media_type, id) {
    media_type == "tv" && navigate(`/TV/detail/${id}`);
    media_type == "movie" && navigate(`/movie/detail/${id}`);
  }

  useEffect(() => {
    getmulti(setData, name);
  }, [name]);

  return (
    <>
      <main className="relative w-full h-auto   flex flex-col gap-4 justify-center items-center p-8">
        {data &&
          data.media_type != "person" &&
          data
            .filter((x) => x.media_type != "person")
            .map((x, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="w-full max-w-307 p-4 h-auto  bg-bg2 flex  sm:flex-row flex-col justify-center items-center cursor-pointer "
                onClick={() => Navigate(x.media_type, x.id)}
              >
                {x.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${x.poster_path}`}
                    alt="img"
                    className="w-37.5"
                  />
                ) : (
                  <div className="w-37.5 h-56.25 border-2 border-secondary flex justify-center items-center">
                    <img
                      src={imgDefault}
                      alt={x.title || x.name}
                      className="w-[50px]"
                    />
                  </div>
                )}

                <div className="w-full sm:w-[90%] min-h-[145px] items-center sm:items-start  p-4 flex gap-4 justify-center  flex-col">
                  <h1 className="text-primary text-[19px] font-extrabold text-shadow-2xs">
                    {x.title || x.name}
                  </h1>
                  <p className="text-[16px] h-30   font-roboto_italic font-light overflow-hidden text-ellipsis  text-secondary">
                    {x.overview}
                  </p>
                </div>
              </motion.div>
            ))}
      </main>
    </>
  );
}
