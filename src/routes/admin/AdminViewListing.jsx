import { getAuth, onAuthStateChanged } from "firebase/auth";
import { child, get, getDatabase, ref} from "firebase/database";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { auth, database, storage } from "../../firebase";
import { useEffect, useState } from "react";
import { deleteObject, getDownloadURL, listAll, ref as sRef } from "firebase/storage";

// TODO: Ensure that a user is signed in
const AdminViewListings = () =>
{
    const { postid } = useParams();
    let [applicants, setApplicants] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if(user) 
            {
                listAll(sRef(storage, `posts/${postid}`)).then((res) =>
                {
                    let listData = [];
                    res.items.forEach((itemRef) =>
                    {
                        listData.push(itemRef);
                    });
                    setApplicants(listData.map((val, idx) => <CandidateCard key={idx} postRef={val} refresh={() => navigate(0)} />));
                });
            }
        });
    }, []);
    return (
        <div className="container-fluid">
            <div className="d-flex flex-direction-row justify-content-center my-2">
                <h3>Candidates</h3>
            </div>
            <div className="d-flex border rounded align-items-center flex-column overflow-y-scroll" style={{height: "75vh"}} >
                {applicants.length == 0 ? <p className="my-3">no active applicants</p> : applicants}
            </div>
        </div>
    );
};

const CandidateCard = ({title, description, postRef, refresh}) => 
{
    return (
        <div className="card m-2" style={{width: "700px"}}>
                <div className="card-header">
                <h5>{postRef.name}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">{description}</p>
                <div className="d-flex gap-2">
                    <button className="btn btn-danger" onClick={() => {
                        deleteObject(postRef).then(() =>
                        {
                            refresh();
                            console.log(refresh);
                        });
                    }}>reject</button>
                    <button className="btn" style={{backgroundColor: "#f4d12f"}} onClick={(e) => {
                        getDownloadURL(postRef).then((val) =>
                        {
                            window.open(val, "_blank");
                        });
                    }}>download application</button>
                </div>
                
            </div>
        </div>
    );
};

export default AdminViewListings;