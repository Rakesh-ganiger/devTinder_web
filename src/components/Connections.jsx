
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
      console.log(res)
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

  if (connections.length === 0) return <h1 className="flex justify-center my-10 font-bold"> No Connections Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>

      {connections.map((connection) => {
        const {_id, firstName, lastName, photourl, age, gender, about } =
          connection;

        return (
          <div key={_id} className=" flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
            <div>

             {/* {photourl && ( <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photourl}
              />)} */}

<img 
  className="w-20 h-20 rounded-full"
  src={photourl || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
  onError={(e) => e.target.src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
  alt="User Profile"
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


