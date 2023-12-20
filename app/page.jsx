"use client"

import NewsCard from '@components/newsCard'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from './firebase-config';

const Page = () => {
  const [postList,setPostList] = useState([]);
  const [loading,setLoading] = useState(true) ;

  const fetchPostList = async () => {
    const collectionRef = collection(db,"posts") ;
    const postQuery = query(collectionRef,orderBy("timeStamp","desc"),limit(5)) ;
    const data = await getDocs(postQuery) ;
    if(data){
      let dataArray = [] ;
      data.forEach(doc => {
        dataArray.push(doc.data());
        // console.log(doc.data())
      }) ;
      setPostList(dataArray);
      setLoading(false);
    }
  }

  

  useEffect(() => { 
    fetchPostList();
  } , [])

  return (
   <div className="homePageContainer"  >
    {/* <NewsCard />
    <NewsCard />
    <NewsCard />
    <NewsCard />
    <NewsCard />
    <NewsCard />
    <NewsCard /> */}

    {
      loading? <span style={{display:"flex",flex:1,justifyContent:"center"}} >Loading...</span> : (
        postList.map(item => <NewsCard item={item} key={item.postId} />)
      )
    }
   </div>
  )
}

export default Page