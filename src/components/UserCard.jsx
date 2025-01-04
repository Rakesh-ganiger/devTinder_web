/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeuserFromFeed } from "../utils/feedSlice";

const UserCard = ({user}) => {
   
    const {_id,firstName,lastName, photourl,age,gender,about}=user;
    const dispatch= useDispatch();
    

    const handleSendRequest = async (status,userId) =>{
      try {
        const res=await axios.post(BASE_URL + "/request/send/" + status + "/" +userId, {} , {withCredentials:true})
        dispatch(removeuserFromFeed(userId))

      } catch (error) {
        console.error(error)
        
      }

    }
   
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure className="py-3 ">
    <img className="rounded-md"
      src={photourl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName } </h2>
    {age && gender &&<p>{age +", " + gender }</p>}
    <p>{about}</p>
    
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary"  onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard;