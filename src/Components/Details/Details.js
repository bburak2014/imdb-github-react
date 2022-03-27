import React from "react";
import ThemeContext from "../../Context/Contextapi";
import { useState, useEffect,useContext } from "react";
import DetailsCss from "./DetailsCss.module.css";
import axios from "axios";

function Details() {
  const Theme = useContext(ThemeContext);
 
  const [post, setPost] = React.useState(null);

  useEffect(() => {
    const fetcPostslist = async () => {
      let y=parseInt(Theme.targetID)

      await axios.get(`http://localhost:3000/data`).then((response)=>{
        setPost(response.data);

      })
      

    };
    fetcPostslist();
  }, []);

  if (!post) return null;

 
//  console.log(myarray[parseInt(Theme.targetID)])
let myarray=(post[parseInt(Theme.targetID)])
console.log(myarray);
 
  return (
    <>
      <div>
<div
  className="card mt-2"
  style={{ height: "591px", cursor: "pointer", border: "0px" }}
>
  <div
    className="card-header"
    style={{
      maxHeight: "40px",
      padding: "0px",
      fontSize: "14px",
      backgroundColor: "#fff",
      border: "0px",
    }}
  >
    <span>
      {" "}
      <img className={DetailsCss.image} src={myarray.pictureUser1} />
    </span>
    {/* <span style={{ color: "blue" }}>{myarray.user1}</span> */}
    <span style={{ color: "#A9A9A9	", paddingLeft: "4px" }}>
      {myarray.date1}
    </span>
  </div>
  <div className="card-body">
    <span className={DetailsCss.cardtext}>{myarray.longtextUser1}</span>
    <span>
      <button className={DetailsCss.threepoints}>
        <img src="./ellipsis-h.svg" />
      </button>
    </span>
    <a href="#" className={DetailsCss.more}>
      More
    </a>
       <img src={myarray.user1picture} style={{height:"193px",width:"286px",borderRadius:"25px",marginTop:"10px"}} />
   </div>
   <ul style={{ listStyleType: "none", display: "flex" }}>
      <li style={{ paddingLeft: "0px" }} className={DetailsCss.picon}>
        <span className={DetailsCss.mainheadItemspan}>Reply</span>
      </li>
      <li className={DetailsCss.picon1}>
        <i class="fa-solid fa-arrow-down m-1"></i>
        <span className={DetailsCss.mainheadItemspan}>
          {myarray.negativeappreciationUser1}
        </span>
      </li>
      <li className={DetailsCss.picon}>
        <i class="fa-solid fa-arrow-up m-1"></i>
        <span i className={DetailsCss.mainheadItemspan}>
          {myarray.positiveappreciationUser1}
        </span>
      </li>
    </ul>
</div>
<div
  className="card"
  style={{ height: "150px", cursor: "pointer", marginTop: "10px" }}
>
  <div
    className="card-header"
    style={{
      maxHeight: "40px",
      padding: "0px",
      fontSize: "14px",
      backgroundColor: "#fff",
      border: "0px",
    }}
  >
    <span>
      {" "}
      <img className={DetailsCss.image} src={myarray.pictureUser2} />
    </span>
    {/* <span style={{ color: "#A9A9A9" }}>{myarray.user1}</span> */}
    <span style={{ color: "#A9A9A9	", paddingLeft: "4px" }}>
      {myarray.date2}
    </span>
  </div>
  <div className="card-body">
  <span className={DetailsCss.cardtext}>{myarray.longtextUser2}</span>
    <span>
      <button className={DetailsCss.threepoints}>
        <img src="./ellipsis-h.svg" />
      </button>
    </span>
    <ul style={{ listStyleType: "none", display: "flex" }}>
      <li style={{ paddingLeft: "0px" }} className={DetailsCss.picon}>
        <span className={DetailsCss.mainheadItemspan}>Reply</span>
      </li>
      <li className={DetailsCss.picon1}>
        <i class="fa-solid fa-arrow-down m-1"></i>
        <span className={DetailsCss.mainheadItemspan}>
          {myarray.negativeappreciationUser2}
        </span>
      </li>
      <li className={DetailsCss.picon}>
        <i class="fa-solid fa-arrow-up m-1"></i>
        <span i className={DetailsCss.mainheadItemspan}>
          {myarray.positiveappreciationUser2}
        </span>
      </li>
    </ul>
  </div>
</div>
<div
  className="card"
  style={{ height: "150px", cursor: "pointer", marginTop: "10px" }}
>
  <div
    className="card-header"
    style={{
      maxHeight: "40px",
      padding: "0px",
      fontSize: "14px",
      backgroundColor: "#fff",
      border: "0px",
    }}
  >
    <span>
      {" "}
      <img className={DetailsCss.image} src={myarray.pictureUser3} />
    </span>
    {/* <span style={{ color: "#A9A9A9" }}>{myarray.user1}</span> */}
    <span style={{ color: "#A9A9A9	", paddingLeft: "4px" }}>
      {myarray.date3}
    </span>
  </div>
  <div className="card-body">
  <span className={DetailsCss.cardtext}>{myarray.longtextUser3}</span>
    <span>
      <button className={DetailsCss.threepoints}>
        <img src="./ellipsis-h.svg" />
      </button>
    </span>
    <ul style={{ listStyleType: "none", display: "flex" }}>
      <li style={{ paddingLeft: "0px" }} className={DetailsCss.picon}>
        <span className={DetailsCss.mainheadItemspan}>Reply</span>
      </li>
      <li className={DetailsCss.picon1}>
        <i class="fa-solid fa-arrow-down m-1"></i>
        <span className={DetailsCss.mainheadItemspan}>
          {myarray.negativeappreciationUser3}
        </span>
      </li>
      <li className={DetailsCss.picon}>
        <i class="fa-solid fa-arrow-up m-1"></i>
        <span className={DetailsCss.mainheadItemspan}>
          {myarray.positiveappreciationUser3}
        </span>
      </li>
    </ul>
  </div>
</div>
<div
  className="card"
  style={{ height: "150px", cursor: "pointer", marginTop: "10px" }}
>
  <div
    className="card-header"
    style={{
      maxHeight: "40px",
      padding: "0px",
      fontSize: "14px",
      backgroundColor: "#fff",
      border: "0px",
    }}
  >
    <span>
      {" "}
      <img className={DetailsCss.image} src={myarray.pictureUser4} />
    </span>
    {/* <span style={{ color: "#A9A9A9" }}>{myarray.user1}</span> */}
    <span style={{ color: "#A9A9A9	", paddingLeft: "4px" }}>
      {myarray.date4}
    </span>
  </div>
  <div className="card-body">
  <span className={DetailsCss.cardtext}>{myarray.longtextUser4}</span>
    <span>
      <button className={DetailsCss.threepoints}>
        <img src="./ellipsis-h.svg" />
      </button>
    </span>
    <ul style={{ listStyleType: "none", display: "flex" }}>
      <li style={{ paddingLeft: "0px" }} className={DetailsCss.picon}>
        <span className={DetailsCss.mainheadItemspan}>Reply</span>
      </li>
      <li className={DetailsCss.picon1}>
        <i class="fa-solid fa-arrow-down m-1"></i>
        <span className={DetailsCss.mainheadItemspan}>
          {myarray.negativeappreciationUser4}
        </span>
      </li>
      <li className={DetailsCss.picon}>
        <i class="fa-solid fa-arrow-up m-1"></i>
        <span className={DetailsCss.mainheadItemspan}>
          {myarray.positiveappreciationUser4}
        </span>
      </li>
    </ul>
    <div className="" style={{maxHeight:"163px",maxWidth:"286px",borderRadius:"25px"}}>
      <image src={myarray.user2picture} />
    </div>
  </div>
</div>
</div>
    </>
  );
}

export default Details;
