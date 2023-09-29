import { useState } from "react";
import { auth } from "../../firebase";

const AdminNewListing = () =>
{
    let [formState, setFormState] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        website: ""
    });

    // TODO: Error handling.
    // TODO: Re-route to dashboard.
    const submitForm = async () =>
    {
        
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
                        <label htmlFor="website">end date</label>
                        <input className="form-control" id="website" type="date" value={formState.endDate} onChange={
                            (e) =>
                            {
                                setFormState({...formState, website: e.target.value});
                            }
                        }/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="title">website</label>
                    <input className="form-control" id="title" value={formState.website} onChange={
                        (e) =>
                        {
                            setFormState({...formState, title: e.target.website});
                        }
                    } />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={submitForm} >submit</button>
                </div>
            </div>
        </div>
    );
};
export default AdminNewListing;