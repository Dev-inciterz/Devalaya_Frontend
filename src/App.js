import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import City from "./Components/Pages/City/City";
import Temple from "./Components/Pages/Temple/Temple";
import TempleAdd from "./Components/Temple_Admin/Templeadd";

function App() {
  console.log("Name", process.env.REACT_APP_NAME);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/addtemple" element={<TempleAdd />} />

          <Route path="/city/:id" element={<City />} />

          <Route path="/temple/:id" element={<Temple />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
