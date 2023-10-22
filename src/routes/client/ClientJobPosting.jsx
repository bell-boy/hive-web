import { get, ref } from "firebase/database";
import { Link, useLoaderData } from "react-router-dom";
import { database } from "../../firebase";
import { useEffect } from "react";

// TODO: Error handling

const ClientJobPostingLoader = async ({ params }) =>
{
    let postData = await get(ref(database, `/posts/${params.jobid}`));
    return postData.val();
};

const ClientJobPosting = () =>
{
    let postData = useLoaderData();
    return (
        <div>
            <h1>{postData.title}</h1>
            <span>date - date</span>
            <p>{postData.description}</p>
            <a>{postData.website}</a>
            <button>submit</button>
        </div>
    );
};

export default ClientJobPosting;
export {ClientJobPostingLoader};