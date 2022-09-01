// eslint-disable-next-line
import { Route, Router, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import { Otracosa } from "./Pages/Otracosa.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Otracosa />} />
        <Route path="/Otracosa/:empresa" element={<Otracosa />} />
        <Route path="/User/:empresa" element={<Otracosa />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <Routes>
  <Route path="/" element={<Nav />} />
</Routes>; */
}
