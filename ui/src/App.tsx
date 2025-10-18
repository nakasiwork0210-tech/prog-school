import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import ContactPage from "./pages/contact";
import ServicePage from "./pages/service";
import PricePage from "./pages/price";
import NotFound from "./pages/notfound";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/price" element={<PricePage />} />
          {/* 他のページもここに追加 */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

