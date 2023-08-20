import { useContext, useState } from "react";
import { GlobalContext } from "../store";
import { useNavigate } from "react-router-dom";

function Create(){
    const navigate = useNavigate();
    const ctx = useContext(GlobalContext);
    const [nameinput,setNameinput] = useState('');
    const [emailinput, setEmailinput] = useState('');
    const user = ctx.users;
    const id = user.length > 0 ? user.length +1 :1;
    function handleSubmit(e){
        e.preventDefault();
        if(nameinput === '' || emailinput === ''){
            alert('Please Fill All Inputs');

        }else{
            ctx.addUser({id, name:nameinput, email:emailinput});
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


export default Create;