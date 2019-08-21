import React from "react";

const MemberList = props => {
  console.log(props);
  return (
    <div className="member-list">
      {props.members.map(member => {
        return (
          <div className="list" key={member.id}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        );
      })}
    </div>
  );
};
export default MemberList;
