import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Technologies from "../pages/Technologies";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BaseLayout from "../pages/BaseLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "technologies",
        element: <Technologies />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
]);
