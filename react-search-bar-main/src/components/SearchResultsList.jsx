import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";
import { useState } from "react";

export const SearchResultsList = ({ results , onChangeData }) => {
  const [data, setData] = useState({})
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const dataHandler = (data) => {
   onChangeData(data)
    setIsDropdownOpen(false)
  }

  return (
    <>
      {isDropdownOpen && <div className="results-list">
        {results.map((result, id) => {
          return <SearchResult searchData={result} key={id} onSearchData={dataHandler}  />;
        })}
      </div>}
     
    </>
  );
};
