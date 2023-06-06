import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppBarWithTheme from "./AppBarWithTheme";
import NoMatch from "./pages/NoMatch";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";

/**
 * App.
 * @return {any}
 */
export default function App() {
  return (
    <BrowserRouter>
      <AppBarWithTheme>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/blog" element={<Blog />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AppBarWithTheme>
    </BrowserRouter>
  );
}
