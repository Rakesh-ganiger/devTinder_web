/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


// eslint-disable-next-line react/prop-types
const UserCard = ({user}) => {
    // eslint-disable-next-line react/prop-types
    const {firstName,lastName, photourl,age,gender,about}=user;
    console.log(user)
   
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
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard;