import React from "react"

export default function PersonalInfo({ personalDetails }) {
    return (<div>
        <p>{personalDetails.firstName}</p>
        <p>{personalDetails.lastName}</p>
        <p>{personalDetails.email}</p>
        <p>{personalDetails.phoneNumber}</p>
    </div>
    );
}