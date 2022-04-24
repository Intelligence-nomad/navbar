import Contact from "./components/Contact";
import Login from "./components/Login";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Service from "./components/Service";


function App() {

  return (
    <>
      <Router >
        <Navbar />
        <Routes >
          <Route path="/" element={< Main />} />
          <Route path="/Contact" element={< Contact />} />
          <Route path="/about" element={< About />} />
          <Route path="/blog" element={< Blog />} />
          <Route path="/service" element={< Service />} />
          <Route path="/login" element={< Login />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;