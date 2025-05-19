import { useQuery } from "@tanstack/react-query";
import { fetchInvPost } from "../../api/api";
import { NavLink, useParams } from "react-router-dom";

const FetchIndv = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchInvPost(id ?? ""),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching posts: {error.message}</p>;
  }

  return (
    <div>
      <h1> Post Details Number - {id} </h1>
      <ul className="section-accordion">
        <li>
          <p>ID: {data?.id}</p>
          <p>Title: {data?.title}</p>
          <p>Body: {data?.body}</p>
        </li>
      </ul>
      <NavLink to="/rq">
        <button className="btn">Back</button>
      </NavLink>
    </div>
  );
};

export default FetchIndv;
