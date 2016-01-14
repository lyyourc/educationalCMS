import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Divider from 'material-ui/lib/divider';

import * as studentActions from '../actions/students';

const Nav = ({
  studentActions
}) => (
  <div className="col-xs-2 app-nav">
    <List>
      <Link to="/student" onClick={studentActions.getStudents}>
        <ListItem primaryText="学生管理" leftIcon={<ContentInbox />} />
      </Link>
      <Link to="/teacher">
        <ListItem primaryText="教职工管理" leftIcon={<ActionGrade />} />
      </Link>
      <Link to="/class">
        <ListItem primaryText="班级管理" leftIcon={<ActionGrade />} />
      </Link>
      <Link to="/course">
        <ListItem primaryText="课程管理" leftIcon={<ContentSend />} />
      </Link>
      <Link to="/grade">
        <ListItem primaryText="成绩管理" leftIcon={<ContentDrafts />} />
      </Link>
      <Link to="/system">
        <ListItem primaryText="系统管理" leftIcon={<ContentInbox />} />
      </Link>
    </List>
  </div>
);

const mapActionsToProps = dispatch => {
  return {
    studentActions: bindActionCreators(studentActions, dispatch)
  };
};

export default connect(null, mapActionsToProps)(Nav);
