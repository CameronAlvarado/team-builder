import React, { useState } from "react";

const Form = props => {
  const [data, setData] = useState({ name: "", email: "", role: "" });
  const changeHandler = event => {
    console.log(event.target.value);
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    const newMember = {
      ...data,
      id: Date.now()
    };
    props.addNewMember(newMember);
    setData({ name: "", email: "", role: "" });
  };
  return (
    <form onSubmit={submitForm} className="form">
      <label htmlFor="title">Name</label>
      <input
        className="input-field"
        name="name"
        placeholder="Type your name here"
        value={data.title}
        onChange={changeHandler}
      />
      <label htmlFor="body">Email</label>
      <input
        className="input-field"
        name="email"
        placeholder="Type your email here"
        value={data.body}
        onChange={changeHandler}
      />
      <label htmlFor="body">Role</label>
      <input
        className="input-field"
        name="role"
        placeholder="Type your role here"
        value={data.body}
        onChange={changeHandler}
      />
      <br></br>
      <button type="submit">Add Member</button>
    </form>
  );
};

export default Form;
