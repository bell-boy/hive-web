import { Link, Outlet } from "react-router-dom";

const ClientRoot = () =>
{
    return (
        <div>
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
            <Outlet />
        </div>
    );
};

export default ClientRoot;