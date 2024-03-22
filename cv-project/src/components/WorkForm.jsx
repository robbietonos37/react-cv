import { useState } from "react"

export default function WorkForm({ onSubmit }) {
    const [workDetails, setWorkDetails] = useState({
        position: "",
        companyName: "",
        startDate: "",
        endDate: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkDetails((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setWorkDetails({
            position: "",
            companyName: "",
            startDate: "",
            endDate: ""
        }); // Clear the form after submission
        onSubmit(workDetails);
    }


    return <div id="personalForm">
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="position">Position</label>
                <input type="text" name="position"
                    value={workDetails.position}
                    onChange={handleChange} required />
            </div>
            <div className="form-row">
                <label htmlFor="companyName">Company Name</label>
                <input type="text" name="companyName"
                    value={workDetails.companyName}
                    onChange={handleChange} required />
            </div>
            <div className="form-row">
                <label htmlFor="startDate">Start Date</label>
                <input type="text" name='startDate'
                    value={workDetails.startDate}
                    onChange={handleChange} required />
            </div>
            <div className="form-row">
                <label htmlFor="endDate">End Date</label>
                <input type="text" name="endDate"
                    value={workDetails.endDate}
                    onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>

    </div>

}