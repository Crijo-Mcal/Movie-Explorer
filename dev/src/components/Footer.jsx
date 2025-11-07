import faceboolIcon from "../assets/facebookIcon.png";
import igIcon from "../assets/igIcon.png";

export default function Footer() {
  return (
    <footer className="w-full min-h-25 bg-bg2 flex justify-center items-center gap-10 flex-wrap">
      <a href="#" className="flex gap-2 items-center">
        <img
          src={faceboolIcon}
          alt="facebookIcon"
          className="w-[2vw]  min-w-10  max-w-10"
        />
        <h1 className=" font-roboto_italic text-[16pt]  text-primary ">
          morglia
        </h1>
      </a>
      <a href="#" className="flex gap-2 items-center ">
        <img
          src={igIcon}
          alt="facebookIcon"
          className="w-[2vw]  min-w-10  max-w-10"
        />
        <h1 className=" font-roboto_italic text-[16pt]  text-primary">
          morglia
        </h1>
      </a>
    </footer>
  );
}
