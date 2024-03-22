import React from "react";
import { useState } from "react";

export default function WorkInfo({ workDetails, index, workEntries, setWorkEntries }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedWorkDetails, setEditedWorkDetails] = useState({ ...workDetails });

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedWorkDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedArray = [...workEntries];
        updatedArray[index] = editedWorkDetails;
        setWorkEntries(updatedArray);
        setIsEditing(false);
    };

    if (isEditing) {
        // Render edit mode
        return (
            <div>
                <h1>Edit Work Details</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            value={editedWorkDetails.companyName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="position">Position</label>
                        <input
                            type="text"
                            name="position"
                            value={editedWorkDetails.position}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="startDate">Start Date</label>
                        <input
                            type="text"
                            name="startDate"
                            value={editedWorkDetails.startDate}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="endDate">End Date</label>
                        <input
                            type="text"
                            name="endDate"
                            value={editedWorkDetails.endDate}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Save</button>
                    <button type="button" onClick={toggleEditMode}>
                        Cancel
                    </button>
                </form>
            </div>
        );
    } else {
        return (<div className="workInfo">
            <h1>Work Details</h1>
            <p>Company Name: {workDetails.companyName}</p>
            <p>Position: {workDetails.position}</p>
            <p>Start Date: {workDetails.startDate}</p>
            <p>End Date: {workDetails.endDate}</p>
            <button onClick={toggleEditMode}>Edit</button>
        </div>
        );
    }
}