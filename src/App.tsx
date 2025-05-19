import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import FetchRQ from "./pages/FetchRQ";
import MainLayout from "./components/Layout/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FetchOld } from "./pages/FetchOld";
import "./App.css";
import FetchIndv from "./components/UI/FetchIndv";

// Create a Router:
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
      {
        path: "rq/:id",
        element: <FetchIndv />,
      }
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
