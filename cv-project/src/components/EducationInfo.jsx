import React from "react"

export default function EducationInfo({ educationDetails }) {
    return (<div>
        <h1>Education Details</h1>
        <p>School Name: {educationDetails.schoolName}</p>
        <p>Degree Type: {educationDetails.degreeType}</p>
        <p>Major: {educationDetails.major}</p>
        <p>Degree Status: {educationDetails.degreeStatus}</p>
    </div>
    );
}