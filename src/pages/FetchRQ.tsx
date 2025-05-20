import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0); // State for Pagination

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNumber], // Use State
    queryFn: () => fetchPosts(pageNumber), // Use Effect
    // gcTime: 1000, // Garbage Collection Time
    // staleTime: 10000, // Stale Time (10s) -> by default 0
    refetchInterval: 1000, // Refetch Interval (1s)
    refetchIntervalInBackground: true, // Refetch in Background
    placeholderData: keepPreviousData,
    
  });

  if (isPending) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching posts: {error.message}</p>;
  }

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((post) => {
          // Array Destructuring:
          const { id, title, body } = post;
          return (
            <li key={id}>
              <NavLink to={`/rq/${id}`}>
                <p>{id}</p>
                <h3>{title}</h3>
                <p>{body}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="pagination-section container">
        <button onClick={() => setPageNumber((prev) => prev - 3)} disabled={pageNumber === 0}> Prev </button>
        <p> {Math.floor(pageNumber / 3) + 1} </p>
        <button onClick={() => setPageNumber((prev) => prev + 3)}> Next </button>
      </div>
    </div>
  );
};

export default FetchRQ;
