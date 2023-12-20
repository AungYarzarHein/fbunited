import Image from "next/image";
import logo from "@assets/images/tools.svg";
import Link from "next/link";

const NewsCard = ({item}) => {
  const routePath = `/${item.postId}`;
  const { imageUrl , title , author , lastUpdated } = item;
  
  return (
    <Link href={routePath} className="newsCardContainer"  >
    {/* <div className="newsCardContainer"  > */}
     
     <Image src={imageUrl ? imageUrl : logo} className="newsCardImage" width={800} height={450}  alt="Feature Image" />
    
     <span className="newsCardTitle"> {title} </span>
    {/* </div> */}
    </Link>
  )
}

export default NewsCard