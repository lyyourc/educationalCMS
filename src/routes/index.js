import React from 'react';

import App from '../containers/App';
import Home from '../components/main/';
import Student from '../components/main/student/';
import Teacher from '../components/main/teacher/';
import Class from '../components/main/class/';
import Course from '../components/main/course/';
import Grade from '../components/main/grade/';
import System from '../components/main/system/';

const routes = {
  path: '/',
  component: App,
  indexRoute: {component: Home},
  childRoutes: [
    {path: 'student', component: Student},
    {path: 'teacher', component: Teacher},
    {path: 'class', component: Class},
    {path: 'course', component: Course},
    {path: 'grade', component: Grade},
    {path: 'system', component: System}
  ]
};

export default routes;
