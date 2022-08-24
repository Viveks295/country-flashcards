import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Learn from "./pages/Learn";

function Main() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "learn", element: <Learn /> },
  ]);
  return routes;
}

export default Main;
