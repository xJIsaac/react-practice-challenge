import React, {useState} from 'react';
import './App.css';

function App() {

  const defaultProfiles = [
        {
          firstName : "Alfredo",
          lastName : "Salazar",
          role : "Mentor",
          id : 123
        },
        {
          firstName : "Daniel",
          lastName : "Di Venere",
          role : "Student",
          id : 456
        }
      ]
  
  
    return (
      <div>
          {/* Display the full list of Profiles using the Profile.js component*/}
          {/* Extra credit (a little more challenging): Add a form to add a new profile to the list  */}
      </div>
    );
}

export default App;
