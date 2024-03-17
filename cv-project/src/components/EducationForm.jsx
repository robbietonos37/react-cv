import { useState } from "react";

export default function EducationForm({ onSubmit }) {
    const [educationArray, setEducationArrayElements] = useState([])
    const [educationDetails, setEducationDetails] = useState({
        schoolName: "",
        degreeType: "",
        major: "",
        degreeStatus: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducationDetails((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEducationArrayElements([...educationArray, educationDetails]);
        setEducationDetails({
            schoolName: "",
            degreeType: "",
            major: "",
            degreeStatus: ""
        }); // Clear the form after submission
        onSubmit(educationDetails);
    };

    return (
        <div id="educationForm">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="schoolName">School Name</label>
                    <input
                        type="text"
                        name="schoolName"
                        value={educationDetails.schoolName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="degreeType">Degree Type</label>
                    <input
                        type="text"
                        name="degreeType"
                        value={educationDetails.degreeType}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="major">Major</label>
                    <input
                        type="text"
                        name="major"
                        value={educationDetails.major}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="degreeStatus">Degree Status</label>
                    <input
                        type="text"
                        name="degreeStatus"
                        value={educationDetails.degreeStatus}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
