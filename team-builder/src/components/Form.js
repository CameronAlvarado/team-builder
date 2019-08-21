import React, { useState } from "react";

const Form = props => {
  const [data, setData] = useState({ name: "", email: "", role: "" });
  const changeHandler = event => {
    //computed properties
    console.log(event.target.value);
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
//   const submitForm = event => {
//     event.preventDefault();
//     const newMember = {
//       ...data,
//       id: Date.now()
//     };
//     props.addNewNote(newNote);
//     setData({ name: "", email: "", role: "" });
//   };
  return (
    <form/* onSubmit={submitForm}*/ className="form">
      <label htmlFor="title">Name</label>
      <input
        name="name"
        placeholder="Type your name here"
        value={data.title}
        onChange={changeHandler}
      />
      <label htmlFor="body">Email</label>
      <input
        name="email"
        placeholder="Type your email here"
        value={data.body}
        onChange={changeHandler}
      />
      <label htmlFor="body">Role</label>
      <input
        name="role"
        placeholder="Type your role here"
        value={data.body}
        onChange={changeHandler}
      />
      <br></br>
      <button type="submit">Add note</button>
    </form>
  );
};

export default Form;
