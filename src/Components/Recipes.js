import React, { useState } from "react";
function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [surname, setSurname] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Age: ${age}, Surname: ${surname}`);
  };
  const formData = {
    name: name,
    age: age,
    surname: surname,
  };

  fetch("http://localhost:3002/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok!");
      }
      return response.json();
    })
    .then((data) => {
      setMessage("");
    })
    .catch((error) => {
      console.error("Error", error);
      setMessage("An error occurred!");
    });
  return (
    <div className="info-users">
      <form onSubmit={handleSubmit}>
        <label className="label">
          Name:
          <input
            className="input"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="label">
          Surname:
          <input
            className="input"
            type="text"
            value={surname}
            required
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <label className="label">
          Age:
          <input
            className="input"
            type="text"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
export default Form;
