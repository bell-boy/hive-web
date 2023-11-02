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
        <div className="container-fluid p-0" style = {{overlfowY:"hidden"}}>
            <nav className="navbar px-5" style={{backgroundColor: "#c2bcae",}}>
                <div className="container-fluid">
                    <div className="d-flex gap-2 flex-row align-items-center">
                        <img src="/bee.png" height="30px" />
                        <Link className="navbar-brand h1" style={{color: "#f4d12f", fontSize: "30px", textShadow:"3px 3px 0 #000"}} to="/">hive</Link>
                    </div>
                    <div className="d-flex flex-row" style={{gap: "30px"}}>
                        <Link className="nav-link" to="/listings">listings</Link>
                        <Link className="nav-link" to="/admin/register">organization login</Link>
                    </div>
                </div>
            </nav>
            <div style = {{backgroundColor:"rgba(0, 0, 0,1)"}}>
        <div className="d-flex flex-column align-items-center justify-content-center overflow-hidden" style={{height: "95vh",backgroundImage:"url(../public/honeycomb.jpg)" }}>
            <div className="container-fluid border rounded p-3" style={{height: "450px", width: "400px",overlfowY:"hidden", backgroundColor:"white"}}>
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
            <Link to='/admin/register' style = {{color:"white"}}>{"Don't have an account? Register."}</Link>
        </div>
        </div>
        </div>
    );
};
export default AdminLogin;