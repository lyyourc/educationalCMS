import * as actionTypes from '../constants/studentActions';

const student = (
  state = {},
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_STUDENT:
      return action.student;

    case actionTypes.UPDATE_STUDENT:
      return {}

    default:
      return state;
  }
};

const students = (
  state = [],
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_STUDENT:
      return [
        ...state,
        student({}, action)
      ];

    case actionTypes.REMOVE_STUDENT:
      return state.filter(s => s.studentId !== action.studentId);

    case actionTypes.GET_STUDENTS:
      return action.students;

    case actionTypes.UPDATE_STUDENT:

    default:
      return state;
  }
};

export default students;
