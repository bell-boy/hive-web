import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () =>
{
    let [formState, setFormState] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    let [submitting, setSubmitting] = useState(false);

    // TODO: Error handling.
    const submitForm = () =>
    {
        setSubmitting(true);
        signInWithEmailAndPassword(auth, formState.email, formState.password).then((userCred) => {
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
                        <h1>Login</h1>
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
                    <div className="column my-2">
                    <button type="submit" className={`btn ${submitting ? "disabled" : ""}`} onClick={submitForm} style={{backgroundColor: "#f4d12f"}} >{submitting ? 
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> : "submit"}</button>
                    </div>
                </div>
            </div>
            <Link to='/admin/register'>{"Don't have an account? Register."}</Link>
        </div>
    );
};
export default AdminLogin;