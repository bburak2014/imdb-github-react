import Nav from "./Components/Nav/Nav";
import MainHead from "./Components/MainHead/MainHead";
import ThemeContext from "./Context/Contextapi";
import { useState } from "react";
import Details from "./Components/Details/Details";
import Users from "./Components/User/User";

import "./App.css";
function App() {
  const [targetID, settargetID] = useState(1);
  const [mydata, setmydata] = useState([]);

   return (
    <ThemeContext.Provider value={{ targetID, settargetID }}>
      <Nav />
      <div className="container-fluid">
        <div  id="rowApp" className="row"  >
          <div className="col-xs-12 col-lg-6 col-xl-4">
            {" "}
            <MainHead />{" "}
          </div>
          <div style={{ backgroundColor: "#F5F5F5" }} className="col-xs-12 col-lg-6 col-xl-4">
            <Details />
          </div>

          <div style={{ backgroundColor: "#F5F5F5" }}  className="col-xs-12 col-lg-6 col-xl-4">
          <Users />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
