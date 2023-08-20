import { useContext } from "react";
import { GlobalContext } from "../store";
import { Link } from "react-router-dom";


function Home(){
    const  ctx = useContext(GlobalContext);
    const users = ctx.users;
    const deleteUser =(id)=>{
      // console.log("it is dlete",id);
      ctx.deleteUser(id);

    }
    const usersList =users.map(user =>  <tr key={user.id}>
        <th scope="row" >{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><Link className="btn btn-primary btn-sm" to={`/update/${user.id}`}>Edit</Link> <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>Delete</button></td>
      </tr>);
    return(
        <div className="container mt-5 border">
          {usersList.length === 0 ? (<p>
           No Data Found
          </p>) :(<table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {usersList}
        </tbody>
      </table>)}
        
      </div>
    )
}


export default Home;