import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

interface Post {
  id: number;
  title: string;
  body: string;
}

// To fetch the data:
export const fetchPosts = async () : Promise<Post[]> => {
    const resp =  await api.get("/posts?_start=0&_limit=3");
    return resp.status === 200 ? resp.data : [];
}