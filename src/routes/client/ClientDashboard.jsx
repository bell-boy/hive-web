import { get, ref, set } from "firebase/database";
import { database } from "../../firebase";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const ClientDashboard = () => {
    const posts = useLoaderData();
    let [listItems, setListItems] = useState([]); 
    useEffect(() => {
        let postData = [];
        for(const key in posts) 
        {
            postData.push(posts[key]);
            postData[postData.length - 1].key = key;
        }
        setListItems(postData.map((value) => 
        <PostingCard title={value.title} description={value.description} startDate={value.startDate} endDate={value.endDate} postid={value.key} key={value.key} />));
    }, []);
    return (
        <div className="d-flex flex-row p-3" style={{gap: "50px"}}>
            <div className="list-group list-group-flush">
                {listItems}
            </div>
            <Outlet />
        </div>
    );
};

const ClientDashboardLoader = async () =>
{
    const posts = await get(ref(database, "posts"));
    return posts.val();
};

const PostingCard = ({title, description, startDate, endDate, postid}) => 
{
    return (
        <Link className="list-group-item list-group-item-action" to={`/listings/job/${postid}`} style={{width: "30vw"}} >
                <div className="card-header">
                <h2>{title}</h2>
                <span>{startDate} - {endDate}</span>
            </div>
        </Link>
    );
};

export default ClientDashboard;
export {ClientDashboardLoader};