import { useContext, useState } from "react";
import Context from "../context/context";
import "./SearchResult.css";
import SearchData from "./SearchData";

export const SearchResult = ({ searchData , onSearchData }) => {

  // const [showDetail, setShowDetail] = useState(false); // State to control detail visibility
 // State to store detail data

  const { setSearchedData ,  searchedData } = useContext(Context)

  const searchDataHandler = () => {
    // setShowDetail(true)
    // setSearchedData(searchData)
    // console.log(searchedData);
    onSearchData(searchData)
  }

  return (
    <>
      <div
        className="search-result"
        onClick={searchDataHandler}
      >
        {searchData.name}
      </div>
      <div>
{/* { showDetail && <SearchData data={detailData}/>} */}
      </div>
    </>
  );
};
