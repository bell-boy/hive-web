import { useState } from "react";

const AdminLogin = () =>
{
    let [formState, setFormState] = useState({
        email: "",
        password: ""
    });

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
                            setFormState({email: e.target.value, password: formState.password});
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
                            setFormState({email: formState.email, password: e.target.value});
                        }
                    }/>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <button type="button" className="btn btn-primary" >submit</button>
                </div>
            </div>
        </div>
    );
};
export default AdminLogin;