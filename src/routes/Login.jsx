import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

const Login = () =>
{

    let [haveSubmitted, setHaveSubmitted] = useState(false);
    let [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const submitHandler = useEffect(() => {
        const touchApi = async () => {
            if(haveSubmitted) {
                const response = await fetch('http://127.0.0.1:5001/hive-69054/us-central1/app/auth/login', {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "username": formData.email,
                        "password": formData.password
                    }),
                    credentials: "include",
                    method: "POST"
                });

                if(response.ok) {
                    console.log('login success');
                }
                else console.log(response.statusText);

                setHaveSubmitted(false);
            }
        };
        touchApi();
    }, [haveSubmitted]);

    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={(e) => {e.preventDefault(); setHaveSubmitted(true);}}>
                <label htmlFor="email">Email</label><br />
                <input type="text" name="email" id="email" onChange={(e) => {
                    let newFormData = formData;
                    newFormData.email = e.target.value;
                    setFormData(newFormData);
                }}/><br />
                <label htmlFor="password" value={formData.password}>Password</label><br />
                <input type="text" name="password" id="password" onChange={(e) => {
                    let newFormData = formData;
                    newFormData.password = e.target.value;
                    setFormData(newFormData);
                }}/><br />
                <input type="submit" disabled={haveSubmitted}/>
            </Form>
        </div>
    );
};

export default Login;