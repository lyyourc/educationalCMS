import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../../actions/students';

import StudentToolbar from './Toolbar';
import StudentList from './StudentList';
import InfoDialog from './InfoDialog';

const Student = ({
  students,
  actions
}) => {
  let dialog;

  return (
    <div>
      <StudentToolbar
        className="col-xs-12"
        showDialog={() => {
          dialog.handleOpen();
          dialog.setState({
            ...dialog.props,
            isAdd: true
          });
        }}
      />
      <StudentList
        students={students}
        removeStudent={actions.removeStudent}
        initStudent={student => {
          dialog.handleOpen();
          dialog.setState({
            ...dialog.props,
            student
          });
        }}
      />
      <InfoDialog
        ref={node => dialog = node}
        addStudent={actions.addStudent}
        updateStudent={actions.updateStudent}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
