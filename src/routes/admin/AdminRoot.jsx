import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, Outlet, redirect, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const loader = async () =>
{
    let isLoggedIn = await new Promise((res, rej) =>
    {
        onAuthStateChanged(auth, (user) => {
            res(user);
        });
    });
    if(!isLoggedIn) return redirect('/admin/login');
    else return null;
};

const AdminRoot = () =>
{
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand h1" style={{color: "#f4d12f"}} to="/admin">hive-admin</Link>
                    <button type="button" className="btn" onClick={() => {
                        signOut(auth).then(() => {
                            navigate('/admin/login');
                        });
                    }}>sign out</button>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default AdminRoot;
export {loader as AdminLoader};