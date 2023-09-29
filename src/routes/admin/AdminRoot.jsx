import { Link, Outlet } from "react-router-dom";

const AdminRoot = () =>
{
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand h1 text-primary">hive-admin</a>
                    <Link className="nav-link">sign out</Link>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default AdminRoot;