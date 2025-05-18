import { useEffect, useState } from "react";
import { fetchPosts } from "../api/api";

export const FetchOld = () => {
  const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(null);

  const getPostsData = async () => {
    try {
      const resp = await fetchPosts();
      console.log("Response", resp);

      // resp.status === 200 ? setPosts(resp.data) : []
      setPosts(resp.data);
    } catch (error) {
      console.error("Error fetching posts", error);
      return [];
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);
  return (
    <div>
      <ul className="section-accordion">
        {posts?.map((post) => {
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
