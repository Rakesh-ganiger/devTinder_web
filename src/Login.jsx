import axios from "axios";
import { useState } from "react"

const Login = () => {
    const[email, setEmail] = useState("dhoni123@gmail.com");
    const[password, setPassword] = useState("Dhoni@2002")

    const handleLogin = async ()=>{
        try {
            const res=await axios.post("http://localhost:7777/login",{
                email,
                password
            },{withCredentials:true})
            // console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div className="flex justify-center my-10">
        <div className="card bg-base-300 w-96 shadow-xl ">
            <div className="card-body">
                <h2 className="card-title flex justify-center font-bold">Login</h2>
                <div>
                    <label className="form-control w-full max-w-xs ">
                        <div className="label">
                            <span className="label-text">Email </span>
                        </div>
                        <input 
                            type="text" 
                            value={email}
                            className="input input-bordered w-full max-w-xs" 
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </label>
                    <label className="form-control w-full max-w-xs my-1">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input
                             type="password" 
                             value={password}
                             className="input input-bordered w-full max-w-xs" 
                             onChange={(e)=>setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div className="card-actions justify-center ">
                    <button className="btn btn-primary" onClick={handleLogin}>Submit</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login