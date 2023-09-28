import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const AdminLogin = () =>
{
    let [formState, setFormState] = useState({
        email: "",
        password: ""
    });

    // TODO: Error handling.
    // TODO: Re-route to dashboard.
    const submitForm = async () =>
    {
        let userCred = await signInWithEmailAndPassword(auth, formState.email, formState.password);
        userCred.user.displayName = formState.companyName;
        console.log(userCred.user);
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="column">
                    <h1>Login</h1>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" id="email" value={formState.email} onChange={
                        (e) =>
                        {
                            setFormState({...formState, email: e.target.value});
                        }
                    } />
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" id="password" value={formState.password} onChange={
                        (e) =>
                        {
                            setFormState({...formState, password: e.target.value});
                        }
                    }/>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <button type="button" className="btn btn-primary" onClick={submitForm} >submit</button>
                </div>
            </div>
        </div>
    );
};
export default AdminLogin;