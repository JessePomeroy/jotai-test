import { atom } from "jotai";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>hello world~</h1>
      <Link to="/">Users</Link>
      <Link to="/popular">Popular Users</Link>
      <Routes>
        <Route index element={<Users />} />
        <Route path="/popular" element={<PopularUsers />} />
      </Routes>
    </div>
  );
};

export default App;
