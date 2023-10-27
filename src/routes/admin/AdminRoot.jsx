import { signOut } from "firebase/auth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const AdminRoot = () =>
{
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand h1 text-primary">hive-admin</a>
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