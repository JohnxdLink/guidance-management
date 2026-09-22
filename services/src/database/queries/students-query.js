// CREATE
const CREATE_STUDENT = `
  INSERT INTO students (
    grade_section_id,
    account_id,
    lastname,
    firstname,
    middlename,
    contact_no
  )
  VALUES (?, ?, ?, ?, ?, ?)
`;

// READ - Get all students
const FIND_ALL_STUDENTS = `
  SELECT
    s.id AS student_id,
    s.grade_section_id,
    s.account_id,
    s.lastname,
    s.firstname,
    s.middlename,
    s.contact_no,
    s.created_at,
    s.updated_at
  FROM students AS s
  ORDER BY s.id DESC
`;

// READ - Get student by ID
const FIND_STUDENT_BY_ID = `
  SELECT
    s.id AS student_id,
    s.grade_section_id,
    s.account_id,
    s.lastname,
    s.firstname,
    s.middlename,
    s.contact_no,
    s.created_at,
    s.updated_at
  FROM students AS s
  WHERE s.id = ?
`;

// READ - Get students by grade section ID
const FIND_STUDENTS_BY_GRADE_SECTION_ID = `
  SELECT
    s.id AS student_id,
    s.grade_section_id,
    s.account_id,
    s.lastname,
    s.firstname,
    s.middlename,
    s.contact_no,
    s.created_at,
    s.updated_at
  FROM students AS s
  WHERE s.grade_section_id = ?
  ORDER BY
    s.lastname ASC,
    s.firstname ASC
`;

// READ - Get student by account ID
const FIND_STUDENT_BY_ACCOUNT_ID = `
  SELECT
    s.id AS student_id,
    s.grade_section_id,
    s.account_id,
    s.lastname,
    s.firstname,
    s.middlename,
    s.contact_no,
    s.created_at,
    s.updated_at
  FROM students AS s
  WHERE s.account_id = ?
`;

// READ - Find students by last name
const FIND_STUDENTS_BY_LASTNAME = `
  SELECT
    s.id AS student_id,
    s.grade_section_id,
    s.account_id,
    s.lastname,
    s.firstname,
    s.middlename,
    s.contact_no,
    s.created_at,
    s.updated_at
  FROM students AS s
  WHERE s.lastname = ?
  ORDER BY s.firstname ASC
`;

// READ - Find students by name
const FIND_STUDENTS_BY_NAME = `
  SELECT
    s.id AS student_id,
    s.grade_section_id,
    s.account_id,
    s.lastname,
    s.firstname,
    s.middlename,
    s.contact_no,
    s.created_at,
    s.updated_at
  FROM students AS s
  WHERE s.lastname LIKE ?
     OR s.firstname LIKE ?
  ORDER BY
    s.lastname ASC,
    s.firstname ASC
`;

// UPDATE
const UPDATE_STUDENT = `
  UPDATE students
  SET
    grade_section_id = ?,
    account_id = ?,
    lastname = ?,
    firstname = ?,
    middlename = ?,
    contact_no = ?
  WHERE id = ?
`;

// DELETE
const DELETE_STUDENT = `
  DELETE FROM students
  WHERE id = ?
`;

module.exports = {
  CREATE_STUDENT,
  FIND_ALL_STUDENTS,
  FIND_STUDENT_BY_ID,
  FIND_STUDENTS_BY_GRADE_SECTION_ID,
  FIND_STUDENT_BY_ACCOUNT_ID,
  FIND_STUDENTS_BY_LASTNAME,
  FIND_STUDENTS_BY_NAME,
  UPDATE_STUDENT,
  DELETE_STUDENT,
};
