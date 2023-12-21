
 "use client"

import Image from "next/image" ;
import Link from "next/link" ;
import logo from "@assets/images/logo.png" ;
import menubar from "@assets/images/menubar.svg";
import closebar from "@assets/images/close.svg";
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
          width={40}
          height={40}
          alt="Picture of the author"
          />
          <Link href={"/"} className="navTitleText" > Football United </Link>
       </div>

       <div className="largeMenuBar">
          <Link className="largeMenuBtn" href={"/"} > All News </Link>
          <Link className="largeMenuBtn" href={"/privacy"} > Privacy Policy </Link>
          <Link className="largeMenuBtn" href={"/contact"} > Contact Us </Link>
       </div>

       <div className="mobileMenuBarIcon" onClick={onClickHanlder} > 
       {
showMenuBar ? <Image src={menubar} width={26} height={26} alt="Menu" /> : <Image src={closebar} width={26} height={26} alt="Menu" />
       }
       </div>

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