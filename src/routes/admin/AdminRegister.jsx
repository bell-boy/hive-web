import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, updateProfile } from "firebase/auth";
import { Link, redirect, useNavigate } from "react-router-dom";

// if logged in then reroute
const loader = async () =>
{
    let isLoggedIn = await new Promise((res, rej) =>
    {
        onAuthStateChanged(auth, (user) => {
            res(user);
        });
    });
    if(isLoggedIn) return redirect('/admin/');
    else return null;
};

const AdminRegister = () =>
{
    const navigate = useNavigate();
    let [formState, setFormState] = useState({
        email: "",
        password: "",
        companyName: ""
    });
    let [submitting, setSubmitting] = useState(false);

    // TODO: Error handling.
    const submitForm = () =>
    {
        setSubmitting(true);
        createUserWithEmailAndPassword(auth, formState.email, formState.password).then((userCred) => 
        {
            updateProfile(userCred.user, {displayName: formState.companyName});
            sendEmailVerification(userCred.user);
            navigate("/admin/");
        }).catch((error) => {
            console.log(error.message);
        });
        
    };
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{height: "100vh", }}>
            <div className="container-fluid border rounded p-3" style={{height: "450px", width: "400px"}}>
                <div className="row">
                    <div className="column">
                        <h1>Register</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label htmlFor="email" className="form-label">Email</label>
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
                        <label htmlFor="password" className="form-label">Password</label>
                        <input className="form-control" id="password" type="password" value={formState.password} onChange={
                            (e) =>
                            {
                                setFormState({...formState, password: e.target.value});
                            }
                        }/>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label htmlFor="companyName" className="form-label">Organization Name</label>
                        <input className="form-control" id="companyName" value={formState.companyName} onChange={
                            (e) =>
                            {
                                setFormState({...formState, companyName: e.target.value});
                            }
                        }/>
                    </div>
                </div>
                <div className="row">
                    <div className="column my-2">
                        <button type="submit" className={`btn ${submitting ? "disabled" : ""}`} onClick={submitForm} style={{backgroundColor: "#f4d12f"}} >{submitting ? 
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> : "submit"}</button>
                    </div>
                </div>
            </div>
            <Link to='/admin/login'>Already registered? Login.</Link>
        </div>
    );
};
export default AdminRegister;
export {loader as registerLoader};