/* dependecies */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";

/* components import */
import Card from "../components/Card";
import { getMoviePage1, getnumPages, getTvPage1 } from "../api/get";

function Paginate({ setPageNumber, totalPages }) {
  const pageCount = totalPages; // total halaman

  const handlePageClick = (event) => {
    setPageNumber(event.selected + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-17  flex  items-center justify-center">
      <ReactPaginate
        className="flex gap-3 text-secondary cursor-pointer"
        previousLabel={"previous"}
        nextLabel={"next pages"}
        breakLabel={"..."}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        pageLinkClassName="rounded-md  hover:text-primary "
        activeClassName="text-primary"
      />
    </div>
  );
}

export default function Category() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const location = useLocation();
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(totalPages);

  const isMovie = location.pathname.startsWith("/movie");
  const isTV = location.pathname.startsWith("/TV");

  useEffect(() => {
    if (isMovie) {
      getMoviePage1(setMovie, params.category, pageNumber);
      getnumPages(setTotalPages, params.category, "movie");
    }

    if (isTV) {
      getTvPage1(setMovie, params.category, pageNumber);
      getnumPages(setTotalPages, params.category, "tv");
    }

    window.scrollTo({ top: 0 });
  }, [params.category, pageNumber]);

  return (
    <>
      <main className="w-[99%] min-h-screen  flex  flex-wrap justify-center  ">
        <div className="w-full max-w-[1228px] h-auto flex gap-4 flex-wrap justify-center sm:px-4 py-8  ">
          {movie !== null &&
            movie.map((x, i) => (
              <Card movie={x} key={i} type={isMovie ? "movie" : "tv"} />
            ))}
        </div>
        <Paginate
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          totalPages={totalPages}
        />
      </main>
    </>
  );
}
