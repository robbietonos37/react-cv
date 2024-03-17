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
    <>

      {submittedData ? (
        <PersonalInfo formData={submittedData} />
      ) : (
        <Personal onSubmit={handleSubmit} />
      )}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
