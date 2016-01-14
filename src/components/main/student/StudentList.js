import React from 'react';

import List from 'material-ui/lib/lists/list';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';

import StudentItem from './StudentItem';

const StudentList = ({
  students,
  removeStudent,
  initStudent
}) => (
  <div className="row">
    {students.map(s =>
      <StudentItem
        key={s.studentId + s.name}
        student={s}
        removeStudent={() => removeStudent(s.studentId)}
        initStudent={initStudent}
      />
    )}
  </div>
);

export default StudentList;
