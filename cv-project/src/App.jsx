import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personal from './components/personal.jsx'
import PersonalInfo from './components/personalInfo'

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="App">
      <h1>Personal Information Form</h1>
      {submittedData ? (
        <PersonalInfo personalDetails={submittedData} />
      ) : (
        <Personal onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App
