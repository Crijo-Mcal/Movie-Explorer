/* dependensi */
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/* components */
import Search from "../pages/Search";

/* image */
import logo from "../assets/logo.png";
import hambuger from "../assets/hambuger.png";
import SearchBar from "./SearchBar";

function MovieOptions({ removeOption, Link }) {
  return (
    <div
      className=" absolute w-25 h-auto top-8 bg-secondary flex flex-col gap-1.5 justify-center items-center  text-[14px] font-semibold py-4  rounded-sm "
      onMouseLeave={removeOption}
    >
      <Link
        to="/movie/category/upcoming"
        className="hover:text-primary"
        onClick={removeOption}
      >
        upcoming
      </Link>
      <Link
        to="/movie/category/top_rated"
        className="hover:text-primary"
        onClick={removeOption}
      >
        Top Rated
      </Link>
      <Link
        to="/movie/category/popular"
        className="hover:text-primary"
        onClick={removeOption}
      >
        Popular
      </Link>
    </div>
  );
}

function TvShowOptions({ removeOption, Link }) {
  return (
    <div
      className=" absolute w-25 h-auto top-8 bg-secondary flex flex-col gap-1.5 justify-center items-center  text-[14px] font-semibold py-4  rounded-sm"
      onMouseLeave={removeOption}
    >
      <Link
        to="/TV/category/on_the_air"
        className="hover:text-primary"
        onClick={removeOption}
      >
        On The Air
      </Link>
      <Link
        to="/TV/category/top_rated"
        className="hover:text-primary"
        onClick={removeOption}
      >
        Top Rated
      </Link>
      <Link
        to="/TV/category/popular"
        className="hover:text-primary"
        onClick={removeOption}
      >
        Popular
      </Link>
    </div>
  );
}

function Hambuger({ setHambugerState }) {
  const navigate = useNavigate();
  return (
    <div className="absolute  left-0 top-17  w-screen h-screen bg-black  sm:hidden flex items-center flex-col z-50">
      <div className="mt-8">
        <img
          src={logo}
          alt="logo"
          className="w-[70px]"
          onClick={() => (navigate("/"), setHambugerState(false))}
        />
      </div>

      <div className="w-[90%] h-auto flex gap-4 flex-col mt-4 ">
        <h1 className="text-2xl font-bold text-primary text-shadow-xl">
          Movie
        </h1>
        <Link
          to="/movie/category/upcoming"
          className="text-secondary w-full pl-4 h-10 border-2 border-primary flex  items-center cursor-pointer"
          onClick={() => setHambugerState(false)}
        >
          upcoming
        </Link>
        <Link
          to="/movie/category/top_rated"
          className="text-secondary w-full pl-4 h-10 border-2 border-primary flex  items-center cursor-pointer"
          onClick={() => setHambugerState(false)}
        >
          Top Rated
        </Link>
        <Link
          to="/movie/category/popular"
          className="text-secondary w-full pl-4 h-10 border-2 border-primary flex  items-center cursor-pointer"
          onClick={() => setHambugerState(false)}
        >
          Popular
        </Link>
      </div>

      <div className="w-[90%] h-auto flex gap-4 flex-col mt-4">
        <h1 className="text-2xl font-bold  text-primary text-primarytext-shadow-xl">
          TV show
        </h1>
        <Link
          to="/TV/category/on_the_air"
          className="text-secondary w-full pl-4 h-10 border-2 border-primary flex  items-center cursor-pointer"
          onClick={() => setHambugerState(false)}
        >
          On The Air
        </Link>
        <Link
          to="/TV/category/top_rated"
          className="text-secondary w-full pl-4 h-10 border-2 border-primary flex  items-center cursor-pointer"
          onClick={() => setHambugerState(false)}
        >
          Top Rated
        </Link>
        <Link
          to="/TV/category/popular"
          className="text-secondary w-full pl-4 h-10 border-2 border-primary flex  items-center cursor-pointer"
          onClick={() => setHambugerState(false)}
        >
          Popular
        </Link>
      </div>
    </div>
  );
}

export default function NavBar() {
  const [MovieOPtion, setMovieOption] = useState(false);
  const [TVOPtion, setTVOption] = useState(false);
  const [hambugerState, setHambugerState] = useState(false);
  const navigate = useNavigate();

  function handleMovie() {
    setMovieOption(true);
    setTVOption(false);
  }

  function handleTvShow() {
    setMovieOption(false);
    setTVOption(true);
  }

  function removeOption() {
    setMovieOption(false);
    setTVOption(false);
  }

  return (
    <>
      <nav
        className=" w-full   h-17 bg-bg2  shadow-[0_3px_11px_rgba(0,0,0,0.2)] flex  justify-center  items-center "
        onMouseLeave={removeOption}
      >
        <div className="relative w-full max-w-[1228px] sm:w-[98%] h-17 flex justify-around sm:justify-end items-center gap-5 ">
          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className=" md:absolute w-14 left-2 hidden sm:block cursor-pointer "
            onClick={() => navigate("/")}
          />

          {/* Hamburger icon */}
          <div
            className="w-20 h-full flex items-center justify-center visible sm:invisible relative sm:absolute cursor-pointer"
            onClick={() => setHambugerState(!hambugerState)}
          >
            <img src={hambuger} alt="logo" className="w-10 left-2" />
          </div>

          {/* Navigation Links */}
          <div
            className="relative  justify-center hidden sm:flex"
            onMouseEnter={handleMovie}
          >
            <h2 className="text-[16px] font-roboto font-black  text-primary  text-shadow-2xl ">
              Movie
            </h2>
            {MovieOPtion && (
              <MovieOptions removeOption={removeOption} Link={Link} />
            )}
          </div>
          <div
            className="relative  justify-center hidden sm:flex"
            onMouseEnter={handleTvShow}
          >
            <h2 className=" w-17  text-[16px] font-roboto font-black  text-primary">
              TV show
            </h2>
            {TVOPtion && (
              <TvShowOptions removeOption={removeOption} Link={Link} />
            )}
          </div>

          {/* Input Form */}

          <SearchBar removeOption={removeOption} />
        </div>
      </nav>

      {hambugerState && <Hambuger setHambugerState={setHambugerState} />}
    </>
  );
}
