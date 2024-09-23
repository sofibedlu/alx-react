import { Seq } from 'immutable';

// Helper function to capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Main function
function printBestStudents(students) {
  const studentsSeq = Seq(students);
  const filteredStudents = studentsSeq.filter(student => student.score >= 70);
  const capitalizedStudents = filteredStudents.map(student => ({
    score: student.score,
    firstName: capitalize(student.firstName),
    lastName: capitalize(student.lastName),
  }));

  console.log(capitalizedStudents.toObject());
}

export default printBestStudents;