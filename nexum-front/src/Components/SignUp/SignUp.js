import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

 
const SignUp = () => {

    const navigate = useNavigate()


    const [user, setUser] = useState({
        email: "",
        password: "",
   
    })

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = {...user};
        tempUser[name] = value;
        setUser(tempUser)
    }

const submitHandler = () => {

    axios.post("http://localhost:8080/user/signUp", user)
    .then((response) => {
            navigate("/Sign-In")
    }).catch((e) => {
        console.log(e)
    })
}

    return (
        <div>
            <form className="row g-3">
            <c> Sign up below to get sharing!</c>
            <div className="col-md-6">
                <c for="inputEmail4" className="form-label">Email</c>
                <input name="email" value={user.email} onChange={changeHandler} type="email" className="form-control" id="inputEmail" />
            </div>
            <div className="col-md-6">
                <c for="inputPassword4" className="form-label">Passsword</c>
                <input name="password" value={user.password} onChange={changeHandler} type="password" className="form-control" id="inputPassword" />
            </div>
            <div className="d-grid gap-2 ">
                <button onClick={submitHandler} className="bg-dark btn btn-outline-success" type="button">Sign up</button>
            </div>
            </form>
        </div>
    )

}

export default SignUp