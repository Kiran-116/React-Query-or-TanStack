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
    const resp =  await api.get("/posts");
    return resp.status === 200 ? resp.data : [];
}