import React, { useEffect, useState } from "react";
import "./App.css";
import Profile from "./Profile.js";

function App() {
  const defaultProfiles = [
    {
      firstName: "Alfredo",
      lastName: "Salazar",
      role: "Mentor",
      id: 123,
    },
    {
      firstName: "Daniel",
      lastName: "Di Venere",
      role: "Student",
      id: 456,
    },
  ];

  const [profiles, setProfiles] = useState([]);
  const initialFormData = {
    firstName: "",
    lastName: "",
    role: "",
    id: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setProfiles(defaultProfiles);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setProfiles([...profiles, formData]);
    setFormData(initialFormData);
  };

  const handleFormChange = (event) => {
    const key = event.target.name;
    setFormData({
      ...formData,
      [key]: event.target.value,
    });
  };

  return (
    <div>
      {/* Display the full list of Profiles using the Profile.js component*/}
      {profiles.map((profile) => {
        return <Profile profile={profile} key={profile.id} />;
      })}
      {/* Extra credit (a little more challenging): Add a form to add a new profile to the list  */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleFormChange}
          value={formData.firstName}
        ></input>

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleFormChange}
          value={formData.lastName}
        ></input>

        <label htmlFor="role">Role</label>
        <input
          type="text"
          name="role"
          onChange={handleFormChange}
          value={formData.role}
        ></input>

        <label htmlFor="id">ID</label>
        <input
          type="number"
          name="id"
          onChange={handleFormChange}
          value={formData.id}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
