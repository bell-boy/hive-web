import { Link, Outlet } from "react-router-dom";

const ClientRoot = () =>
{
    return (
        <div>
            <nav className="navbar px-5 border-bottom" style={{backgroundColor: "#eeede9",}}>
                <div className="container-fluid">
                    <Link className="navbar-brand h1" style={{color: "#f4d12f", fontSize: "30px"}} to="/">hive</Link>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default ClientRoot;