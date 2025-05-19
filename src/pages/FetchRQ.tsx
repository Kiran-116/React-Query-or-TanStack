import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/api";

const FetchRQ = () => {
  const { data } = useQuery({
    queryKey: ["posts"], // Use State
    queryFn: fetchPosts, // Use Effect
  });

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
