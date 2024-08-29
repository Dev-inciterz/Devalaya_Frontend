import { Route, BrowserRouter, Routes } from "react-router-dom";
import Templehome from "./Components/Admin/Templehome";
import Home from "./Components/Home/Home";
import City from "./Components/Pages/City/City";
import Locationtracker from "./Components/Pages/LocationTracker/Locationtracker";
import Temple from "./Components/Pages/Temple/Temple";
import Newtestcomp from "./Components/Temple_Admin/Newtestcomp";
import TempleAdd from "./Components/Temple_Admin/Templeadd";
import Templeupdate from "./Components/Temple_Admin/Templeupdate";
import StatesHome from "./Components/Pages/State/StatesHome";
import StateSingle from "./Components/Pages/State/StateSingle";

function App() {
  console.log("Name", process.env.REACT_APP_NAME);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/allstates" element={<StatesHome />} />

          <Route path="/state/:id" element={<StateSingle />} />

          <Route path="/addtemple" element={<TempleAdd />} />

          <Route path="/city/:id" element={<City />} />

          <Route path="/temple/:id" element={<Temple />} />

          <Route path="/admin-temple/update/:id" element={<Templeupdate />} />

          <Route path="/admin/temples" element={<Templehome />} />

          <Route path="/test" element={<Newtestcomp />} />

          <Route path="/mapping" element={<Locationtracker />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;