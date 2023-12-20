
 "use client"

import Image from "next/image" ;
import Link from "next/link" ;
import logo from "@assets/images/tools.svg" ;
import { useState } from "react";
// import { useRouter } from "next/navigation";

const Navbar = () => {
   const [showMenuBar,setShowMenuBar] = useState(false);
   // const router = useRouter();

   const onClickHanlder =() =>  setShowMenuBar(!showMenuBar) ;
   const onGoToRoute = () => {
      setShowMenuBar(false);
      //  router.push(routeUrl);
   }

  return (
    <div className="navbarWrapper">
      <nav className='navbar' >
       <div className="navTitle">
        
          <Image
          src={logo}
          width={50}
          height={50}
          alt="Picture of the author"
          />
          <Link href={"/"} className="navTitleText" > Football United </Link>
       </div>

       <div className="largeMenuBar">
          <Link className="largeMenuBtn" href={"/"} > All News </Link>
          <Link className="largeMenuBtn" href={"/privacy"} > Privacy Policy </Link>
          <Link className="largeMenuBtn" href={"/contact"} > Contact Us </Link>
       </div>

       <span className="mobileMenuBarIcon" onClick={onClickHanlder} >  Menu </span>

       <div className={showMenuBar ? "mobileMenuBar showMenu" : "mobileMenuBar" }>
          <Link className="mobileMenuBtn" href={"/"} onClick={ onGoToRoute} > All News </Link>
          <Link className="mobileMenuBtn" href={"/"} onClick={ onGoToRoute} > Privacy Policy </Link>
          <Link className="mobileMenuBtn" href={"/"} onClick={ onGoToRoute} > Contact Us </Link>
       </div>
    </nav>
    </div>
  )
}

export default Navbar