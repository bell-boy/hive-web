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
        <div className="border rounded p-3" style={{width: "70vw"}}>
            <h1 style={{}}>{postData.title}</h1>
            <p>{postData.startDate} - {postData.endDate}</p>
            <a href={`${postData.website}`}>{postData.website}</a>
            <p>{postData.description}</p>
            <button className="btn" type="button" style={{backgroundColor: "#f4d12f", color: "white"}} data-bs-toggle="collapse" data-bs-target="#formCollaspe" aria-expanded="false">Apply</button>
            <div className="collapse" id="formCollaspe">
                <div className="card card-body my-2">
                    <div>
                        <p>resume</p>
                        <input className="form-control" type="file" ref={fileRef}></input>
                        <p>email</p>
                        <input className="form-control" type="text" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <button onClick={sumbitData} className="btn my-2" style={{backgroundColor: "#f4d12f", color: "white"}}>submit</button>
                </div>
            </div>
            
        </div>
    );
};

export default ClientJobPosting;
export {ClientJobPostingLoader};