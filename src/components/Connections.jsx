/* eslint-disable react/jsx-key */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/jsx-key */
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      // Handle Error Case
      console.log(err)
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1> No Connections Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>

      {connections.map((connection) => {
        const {_id, firstName, lastName, photourl, age, gender, about } =
          connection;

        return (
          <div key={_id} className=" flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
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
          </div>
        );
      })}
    </div>
  );
};
export default Connections;



// const Connections = () => {
//     const dispatch= useDispatch();
//     const connections = useSelector((store) => store.connections)
    
//     const fetchConnections= async () =>{
//         try {
//             const res=await axios.get(BASE_URL +"/user/connections",{withCredentials:true});
            
//             dispatch(addConnections(res.data))

        
        
//         } catch (error) {
//             console.error(error)
            
//         }
//     }
//     useEffect(()=>{
//         fetchConnections();

//     },[])
    
//     if(!connections) return;

//     if(connections.length === 0) return ;

//      return (
//     <div className="flex justify-center my-10">
//     <h2 className="text-bold text-2xl">Connections</h2>
//     {connections.map((connection) => {
//         const { firstName, lastName, photourl } = connection;

//         return (
//             <div key={firstName + lastName}>
//                 <img src={photourl} className="h-20 w-20" alt="profile" />
//                 <h1>{`${firstName} ${lastName}`}</h1>
//             </div>
//         );
//     })}
// </div>
// );
// }

// export default Connections;