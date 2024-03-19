import React from "react";
import { useState } from "react";

export default function EducationInfo({ educationDetails, index, educationEntries, setEducationEntries }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDetails, setEditedDetails] = useState({ ...educationDetails });

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedArray = [...educationEntries];
        updatedArray[index] = editedDetails;
        setEducationEntries(updatedArray);
        setIsEditing(false);
    };

    if (isEditing) {
        // Render edit mode
        return (
            <div>
                <h1>Edit Education Details</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="schoolName">School Name</label>
                        <input
                            type="text"
                            name="schoolName"
                            value={editedDetails.schoolName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="degreeType">Degree Type</label>
                        <input
                            type="text"
                            name="degreeType"
                            value={editedDetails.degreeType}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="major">Major</label>
                        <input
                            type="text"
                            name="major"
                            value={editedDetails.major}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="degreeStatus">Degree Status</label>
                        <input
                            type="text"
                            name="degreeStatus"
                            value={editedDetails.degreeStatus}
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
        return (<div>
            <h1>Education Details</h1>
            <p>School Name: {educationDetails.schoolName}</p>
            <p>Degree Type: {educationDetails.degreeType}</p>
            <p>Major: {educationDetails.major}</p>
            <p>Degree Status: {educationDetails.degreeStatus}</p>
            <button onClick={toggleEditMode}>Edit</button>
        </div>
        );
    }
}