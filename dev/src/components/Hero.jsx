import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      className="relative w-full  max-w-307 sm:mt-4 min-h-66.75 bg-bg2  flex flex-col  justify-center items-center bg-cover bg-top "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/2746UvsbkZINd873Yd3o3TxOwCP.jpg)`,
      }}
    >
      <div className=" absolute w-full h-full bg-black opacity-50 "> </div>

      <div className="z-5 px-8 h-auto min-w-50 ">
        <h1 className="text-[29px] sm:text-[30px] text-primary font-extrabold font-roboto leading-9 sm:leading-10 text-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          Thousands of movies. All at your fingertips
        </h1>
        <h1 className="text-[20px] text-secondary font-semibold  font-roboto_italic text-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          Explore ratings, casts, and stories that inspire
        </h1>
      </div>
    </section>
  );
}
