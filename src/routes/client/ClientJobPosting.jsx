import { get, ref } from "firebase/database";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { database, storage } from "../../firebase";
import { useEffect, useRef, useState } from "react";
import { uploadBytes, ref as sRef } from "firebase/storage";

// TODO: Error handling

const ClientJobPostingLoader = async ({ params }) =>
{
    let postData = await get(ref(database, `/posts/${params.jobid}`));
    return postData.val();
};

const ClientJobPosting = () =>
{
    let postData = useLoaderData();
    let fileRef = useRef(null);
    let [email, setEmail] = useState("");
    let { jobid } = useParams();
    const sumbitData = () => {
        let newJobRef = sRef(storage, `posts/${jobid}/${email}`);
        // TODO: add loading icon.
        // TODO: prevent duplicates
        uploadBytes(newJobRef, fileRef.current.files[0]).then((snapshot) => console.log("success"));
    };
    return (
        <div>
            <h1>{postData.title}</h1>
            <span>{postData.startDate} - {postData.endDate}</span>
            <p>{postData.description}</p>
            <a>{postData.website}</a>
            <p>resume</p>
            <input className="form-control" type="file" ref={fileRef}></input>
            <p>email</p>
            <input className="form-control" type="text" onChange={(e) => setEmail(e.target.value)}></input>
            <button onClick={sumbitData}>submit</button>
        </div>
    );
};

export default ClientJobPosting;
export {ClientJobPostingLoader};