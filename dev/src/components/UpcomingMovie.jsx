/* dependencies */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";

/* components */
import Card from "./Card";
import { getMoviePage1 } from "../api/get";

export default function UpcomingMovie() {
  const [Data, setData] = useState(null);

  const [imgbgUrl, setImgbgUrl] = useState(null);

  useEffect(() => {
    getMoviePage1(setData, "upcoming");
  }, []);

  useEffect(() => {
    if (Data === null) return;
    setImgbgUrl(Data[0].backdrop_path);
  }, [Data]);

  return (
    <section className="relative w-full h-auto flex flex-col gap-4 pt-8 justify-center items-center overflow-hidden">
      {/*Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {imgbgUrl && (
            <motion.div
              key={imgbgUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="w-full h-full absolute bg-cover bg-top bg-no-repeat"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${imgbgUrl})`,
              }}
            />
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Header */}
      <div className="w-full max-w-307 h-8 flex gap-2 items-center pl-4 sm:pl-0 z-1">
        <h1 className="text-[21px] font-black text-primary">Upcoming Movie</h1>
      </div>

      {/* Swiper Carousel */}
      <div className="w-full h-auto flex items-center justify-center overflow-hidden">
        <Swiper
          modules={[Scrollbar]}
          scrollbar={{ draggable: true }}
          spaceBetween={10}
          breakpoints={{
            326: { slidesPerView: 2 },
            505: { slidesPerView: 3 },
            668: { slidesPerView: 4 },
            806: { slidesPerView: 5 },
            1008: { slidesPerView: 6 },
            1228: { slidesPerView: 6.5 },
          }}
          className="w-full max-w-307 h-92.5"
        >
          {Data?.map((x, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full flex justify-center">
                {/* 👇 Card akan update background saat di-hover */}
                <Card movie={x} setImgbgUrl={setImgbgUrl} type={"movie"} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
