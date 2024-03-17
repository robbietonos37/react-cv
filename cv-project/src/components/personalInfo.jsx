import React from "react"

export default function PersonalInfo({ personalDetails }) {
    return (<div>
        <p>{personalDetails.firstName}</p>
        <p>{personalDetails.lastName}</p>
        <p>{personalDetails.emailAddress}</p>
        <p>{personalDetails.phone}</p>
    </div>
    );
}