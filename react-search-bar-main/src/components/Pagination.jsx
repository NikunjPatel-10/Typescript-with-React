import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Pagination = () => {
  const [page, setPage] = useState(0);

  const fetchProjects = async (page = 0) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page + 1}`);
    const data = await response.json();
    return data;
  };

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery(["todos", page], () => fetchProjects(page), {
    keepPreviousData: true,
   
  });

  
  console.log(data);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.map((project) => (
            <p key={project.id}>{project.title}</p>
          ))}
        </div>
      )}
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>{" "}
      <button
        onClick={() => {
          if (!isPreviousData) {
            setPage((prevPage) => prevPage + 1);
          }
        }}
        disabled={isPreviousData || !data?.length}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
};

export default Pagination;
