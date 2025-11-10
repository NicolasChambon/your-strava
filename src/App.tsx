import { Routes, Route } from "react-router-dom";
import Callback from "./pages/Callback";
import Home from "./pages/Home";
import Pictures from "./pages/Pictures";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Callback />} path="/callback" />
      <Route element={<Pictures />} path="/pictures" />
    </Routes>
  );
}

export default App;
