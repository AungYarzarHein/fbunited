"use client"

import { db } from "@app/firebase-config";
import featureImage from "@assets/images/coverfm.png";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";


// export const metadata = {
//   title: "Football Post",
//   description : "Hello Post"
// }

const Detailscard = ({item}) => {
  return(
    <div className="detailsCard">
      <Image src={item.downloadUrl} alt="Feature Image" width={800} height={450} style={{width:"100%",height:"auto"}}  />
      <span className="detailsCardText" > {item.details} </span>
    </div>
  )
}

const Post = ({params}) => {
  const [postData,setPostData] = useState();
  const [loading,setLoading] = useState(true);

  const fetchPostData = async (postId) => {
    const post = await getDoc(doc(db,"postsData",postId)) ;
    if(post) {
      // console.log(post.data())
      setPostData(post.data());
      setLoading(false);
    }
  }

  useEffect(() => { 
    fetchPostData(params.postId)
   } , [])

  // async function getData (id) {
  //  const data =  await getDoc(doc(db,"postsData",id)).then(res => res.data()) ;
  //  console.log(data);
  //  return data;
  // }
  
  // const postData =  getData(params.postId)
  // // console.log(postData)

  return (
    <div className="postContainer">
      {
        loading ? <Image src={featureImage} alt="Feature Image" style={{width:"100%",height:"auto"}} /> : <Image src={postData.postHeader.featureImage} alt="Feature Image" width={1000} height={500} style={{width:"100%",height:"auto"}}  />
      }
      {/* <div>Posts Helo Friends This is post {postData[0].details ? postData[0].details : null } </div> */}
      {
      loading ?   <span> Loading...</span> : <div className="postDetailsContainer">
       <div className="postDetailsInfo">
        <span  > {postData.postHeader.author} </span>
        <span  > {postData.postHeader.lastUpdated} </span>
        {/* <span  > {postData.postHeader.author} </span> */}
       </div>
       <div className="postDetailsTitleText" > {postData.postHeader.title} </div>
       {
        postData.data.map((item,index) => <Detailscard item={item} key={index} />)
       }
      </div>
      }
    </div>
  )
}

export default Post