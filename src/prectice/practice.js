import Home from "./Info/Info";
import Experience from "./MyExperience/Experience";
import Portfolio from "./MyProjects/Projects";
import Novbar from "./Navbar/Novbar";
import Services from "./Services/Services";
import Contect from "./contect/Contect";
import Footer from "./footer/Footer";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Novbar />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="experience" element={<Experience />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contect" element={<Contect />} />
    </Route>
  )
);

const Prectice = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};
export default Prectice;
