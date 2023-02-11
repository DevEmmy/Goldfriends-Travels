import Link from "next/link";
import React, { useState } from "react";
import { NavStyle } from "./Styled";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "./media/logo.jpeg";

const Nav = ({ active = 0 }) => {
  const [services, setServices] = useState(false);
  const [navWidth, setNavWidth] = useState(true)
  const [right, setRight] = useState("none")

  const showWidth = ()=>{
    if(navWidth){
        setNavWidth(!navWidth);
        setRight("flex")
    }

    else if(!navWidth){
        setNavWidth(!navWidth)
        setRight("none")
    }
  }

  return (
    <NavStyle>
      <div className="logo">
        <Link href="/">
          <img src={logo.src} alt="" />
        </Link>
      </div>

      {/* <div className="center">
        <div className={active == 0 && "active"}>
          <Link href={"/"}>Home</Link>
        </div>

        <div className={active == 1 && "active"}>
          <Link href={"/about"}>About</Link>
        </div>
    

        <div className={active == 3 && "active"}>
          <Link href={"/contact"}>Contact Us</Link>
        </div>
      </div> */}

      <div className="end">
        <div className="signUp">
          <Link href={"/sign-in"}>Sign In</Link>
        </div>
      </div>

      <div className="hamburger">
        <div className="icon">
          <HiMenuAlt3 size={"30px"} onClick={showWidth}/>
        </div>

        <div className="items" style={{display: right}}>
            <div className="cancel">
                <HiX onClick={showWidth}/>
            </div>
          <div className={active == 0 && "active"}>
            <Link href={"/"}>Home</Link>
          </div>

          <div className={active == 1 && "active"}>
            <Link href={"/about"}>About</Link>
          </div>


          <div className={active == 3 && "active"}>
            <Link href={"/contact"}>Contact Us</Link>
          </div>
        </div>
      </div>
    </NavStyle>
  );
};

export default Nav;
