import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import TempleAdd from "./Components/Temple_Admin/Templeadd";

function App() {
  console.log("Name", process.env.REACT_APP_NAME);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/addtemple" element={<TempleAdd />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
