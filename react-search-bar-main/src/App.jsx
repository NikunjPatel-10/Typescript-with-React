import { useContext, useEffect, useState } from "react";

import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";
import ContextProvider from "./context/ContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pagination from "./components/Pagination";

function App() {
  const [results, setResults] = useState([]);
  const [allData, setAllData] = useState([]);


  const queryClient = new QueryClient()

  // useEffect(() => {
  //   getAllData()
  // }, [])

  // const getAllData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => {
  //     setAllData(data)
  //   })
  // }

  // const dataHandler = (searchData) => {
  //   setAllData((prev) => prev.filter((res) => res.name === searchData.name))
  // }


  // const searchTermHandler = (value) => {
  //   if (!value) {
  //     getAllData()
  //   }

  // }

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ContextProvider>
        <div className="App">
          <div className="search-bar-container">
            <SearchBar setResults={setResults} onSearchTerm={searchTermHandler} />
            {results && results.length > 0 && <SearchResultsList results={results} onChangeData={dataHandler} />}
          </div>
          {
            allData.map((user, index) => {
              return (
                <>
                  <div key={index}>
                    <div>Name:{user.name}</div>
                    <div>Email : {user.email}</div>
                  </div>
                </>
              )
            })
          }
        </div>
      </ContextProvider> */}
        <Pagination />
    </QueryClientProvider>
  );
}

export default App;
