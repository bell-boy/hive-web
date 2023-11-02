import { useEffect, useState } from "react";
import { auth, database } from "../../firebase";
import { push, ref, set } from "firebase/database";
import { redirect, useNavigate } from "react-router-dom";

// TODO: Ensure that user is signed in.

const AdminNewListing = () =>
{
    let [formState, setFormState] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        website: "",
        companyName: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        setFormState({...formState, companyName: auth.currentUser.displayName});
    },[]);

    // TODO: Error handling.
    // TODO: visual conformation, and return to dash
    const submitForm = async () =>
    {
        const postRef = ref(database, 'posts');
        const newPostRef = push(postRef);
        set(newPostRef, formState).then(() => 
        {
            // Add that new Listing under the current user
            const userRef = ref(database, `users/${auth.currentUser.uid}`);
            const postAppendRef = push(userRef);
            set(postAppendRef, newPostRef.key).then(() =>
            {
                navigate("/admin");
            });
        });
        
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h1>New Listing</h1>
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
                </div>
            </div>
        </div>
    );
};
export default AdminNewListing;