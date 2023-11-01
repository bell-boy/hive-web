import { useEffect, useState } from "react";
import { auth, database, storage } from "../../firebase";
import { get, push, ref, remove, set } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, list, listAll, ref as sRef } from "firebase/storage";

// TODO: Ensure that user is signed in.
// TODO: Ensure that a user is allowed to edit a post
// TODO: Enable Deletion

const AdminEditListing = () =>
{
    let [formState, setFormState] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        website: ""
    });
    const { postid, postlocation } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        get(ref(database, `posts/${postid}`)).then((data) =>
        {
            setFormState(data.val());
        });
    }, []);

    // TODO: Error handling.
    // TODO: visual conformation, and return to dash
    const submitForm = async () =>
    {
        const postRef = ref(database, `posts/${postid}`);
        set(postRef, formState);
        navigate('/admin');
    };

    const deleteData = async () =>
    {
        const postRef = ref(database, `posts/${postid}`);
        const subPostRef = ref(database, `users/${auth.currentUser.uid}/${postlocation}`);
        remove(postRef);
        remove(subPostRef);
        navigate('/admin');
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h1>Edit Listing</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="title">title</label>
                    <input className="form-control" id="title" value={formState.title} onChange={
                        (e) =>
                        {
                            setFormState({...formState, title: e.target.value});
                        }
                    } />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="description">description</label>
                    <textarea className="form-control" id="description" value={formState.description} style={{height: "100px"}}onChange={
                        (e) =>
                        {
                            setFormState({...formState, description: e.target.value});
                        }
                    } />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="container-fluid">
                        <label htmlFor="startDate">start date</label>
                        <input className="form-control" id="startDate" type="date" value={formState.startDate} onChange={
                            (e) =>
                            {
                                setFormState({...formState, startDate: e.target.value});
                            }
                        }/>
                    </div>
                </div>
                <div className="col">
                    <div className="container-fluid">
                        <label htmlFor="endDate">end date</label>
                        <input className="form-control" id="endDate" type="date" value={formState.endDate} onChange={
                            (e) =>
                            {
                                setFormState({...formState, endDate: e.target.value});
                            }
                        }/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="website">website</label>
                    <input className="form-control" id="website" value={formState.website} onChange={
                        (e) =>
                        {
                            setFormState({...formState, website: e.target.value});
                        }
                    } />
                </div>
            </div>
            <div className="row">
                <div className="col py-2 d-flex gap-2">
                    <button type="button" className="btn btn-primary" onClick={submitForm} >submit</button>
                    <button type="button" className="btn btn-danger" onClick={deleteData} >remove</button>
                </div>
            </div>
        </div>
    );
};

export default AdminEditListing;