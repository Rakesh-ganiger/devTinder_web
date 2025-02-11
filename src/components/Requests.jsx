
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch(); 

  const reviewRequest = async (status,_id) =>{
    // eslint-disable-next-line no-unused-vars
    const res = await axios.post(BASE_URL + "/request/review/" + status + "/" +_id, {} , {withCredentials:true})
    dispatch(removeRequest(_id))

  }

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/recieved", {
        withCredentials: true,
      });
      console.log(res.data)
      dispatch(addRequests(res.data.connectionRequests));
      
    } catch (err) {
      console.error(err)
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  // if (requests === null) return <h1>Loading...</h1>;

  if (requests.length === 0) return <h1 className="flex justify-center mt-6 font-bold"> No Requests Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connection Requests</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, photourl, age, gender, about } =
          request.fromUserId

        

        return (
          <div
            key={_id}
            className=" flex m-4 p-4 justify-center items-center rounded-lg bg-base-300 w-2/3 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photourl}
              />
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div>
              <button className="btn btn-primary mx-2" onClick={()=>reviewRequest("rejected",request._id)}>Reject</button>
              <button className="btn btn-secondary mx-2" onClick={()=>reviewRequest("accepted", request._id)}>Accept</button>
            </div>
            
          </div>
        );
      })}
    </div>
  );
};
export default Requests;