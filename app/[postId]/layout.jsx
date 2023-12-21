import { db } from '@app/firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react'


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


const Layout = ({children}) => {
  return (
    <div className="postLayout">
        {/* <span>Hello Post layout</span> */}
       
       {children}
       
    </div>
  )
}

export default Layout