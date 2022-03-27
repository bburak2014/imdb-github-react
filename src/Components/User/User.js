import React from 'react'
import UsersCss from "./User.module.css";
import MainHeadItemCss from "../MainHeadItem/MainHeadItem.module.css";

function User() {
  return (
    <div className={UsersCss.userrow}>
      <div  className="card "   style={{ height: "50px",cursor:"pointer",backgroundColor:"black",color:"white",fontSize:"16px",textAlign:"left" }}>
        <div className="card-body"   >
        
          <span className={MainHeadItemCss.usertext}   >Popular Users
             
          </span> 
           
        </div>
      </div>
      <div  className="card"   style={{ height: "80px",cursor:"pointer",backgroundColor:"white",color:"black",fontSize:"16px",textAlign:"left" }}>
        <div className="card-body"   >
        <img class="DetailsCss_image__w7BUu" src="./image/13.jpg"></img>
          <span className={MainHeadItemCss.usertext}   >User1
          </span> 
        </div>
      </div>
      <div  className="card"   style={{ height: "80px",cursor:"pointer",backgroundColor:"white",color:"black",fontSize:"16px",textAlign:"left" }}>
        <div className="card-body"   >
        <img class="DetailsCss_image__w7BUu" src="./image/14.jpg"></img>
          <span className={MainHeadItemCss.usertext}   >User2
          </span> 
        </div>
      </div>

      <div  className="card"   style={{ height: "80px",cursor:"pointer",backgroundColor:"white",color:"black",fontSize:"16px",textAlign:"left" }}>
        <div className="card-body"   >
        <img class="DetailsCss_image__w7BUu" src="./image/2.jpg"></img>
          <span className={MainHeadItemCss.usertext}   >User3
          </span> 
        </div>
      </div>

      <div  className="card"   style={{ height: "80px",cursor:"pointer",backgroundColor:"white",color:"black",fontSize:"16px",textAlign:"left" }}>
        <div className="card-body"   >
        <img class="DetailsCss_image__w7BUu" src="./image/4.jpg"></img>
          <span className={MainHeadItemCss.usertext}   >User4
          </span> 
        </div>
      </div>

      <div  className="card"   style={{ height: "80px",cursor:"pointer",backgroundColor:"white",color:"black",fontSize:"16px",textAlign:"left" }}>
        <div className="card-body"   >
        <img class="DetailsCss_image__w7BUu" src="./image/3.jpg"></img>
          <span className={MainHeadItemCss.usertext}   >User5
          </span> 
        </div>
      </div>

      <div  className="card"   style={{ height: "80px",cursor:"pointer",backgroundColor:"white",color:"black",fontSize:"16px",textAlign:"left" }}>
        <div className="card-body"   >
        <img class="DetailsCss_image__w7BUu" src="./image/1.jpg"></img>
          <span className={MainHeadItemCss.usertext}   >User6
          </span> 
        </div>
      </div>
    </div>
  )
}

export default User