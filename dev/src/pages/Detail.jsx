/* dependencies */
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMovieById, getTVById } from "../api/get";
import { motion } from "framer-motion";

/* components import */
import NavBar from "../components/NavBar";

/* image */
import imgDefault from "../assets/image.png";

function Information({ data }) {
  const title = data.title || data.name;
  const releaseDate = data.release_date || data.first_air_date;
  const runtime = data.runtime || data.episode_run_time?.[0] || 0;

  return (
    <motion.div
      className="  mt-15 relative  flex flex-col sm:flex-row items-center justify-center  gap-8 w-full max-w-6xl mx-auto px-4   text-secondary"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      {/* Poster */}

      <div className="w-60 sm:w-75 shrink-0">
        {data.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={title}
            className="w-full rounded-2xl shadow-xl border border-gray-700"
          />
        ) : (
          <div className="w-full h-112.25 border-2  mt-2 rounded-lg flex justify-center items-center">
            <img src={imgDefault} alt={title} className="w-[50%]" />
          </div>
        )}
      </div>

      {/* Text Info */}
      <div className="flex flex-col   text-center sm:text-left w-full sm:w-[60%]">
        {/* Title */}
        <h1 className="text-[32px] sm:text-[42px] font-extrabold text-primary leading-tight">
          {title}
        </h1>

        {/* Tagline */}
        {data.tagline && (
          <p className="italic text-gray-300 text-[18px] mb-2">
            “{data.tagline}”
          </p>
        )}

        {/* Genres */}
        {data.genres && (
          <p className="text-[16px] text-gray-400 font-medium">
            {data.genres.map((x) => x.name).join(", ")}
          </p>
        )}
        {/* adult */}
        {data.adult && (
          <p className="text-[16px] text-gray-400 font-medium">(adult)</p>
        )}

        {/* Meta Info */}
        <p className="text-[15px] text-gray-400">
          {releaseDate} • {data.original_language?.toUpperCase()} •{" "}
          {Math.floor(runtime / 60)}h {runtime % 60}m
        </p>

        {/* Rating */}
        <p className="text-[16px] font-semibold text-yellow-400">
          ⭐ {data.vote_average?.toFixed(1)} / 10{" "}
          <span className="text-gray-400">({data.vote_count} votes)</span>
        </p>

        {/* Overview */}
        <h2 className="text-[20px] font-bold text-primary mt-3">Overview</h2>
        <p className="text-[16px] font-light leading-relaxed text-gray-300 text-justify sm:text-left">
          {data.overview}
        </p>

        {/* Production Info */}
        {data.production_companies?.length > 0 && (
          <>
            <h2 className="text-[18px] font-bold text-primary mt-4">
              Production
            </h2>
            <p className="text-[15px] text-gray-300">
              {data.production_companies
                .map((x) => x.name)
                .filter(Boolean)
                .join(", ")}
            </p>
          </>
        )}

        {/* Country */}
        {data.production_countries?.length > 0 && (
          <p className="text-[15px] mt-2 text-gray-300">
            Country: {data.production_countries.map((x) => x.name).join(", ")}
          </p>
        )}

        {/* Homepage */}
        {data.homepage && (
          <a
            href={data.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline mt-3 font-medium hover:text-blue-400 transition-colors"
          >
            Visit official site ↗
          </a>
        )}
      </div>
    </motion.div>
  );
}

/* main component */
export default function Detail() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  const isMovie = location.pathname.startsWith("/movie");
  const isTV = location.pathname.startsWith("/TV");

  useEffect(() => {
    if (isMovie) getMovieById(setData, id);
    if (isTV) getTVById(setData, id);
    window.scrollTo({ top: 0 });
  }, [id, isMovie, isTV]);

  return (
    <>
      {/* Content */}
      {data && (
        <main className="relative w-full min-h-screen bg-bg2 py-10 sm:p-0 ">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black"></div>

          {/* Content container */}
          <section className="relative  flex justify-center items-center min-h-screen">
            <Information data={data} />
          </section>
        </main>
      )}
    </>
  );
}
