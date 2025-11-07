/* dependensy */
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";

/* componenets */
import Card from "./Card";
import { getMoviePage1, getTvPage1 } from "../api/get";

export default function Carousel() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("movie");

  function handleCanges(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    switch (input) {
      case "movie":
        getMoviePage1(setData, "popular");
        break;
      case "tv":
        getTvPage1(setData, "popular");
        break;

      default:
        getMoviePage1(setData, "popular");
        break;
    }
  }, [input]);

  return (
    <section className="w-full max-w-[1228px] gap-4 h-auto flex flex-col  pt-8 justify-center items-center">
      {/* Header */}
      <div className="w-full min-h-8 flex gap-2 items-center pl-4 sm:pl-0 flex-wrap ">
        <h1 className="text-[21px] font-black text-primary">Popular</h1>
        <form>
          <select
            className="w-[170px] h-6 bg-secondary rounded-full text-[14px] text-slate-400 outline-none pl-2 pb-0.2"
            onChange={handleCanges}
          >
            <option value="movie">Movie</option>
            <option value="tv">Tv Show</option>
          </select>
        </form>
      </div>

      {/* Swiper Carousel */}
      <div className="w-full h-auto flex items-center justify-center overflow-hidden">
        <Swiper
          modules={[Scrollbar]}
          scrollbar={{ draggable: true }}
          spaceBetween={10}
          breakpoints={{
            // 👇 breakpoint per ukuran layar
            326: { slidesPerView: 2 }, // HP kecil
            505: { slidesPerView: 3 }, // HP kecil
            668: { slidesPerView: 4 }, // HP besar
            806: { slidesPerView: 5 }, // Tablet
            1008: { slidesPerView: 6 }, // Tablet
            1228: { slidesPerView: 6.5 }, // Desktop besar
          }}
          className="w-full h-[370px]"
        >
          {data != null &&
            data.map((x, i) => (
              <SwiperSlide key={i}>
                <div className="w-full h-full flex justify-center">
                  <Card movie={x} type={input} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
