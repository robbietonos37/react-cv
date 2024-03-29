import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personal from './components/personal.jsx'
import PersonalInfo from './components/personalInfo'
import EducationForm from './components/EducationForm'
import EducationInfo from './components/EducationInfo'
import WorkForm from './components/WorkForm'
import WorkInfo from './components/WorkInfo'

function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const [educationEntries, setEducationEntries] = useState([]);
  const [workEntries, setWorkEntries] = useState([]);
  const handleSubmit = (data) => {
    setSubmittedData(data);
  };

  const handleEducationSubmit = (data) => {
    setEducationEntries([...educationEntries, data]);
  };

  const handleWorkSubmit = (data) => {
    setWorkEntries([...workEntries, data]);
  }

  return (
    <div className="App">
      <div id="form-container">
        <EducationForm onSubmit={handleEducationSubmit} />
        <WorkForm onSubmit={handleWorkSubmit} />
      </div>
      <div id='resume'>
        <div >
          {submittedData ? (
            <PersonalInfo personalDetails={submittedData} />
          ) : (
            <Personal onSubmit={handleSubmit} />
          )}
        </div>

        {educationEntries.map((entry, index) => (
          <EducationInfo key={index} educationDetails={entry} index={index} educationEntries={educationEntries} setEducationEntries={setEducationEntries} />
        ))}
        {workEntries.map((entry, index) =>
          <WorkInfo key={index} workDetails={entry} index={index} workEntries={workEntries} setWorkEntries={setWorkEntries} />
        )}

      </div>
    </div>
  );
}

export default App
