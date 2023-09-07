import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./comp/Nav";
import About from "./comp/Body/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div>asdf</div>
        <Routes>
          <Route path="/" exact element={<h1>Home</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
