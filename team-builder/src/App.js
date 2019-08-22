import React, { useState } from 'react';
import Form from "./components/Form"
import './App.css';
import memberData from "./data/memberData"
import MemberList from "./components/MemberList"

function App() {
  // const [editedMembers, seteditedMembers] = useState(memberData);
  const [members, setMembers] = useState(memberData);
  const addNewMember = member => {
    setMembers([...members, member]);
    };
  const memberToEdit = member => {
    setMembers([...members, member]);
    };
  return (
    <div className="App">
      <h1>Team Builder 1.0</h1>
      <Form addNewMember={addNewMember} memberToEdit={memberToEdit}/>
      <MemberList members={members} />
    </div>
  );
}

export default App;
