import Hero from "../components/Hero";
import TopRateCarousel from "../components/TopRateCarousel";
import PopularCarousel from "../components/PopularCarousel";
import UpcomingMovie from "../components/UpcomingMovie";

export default function Home() {
  return (
    <>
      <main className="w-full  h-auto bg-bg1 gap-4    flex  flex-col items-center ">
        <Hero />
        <PopularCarousel />
        <UpcomingMovie />
        <TopRateCarousel />
      </main>
    </>
  );
}
