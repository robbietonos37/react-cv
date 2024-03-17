import { useState } from "react"

export default function Personal() {
    const [personalDetails, setPersonalDetails] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        emailAddress: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(personalDetails);
    }


    return <div id="personalForm">
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="first-name">First Name</label>
                <input type="text" name="firstName"
                    value={personalDetails.firstName}
                    onChange={handleChange} required />
            </div>
            <div className="form-row">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" name="lastName"
                    value={personalDetails.lastName}
                    onChange={handleChange} required />
            </div>
            <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="email" name='emailAddress'
                    value={personalDetails.emailAddress}
                    onChange={handleChange} required />
            </div>
            <div className="form-row">
                <label htmlFor="email">Phone Number</label>
                <input type="text" name="phone"
                    value={personalDetails.phone}
                    onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>

    </div>

}