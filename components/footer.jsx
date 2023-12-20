import Link from 'next/link'
import React from 'react'
// import logo from "@assets/images/tools.svg";
// import Image from "next/image" ;

const Footer = () => {
  return (
    <div className="footerContainer">
       <div className="footerWrapper">
       <div className="footerCardHeader">
        {/* <Image
          src={logo}
          width={100}
          height={100}
          alt="Picture of the author"
          /> */}
          <div className="footerTextLogo">
            <span className='textLogoOne' >Football</span>
            <span className='textLogoTwo' >United</span>
          </div>
        </div>
        <div className="footerInfoContainer">
            <span  className='shortLink' >  Football United </span>
            <span  className='shortLink' >  Privacy Policy  </span>
            <span  className='shortLink' >  Contact Us  </span>
        </div>
        <div className="footerInfoContainer">
            <Link href={"/"}  className='shortLink' >  Football Latest News  </Link>
            <Link href={"/"}  className='shortLink' >  Privacy Policy  </Link>
            <Link href={"/"}  className='shortLink' >  Contact Us  </Link>
        </div>
       </div>
        {/* <div className="footerInfoContainer">
            
        </div> */}
    </div>
  )
}

export default Footer