import studentData from '../data/studentData';
import studentList from './components/studentList';
import navbar from './components/navbar';
import houseButtonGroup from './components/houseButtonGroup';

import '../styles/main.scss';

const init = () => {
  navbar.loadNavbar();
  houseButtonGroup.createHouseButtonGroup();
  studentList.createStudentList(studentData.getStudents());
};

init();
