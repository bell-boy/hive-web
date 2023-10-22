import { Link, Outlet } from "react-router-dom";

const ClientRoot = () =>
{
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand h1 text-primary">hive</a>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default ClientRoot;