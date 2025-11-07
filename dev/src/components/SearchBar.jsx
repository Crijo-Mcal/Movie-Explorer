import { useState, useEffect } from "react";
import { AutoComplete } from "primereact/autocomplete";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useNavigate } from "react-router-dom";

/* components */
import { getmulti } from "../api/get";

export default function SearchBar({ removeOption }) {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const search = async (event) => {
    await getmulti(setData, event.query);
  };

  useEffect(() => {
    if (!data || data.length === 0) return;

    const titles = data.map((item) => item.title || item.name).filter(Boolean);
    setSuggestions(titles);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
    navigate(`/search/${value}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[300px] sm:max-w-[500px] h-9 rounded-full bg-secondary flex items-center overflow-hidden shadow-type1 mr-2 sm:mr-0"
      onMouseEnter={removeOption}
    >
      <div className="flex-1 pl-3">
        <AutoComplete
          value={value}
          suggestions={suggestions}
          completeMethod={search}
          onChange={(e) => setValue(e.value)}
          placeholder="Search"
          className="w-full text-sm border-none outline-none shadow-none"
          inputClassName="!w-full !border-0 !shadow-none !bg-transparent !text-slate-600"
          panelClassName="!text-sm !rounded-sm !overview-hidden"
        />
      </div>

      <button
        type="submit"
        className="w-[40%] h-full bg-linear-to-r from-primary to-[#FF4C29] rounded-full text-secondary text-[15.5px] flex justify-center items-center hover:opacity-90 transition"
      >
        <i className="pi pi-search mr-1"></i> Search
      </button>
    </form>
  );
}
