import React from "react";

const MemberList = props => {

  // useEffect(() => {
  //   const editMember = props.memberToEdit();
  //   return () => {
  //     editMember.submitForm();
  //   };
  // });

  console.log(props);
  return (
    <div className="member-list">
      {props.members.map(member => {
        return (
          <div className="list" key={member.id}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
            {/* <form onSubmit={editMember} className="form">
            <button type="submit">Edit Member</button>
            </form> */}
          </div>
        );
      })}
    </div>
  );
};
export default MemberList;
