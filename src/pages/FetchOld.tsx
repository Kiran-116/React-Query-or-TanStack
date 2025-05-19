import { useEffect, useState } from "react";
import { fetchPosts } from "../api/api";

export const FetchOld = () => {
  const [posts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPostsData = async () => {
    try {
      const resp = await fetchPosts();
      console.log("Response", resp);
      // resp.status === 200 ? setPosts(resp.data) : []
      // if (resp.status === 200) {
      //   setPosts(resp.data);
      //   setIsLoading(false);
      // }
    } catch (error) {
      console.error("Error fetching posts", error);
      setIsLoading(false);
      setIsError(true);
      return [];
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error fetching posts</h2>;
  }

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
