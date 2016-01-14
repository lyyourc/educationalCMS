import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

import {getFormValues, setFormValus} from '../../../helpers/';

export default class InfoDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  ComponentDidMount() {
    setFormValus(this.form, this.props.student);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  submit = form => {
    const {addStudent} = this.props;

    addStudent(getFormValues(this.form));
  };

  render() {
    const {addStudent} = this.props;
    const that = this;

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => {
          addStudent(getFormValues(this.form))
        }}
      />,
    ];

   return (
     <div>
       <Dialog
         title="学生信息详情"
         actions={actions}
         modal={true}
         open={this.state.open}
         onRequestClose={this.handleClose}
       >
         <form ref={node => that.form = node}>
           <TextField hintText="id" name="id" style={{display: 'none'}}/>
           <TextField hintText="姓名" name="name"/>
           <TextField hintText="学号" name="studentId"/>
           <TextField hintText="性别" name="gender"/>
           <TextField hintText="生日" name="birthday"/>
           <TextField hintText="学院" name="department"/>
           <TextField hintText="专业" name="major"/>
         </form>
       </Dialog>
     </div>
   );
 }
}

// const InfoDialog = ({
//   isShowDialog,
//   hideDialog,
//   addStudent,
//   student
// }) => {
//   let form;
//
//   const actions = [
//     <FlatButton
//       label="Cancel"
//       secondary={true}
//       onClick={hideDialog} />,
//     <FlatButton
//       label="Submit"
//       primary={true}
//       keyboardFocused={true}
//       onClick={() => {
//         addStudent(getFormValues(form));
//         hideDialog();
//       }} />
//   ];
//
//   return (
//     <div>
//       <Dialog
//         title="学生信息详情"
//         actions={actions}
//         modal={true}
//         open={isShowDialog}
//         onRequestClose={hideDialog}
//       >
//         <form ref={node => form = node}>
//           <TextField hintText="id" name="id" hidden/>
//           <TextField hintText="姓名" name="name"/>
//           <TextField hintText="学号" name="studentId"/>
//           <TextField hintText="性别" name="gender"/>
//           <TextField hintText="生日" name="birthday"/>
//           <TextField hintText="学院" name="department"/>
//           <TextField hintText="专业" name="major"/>
//         </form>
//       </Dialog>
//     </div>
//   );
// };
//
// export default InfoDialog;
