import Home from "./pages/Home";

// route
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home itemsPerPage={20} />} />
    </Routes>
  );
}

export default App;
