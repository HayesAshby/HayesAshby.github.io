import { Routes, Route } from "react-router";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      {/* <Route path="/blog" element={<Blog />} /> */}
      <Route path="/projects" element={<Projects />} />
      <Route path="/about/me" element={<AboutMe />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
export default Routing;
