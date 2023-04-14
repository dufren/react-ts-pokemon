import Poke from "./components/Poke";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pokemon/:name" element={<Poke />} />
    </Routes>
  );
}

export default App;
