import React from "react";
import { useState, useEffect,useContext } from "react";
import MainHeadCss from "./MainHead.module.css";
import MainHeadItem from "../MainHeadItem/MainHeadItem";
import axios from "axios";
import ThemeContext from "../../Context/Contextapi"

function MainHead() {
  const {setmydata}=useContext(ThemeContext)

  const [data, setdata] = useState([]);
  const [x, setx] = useState(-1);
  const [y, sety] = useState(1);
  const [sortType, setSortType] = useState("id");
  
   useEffect(() => {
    const fetcPosts = async (type) => {
      const types = {
        date: "date",
        id:"id"
      };
      
      const sortProperty = types[type];
      if(sortType == "date"){
        const res = await axios.get(`http://localhost:3000/data`);
      const sorted = [...res.data].sort((a, b) =>
      new Date(b[sortProperty]) -  new Date(a[sortProperty]) 
      );
      setdata(sorted);
      setmydata(sorted);
      }
      
      if(sortType == "id"){
         const res = await axios.get(`http://localhost:3000/data`);
      const sorted = [...res.data].sort((a, b) =>
       b[sortProperty] -   a[sortProperty] 
      );
      setdata(sorted);
      setmydata(sorted);
      }

    };
    fetcPosts(sortType);
  }, [sortType]);
   
const handlechange=(e)=>(
  

e.target.id=="Percent"? setSortType("date") : setSortType("id")

  )

  if(!data){
    return <div>Loadding...</div>
  }

  return (
    <div className={MainHeadCss.MainBox}>
    <div className="row">
    <div className="col-xs-12 col-sm-6">    <button id="Popular" onClick={handlechange} type="button" className={MainHeadCss.ButtonMain}>Popular</button>
</div>
    <div className="col-xs-12 col-sm-6">    <button id="Percent" onClick={handlechange} type="button" className={MainHeadCss.ButtonMain}>Percent</button>
</div>


    
  </div>
      {data.map((item, key) => (
        <MainHeadItem data={data}   key={key} item={item} />
      ))}
    </div>
  );
}

export default MainHead;
