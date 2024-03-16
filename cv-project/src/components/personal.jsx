import { useState } from "react"

export default function Personal() {
    const [newFirstName, setFirstName] = useState('');
    const [newLastName, setLastName] = useState('');
    const [newPhoneNumber, setPhoneNumber] = useState('');
    const [newEmail, setEmail] = useState('');
    let submitted = false;

    function handleEvent(event) {
        console.log('Does this get hit');
        alert('hat do oi do');
        event.preventDefault();
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
    }


    return <div id="personalForm">
        <form onSubmit={handleEvent}>
            <div className="form-row">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" value={newFirstName}
                    onChange={(event) => setFirstName(event.target.value)} required />
            </div>
            <div className="form-row">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" value={newLastName}
                    onChange={(event) => setLastName(event.target.value)} required />
            </div>
            <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={newEmail}
                    onChange={(event) => setEmail(event.target.value)} required />
            </div>
            <div className="form-row">
                <label htmlFor="email">Phone Number</label>
                <input type="text" id="phoneNumber" value={newPhoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)} required />
            </div>
            <button type="submit">Submit</button>
        </form>

    </div>

}