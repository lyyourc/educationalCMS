import React from 'react';

import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import FlatButton from 'material-ui/lib/flat-button';

const StudentItem = ({
  student,
  removeStudent,
  initStudent
}) => {
  const {
    name, gender,
    studentId, birthday,
    department, major
  } = student;

  return (
    <div className="col-xs-4 item row">
      <section className="col-xs-4">
        <Avatar src="images/avatar.png" size={80}/>
      </section>

      <section className="col-xs-8 info">
        <div className="name">{name}</div>
        <div>{gender}</div>
        <div>{studentId}</div>
        <div>{birthday}</div>
        <div>{department}</div>
        <div>{major}</div>
      </section>

      <section>
        <FlatButton label="删除" onClick={removeStudent}/>
        <FlatButton
          label="修改"
          primary={true}
          onClick={() => initStudent(student)} />
      </section>
    </div>
  );
};

export default StudentItem;
