/* exported getStudentNames */
function getStudentNames(students) {
  var studentNames = [];
  for (i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
