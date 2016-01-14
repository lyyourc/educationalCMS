import fetch from 'isomorphic-fetch';

import * as actionTypes from '../constants/studentActions';

const fetchStudents = students => {
  return {
    type: actionTypes.GET_STUDENTS,
    students
  };
};

export const getStudents = () => {
  return dispatch => {
    fetch('api/student')
    .then(res => res.json())
    .then(json => {
      dispatch(fetchStudents(json));
    });
  };
};

const doUpdateStudent = student => {
  return {
    type: actionTypes.UPDATE_STUDENT,
    student
  };
};
export const updateStudent = student => {
  return dispatch =>
    fetch(`api/student/${student.studentId}`, {
      method: 'PUT',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json =>
      dispatch(doUpdateStudent(student))
    );
};

const doAddStudent = student => {
  return {
    type: actionTypes.ADD_STUDENT,
    student
  };
};
export const addStudent = student => {
  return dispatch =>
    fetch('api/student', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    })
    .then(res => res.json())
    .then(json =>
      dispatch(doAddStudent(student))
    );
};

const doRemoveStudent = studentId => {
  return {
    type: actionTypes.REMOVE_STUDENT,
    studentId
  };
};
export const removeStudent = studentId => {
  return dispatch =>
    fetch(`api/student/${studentId}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(json =>
      dispatch(doRemoveStudent(studentId))
    );
};
