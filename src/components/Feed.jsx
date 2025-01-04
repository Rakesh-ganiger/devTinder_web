import axios from "axios"
import {BASE_URL} from "../utils/constants.js"
import { useDispatch, useSelector } from "react-redux"
import {addFeed} from "../utils/feedSlice.js"
import { useEffect } from "react"
import UserCard from "./userCard.jsx"



const Feed = () => {
  
  const dispatch= useDispatch();
  const feed=useSelector((store) => store.feed)


  const getFeed = async() => {
    if (feed) return;
    try {
      const res= await axios.get(BASE_URL+"/feed",{withCredentials:true})
      // console.log(res.data)
    
      dispatch(addFeed(res?.data?.data))
      
    } catch (error) {
      
      console.error(error)
    }
    

  }

  useEffect(()=> {
    getFeed();

  },[])

    if(! feed) return ;

    if(feed.length <=0) return <h1 className="flex justify-center my-10 font-bold">No user Found</h1>

  return (feed && (
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]}/>
    </div>
  )
  )
}

export default Feed