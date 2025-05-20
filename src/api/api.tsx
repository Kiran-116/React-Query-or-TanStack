import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

interface Post {
  id: number;
  title: string;
  body: string;
}

// To fetch the data:
export const fetchPosts = async (pageNumber: number): Promise<Post[]> => {
  try {
    const resp = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
    return resp.status === 200 ? resp.data : [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// to fetch individual data:
export const fetchInvPost = async (id: string): Promise<Post> => {
  try {
    const resp = await api.get(`/posts/${id}`);
    return resp.status === 200 ? resp.data : { id: 0, title: "", body: "" };
  } catch (error) {
    console.error("Error fetching individual post:", error);
    throw error;
  }
};
