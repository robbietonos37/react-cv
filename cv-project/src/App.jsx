import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personal from './components/personal.jsx'
import PersonalInfo from './components/personalInfo'
import EducationForm from './components/EducationForm'
import EducationInfo from './components/EducationInfo'

function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const [educationEntries, setEducationEntries] = useState([]);

  const handleSubmit = (data) => {
    setSubmittedData(data);
  };

  const handleEducationSubmit = (data) => {
    setEducationEntries([...educationEntries, data]);
  };


  return (
    <div className="App">
      <h1>Personal Information Form</h1>
      <EducationForm onSubmit={handleEducationSubmit} />
      {submittedData ? (
        <PersonalInfo personalDetails={submittedData} />
      ) : (
        <Personal onSubmit={handleSubmit} />
      )}
      <div>
        {educationEntries.map((entry, index) => (
          <EducationInfo key={index} educationDetails={entry} />
        ))}
      </div>
    </div>
  );
}

export default App
