import { Link } from "react-router-dom";

const AdminListings = () =>
{
    return (
        <div className="container-fluid">
            <div className="column">
                <Link className="btn btn-primary">new listing</Link>
            </div>
        </div>
    );
};

export default AdminListings;