import React from 'react'
 import NavCss from "./Nav.module.css"
 
function Nav() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className={"navbar-brand " +NavCss.navbarbrand} href="#">
    <img src="./Group 368.svg" alt="" width="106" height="32" />

    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className={NavCss.dFlex} >
      <div className={NavCss.inputicons}>

      <i className={"fa-solid fa-magnifying-glass "+NavCss.icon}></i>
        <input style={{borderRadius:"25px",width:"273px",height:"50px",marginTop:"10px",backgroundColor: "#F5F5F5",    paddingLeft: "32px" }} className={"form-control me-2"+NavCss.field} type="search"   aria-label="Search"
        
         />
         </div>
         <img className={NavCss.image} src='./image/1.jpg' />

       </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav
// +NavCss.searchform}