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
  const formData = { name, age, surname };
  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => setMessage(data.message))
    .catch((error) => {
      console.error("Error:", error);
      setMessage("An error occurred.");
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
    </div>
  );
}
export default Form;
