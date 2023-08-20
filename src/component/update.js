import { useContext, useState } from "react";
import { GlobalContext } from "../store";
import { useNavigate, useParams } from "react-router-dom";

function Update(){
    const navigate = useNavigate();
    const ctx = useContext(GlobalContext);
    const {id} = useParams();
    const [nameinput,setNameinput] = useState('');
    const [emailinput, setEmailinput] = useState('');
    const user = ctx.users.find((user) => user.id == id);
    const { name, email } = user;
   
    useState(()=>{
        setEmailinput(email);
        setNameinput(name);
    },[name, email]);
    function handleSubmit(e){
        e.preventDefault();
        if(nameinput === '' || emailinput === ''){
            alert('Please Fill All Inputs');

        }else{
            ctx.Update({id, name:nameinput, email:emailinput});
            navigate('/home');
        }
    }


    return (
        <div className='container mt-5 border p-2'>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text" className="form-control" onChange={e => setNameinput(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" value={nameinput}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email</label>
            <input type="email" className="form-control" onChange={e => setEmailinput(e.target.value)} id="exampleInputPassword1" placeholder="Email" value={emailinput}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
     </div>
    )
}


export default Update;