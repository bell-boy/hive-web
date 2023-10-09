import { getAuth } from "firebase/auth";
import { child, get, getDatabase} from "firebase/database";
import { Link } from "react-router-dom";

const loader = () =>
{
    // fetch data
};

const AdminListings = () =>
{
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="column">
                    <PostingCard title="joe" description="mama" />
                    <PostingCard title="joe" description="mama" />
                </div>
            </div>
            <Link className="btn btn-primary" to="/admin/new">new listing</Link>
        </div>
    );
};

const PostingCard = ({title, description}) => 
{
    return (
        <div className="card m-2" style={{width: "700px"}}>
                <div className="card-header">
                <h2>{title}</h2>
                <span>date - date</span>
            </div>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <Link className="btn btn-primary" to="">edit</Link>
            </div>
        </div>
    );
};

export default AdminListings;