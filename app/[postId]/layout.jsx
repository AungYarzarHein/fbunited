import { db } from '@app/firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react'
import NextTopLoader from 'nextjs-toploader';


export async function generateMetadata ({params,searchParams},parent) {
    // console.log(params);
    const fetchData = await getDoc(doc(db,"posts",params.postId)).then(res => res.data()) ;
    // console.log(fetchData)
    const prevImage = (await parent).openGraph?.images || []
    return ({
        title: fetchData.author,
        description:fetchData.title,
        metadataBase : new URL("https://firebasestorage.googleapis.com"),
        openGraph:{
            images: [fetchData.imageUrl,...prevImage]
        }
    })
}


console.log("I am rendering...")


const Layout = ({children}) => {
  return (
    <div className="postLayout">
        {/* <span>Hello Post layout</span> */}
      <NextTopLoader showSpinner={false} height={2} crawlSpeed={50}  speed={100} />
       
       {children}
       
    </div>
  )
}

export default Layout