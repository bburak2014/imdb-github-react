import React from "react";
import MainHeadItemCss from "./MainHeadItem.module.css";
import { useState,useContext } from "react";
import ThemeContext from "../../Context/Contextapi"

const MainHeadItem =({item})=> {
  const {settargetID}=useContext(ThemeContext)
   return (
    <>
      <div  className="card mt-2"   style={{ height: "120px",cursor:"pointer" }}>
        <div className="card-body" onClick={(e)=>{settargetID(e.target.id)}}  id={item.id-1}>
        
          <span className={MainHeadItemCss.cardtext} onClick={(e)=>{settargetID(e.target.id)}}  id={item.id-1}>
            {item.text}
          </span><span><button id={item.id-1} onClick={(e)=>{settargetID(e.target.id)}}  className={MainHeadItemCss.threepoints}><img  src="./ellipsis-h.svg" /></button></span>
          <ul style={{listStyleType:"none",display:"flex"}}  onClick={(e)=>{settargetID(e.target.id)}} id={item.id-1}>
            <li id={item.id-1}   className={MainHeadItemCss.picon}>
              <i  id={item.id-1}  class="fa-solid fa-arrow-down m-1"></i><span  id={item.id-1}  className={MainHeadItemCss.mainheadItemspan}>{item.negativeappreciation}</span>
            </li>
            <li id={item.id-1}  className={MainHeadItemCss.picon}>
              <i  id={item.id-1}  class="fa-solid fa-arrow-up m-1"></i><span  id={item.id-1}  className={MainHeadItemCss.mainheadItemspan}>{item.positiveappreciation}</span>
            </li>
            <li id={item.id-1}  className={MainHeadItemCss.picon}>
              <i  id={item.id-1}  class="fa-solid fa-comment-dots m-1"></i><span  id={item.id-1}  className={MainHeadItemCss.mainheadItemspan}>{item.comment}</span>
            </li>
            <span id={item.id-1} className={MainHeadItemCss.mainheadItemspanDate}>{item.date}</span>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainHeadItem;
