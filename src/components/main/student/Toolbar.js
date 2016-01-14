import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

const StudentToolbar = ({
  showDialog
}) => (
  <Toolbar>
    <ToolbarGroup firstChild={true} float="left">
      <RaisedButton label="新增学生" primary={true} onClick={showDialog}/>
    </ToolbarGroup>
    <ToolbarGroup float="right">
      <ToolbarSeparator />
    </ToolbarGroup>
  </Toolbar>
);

export default StudentToolbar;
