import { getAuth, onAuthStateChanged } from "firebase/auth";
import { child, get, getDatabase, ref} from "firebase/database";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth, database } from "../../firebase";
import { useEffect, useState } from "react";

// TODO: Ensure that a user is signed in
const AdminListings = () =>
{
    let [listings, setListings] = useState([]);
    let [listItems, setListItems] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if(user) 
            {
                const data = await get(ref(database, `users/${auth.currentUser.uid}`));
                let real_data = [];
                for(const key in data.val())
                {
                    let element = (await get(ref(database, `posts/${data.val()[key]}`))).val();
                    element.urlKey = key;
                    console.log(element);
                    real_data.push(element);
                    real_data[real_data.length - 1].postid = data.val()[key]; 
                }
                setListings(real_data);
                setListItems(real_data.map((obj, index) => {
                    return <PostingCard title={obj.title} description={obj.description} urlKey={obj.urlKey} postid={obj.postid} startDate={obj.startDate} endDate={obj.endDate} key={index} />;
                }));
            }
        });
    }, []);
    return (
        <div className="container-fluid">
            <div className="d-flex flex-direction-row justify-content-between my-2">
                <h3>Active Listings</h3>
                <button className="btn" style={{backgroundColor: "#f4d12f", color: "white"}} onClick={() => navigate("/admin/new")}>new listing</button>
            </div>
            <div className="d-flex border rounded align-items-center flex-column overflow-y-scroll" style={{height: "75vh"}} >
                {listItems.length == 0 ? <p className="my-3">no active listings</p> : listItems}
            </div>
        </div>
    );
};

const PostingCard = ({title, description, urlKey, startDate, endDate, postid}) => 
{
    return (
        <div className="card m-2" style={{width: "700px"}}>
                <div className="card-header">
                <h2>{title}</h2>
                <span>{startDate} - {endDate}</span>
            </div>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <div className="d-flex gap-2">
                    <Link className="btn btn-primary" to={`/admin/edit/${postid}/${urlKey}`}>edit</Link>
                    <Link className="btn btn-primary" to={`/admin/view/${postid}`}>view</Link>
                </div>
            </div>
        </div>
    );
};

export default AdminListings;