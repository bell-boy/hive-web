import { getAuth, onAuthStateChanged } from "firebase/auth";
import { child, get, getDatabase, ref} from "firebase/database";
import { Link } from "react-router-dom";
import { auth, database } from "../../firebase";
import { useEffect, useState } from "react";

// TODO: Ensure that a user is signed in
const AdminListings = () =>
{
    let [listings, setListings] = useState([]);
    let [listItems, setListItems] = useState([]);
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if(user) 
            {
                const data = await get(ref(database, `users/${auth.currentUser.uid}`));
                let real_data = [];
                for(const key in data.val())
                {
                    const element = await get(ref(database, `posts/${data.val()[key]}`));
                    real_data.push(element.val());
                    real_data[real_data.length - 1].postid = data.val()[key]; 
                }
                setListings(real_data);
                setListItems(real_data.map((obj, index) => {
                    return <PostingCard title={obj.title} description={obj.description} postid={obj.postid} key={index} />;
                }));
            }
        });
    }, []);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="column">
                    {listItems}
                </div>
            </div>
            <Link className="btn btn-primary" to="/admin/new">new listing</Link>
        </div>
    );
};

const PostingCard = ({title, description, postid}) => 
{
    return (
        <div className="card m-2" style={{width: "700px"}}>
                <div className="card-header">
                <h2>{title}</h2>
                <span>date - date</span>
            </div>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <Link className="btn btn-primary" to={`/admin/edit/${postid}`}>edit</Link>
            </div>
        </div>
    );
};

export default AdminListings;