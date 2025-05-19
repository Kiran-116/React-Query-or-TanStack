import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/api";

const FetchRQ = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"], // Use State
    queryFn: fetchPosts, // Use Effect
    // gcTime: 1000, // Garbage Collection Time
    // staleTime: 10000, // Stale Time (10s) -> by default 0
    refetchInterval: 1000, // Refetch Interval (1s)
    refetchIntervalInBackground: true, // Refetch in Background
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
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchRQ;
