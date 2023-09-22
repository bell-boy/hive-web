import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AdminRegister = () =>
{
    let [formState, setFormState] = useState({
        email: "",
        password: "",
        companyName: ""
    });

    // TODO: Error handling.
    // TODO: Re-route to dashboard.
    const submitForm = async () =>
    {
        let userCred = await createUserWithEmailAndPassword(auth, formState.email, formState.password);
        userCred.user.displayName = formState.companyName;
        console.log(userCred.user);
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="column">
                    <h1>Register</h1>
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
                    <label htmlFor="companyName">Organization Name</label>
                    <input className="form-control" id="companyName" value={formState.companyName} onChange={
                        (e) =>
                        {
                            setFormState({...formState, companyName: e.target.value});
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
export default AdminRegister;