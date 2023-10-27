import { useEffect, useState } from "react";
import { auth, database, storage } from "../../firebase";
import { get, push, ref, set } from "firebase/database";
import { useParams } from "react-router-dom";
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
    let [applicants, setApplicants] = useState(null);
    const { postid } = useParams();
    useEffect(() => {
        get(ref(database, `posts/${postid}`)).then((data) =>
        {
            setFormState(data.val());
        });

        listAll(sRef(storage, `posts/${postid}`)).then((res) =>
        {
            let listData = [];
            res.items.forEach((itemRef) =>
            {
                listData.push(itemRef);
            });
            setApplicants(listData.map((val, idx) => <Application key={idx} postRef={val} />));
        });
    }, []);

    // TODO: Error handling.
    // TODO: visual conformation, and return to dash
    const submitForm = async () =>
    {
        const postRef = ref(database, `posts/${postid}`);
        set(postRef, formState);
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
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={submitForm} >submit</button>
                </div>
            </div>
            <div className="list-group">
                {applicants}
            </div>
        </div>
    );
};

const Application = ({email, postRef}) =>
{
    const download = () => {

    };
    return (
        <div className="container-fluid">
            <h5>{postRef.name}</h5>
            <button onClick={(e) => {
                getDownloadURL(postRef).then((val) =>
                {
                    window.open(val, "_blank");
                });
            }}>download application</button>
        </div>
    );
};
export default AdminEditListing;