// CREATE
const CREATE_CASE_RECORD = `
  INSERT INTO case_records (
    student_id,
    concern_id,
    opened_by,
    opened_date,
    title,
    description,
    priority,
    status,
    closed_date,
    closing_remarks
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

// READ - Get all case records
const FIND_ALL_CASE_RECORDS = `
  SELECT
    cr.id AS case_record_id,
    cr.student_id,
    cr.concern_id,
    cr.opened_by,
    cr.opened_date,
    cr.title,
    cr.description,
    cr.priority,
    cr.status,
    cr.closed_date,
    cr.closing_remarks,
    cr.created_at,
    cr.updated_at
  FROM case_records AS cr
  ORDER BY cr.id DESC
`;

// READ - Get case record by ID
const FIND_CASE_RECORD_BY_ID = `
  SELECT
    cr.id AS case_record_id,
    cr.student_id,
    cr.concern_id,
    cr.opened_by,
    cr.opened_date,
    cr.title,
    cr.description,
    cr.priority,
    cr.status,
    cr.closed_date,
    cr.closing_remarks,
    cr.created_at,
    cr.updated_at
  FROM case_records AS cr
  WHERE cr.id = ?
`;

// READ - Get case records by student ID
const FIND_CASE_RECORDS_BY_STUDENT_ID = `
  SELECT
    cr.id AS case_record_id,
    cr.student_id,
    cr.concern_id,
    cr.opened_by,
    cr.opened_date,
    cr.title,
    cr.description,
    cr.priority,
    cr.status,
    cr.closed_date,
    cr.closing_remarks,
    cr.created_at,
    cr.updated_at
  FROM case_records AS cr
  WHERE cr.student_id = ?
  ORDER BY
    cr.opened_date DESC,
    cr.id DESC
`;

// READ - Get case records by concern ID
const FIND_CASE_RECORDS_BY_CONCERN_ID = `
  SELECT
    cr.id AS case_record_id,
    cr.student_id,
    cr.concern_id,
    cr.opened_by,
    cr.opened_date,
    cr.title,
    cr.description,
    cr.priority,
    cr.status,
    cr.closed_date,
    cr.closing_remarks,
    cr.created_at,
    cr.updated_at
  FROM case_records AS cr
  WHERE cr.concern_id = ?
  ORDER BY
    cr.opened_date DESC,
    cr.id DESC
`;

// READ - Get case records by staff ID
const FIND_CASE_RECORDS_BY_OPENED_BY = `
  SELECT
    cr.id AS case_record_id,
    cr.student_id,
    cr.concern_id,
    cr.opened_by,
    cr.opened_date,
    cr.title,
    cr.description,
    cr.priority,
    cr.status,
    cr.closed_date,
    cr.closing_remarks,
    cr.created_at,
    cr.updated_at
  FROM case_records AS cr
  WHERE cr.opened_by = ?
  ORDER BY
    cr.opened_date DESC,
    cr.id DESC
`;

// READ - Get case records by status
const FIND_CASE_RECORDS_BY_STATUS = `
  SELECT
    cr.id AS case_record_id,
    cr.student_id,
    cr.concern_id,
    cr.opened_by,
    cr.opened_date,
    cr.title,
    cr.description,
    cr.priority,
    cr.status,
    cr.closed_date,
    cr.closing_remarks,
    cr.created_at,
    cr.updated_at
  FROM case_records AS cr
  WHERE cr.status = ?
  ORDER BY
    cr.opened_date DESC,
    cr.id DESC
`;

// READ - Get case records by priority
const FIND_CASE_RECORDS_BY_PRIORITY = `
  SELECT
    cr.id AS case_record_id,
    cr.student_id,
    cr.concern_id,
    cr.opened_by,
    cr.opened_date,
    cr.title,
    cr.description,
    cr.priority,
    cr.status,
    cr.closed_date,
    cr.closing_remarks,
    cr.created_at,
    cr.updated_at
  FROM case_records AS cr
  WHERE cr.priority = ?
  ORDER BY
    cr.opened_date DESC,
    cr.id DESC
`;

// READ - Get case record by student, concern, and opened date
const FIND_CASE_RECORD = `
  SELECT
    cr.id AS case_record_id,
    cr.student_id,
    cr.concern_id,
    cr.opened_by,
    cr.opened_date,
    cr.title,
    cr.description,
    cr.priority,
    cr.status,
    cr.closed_date,
    cr.closing_remarks,
    cr.created_at,
    cr.updated_at
  FROM case_records AS cr
  WHERE cr.student_id = ?
    AND cr.concern_id = ?
    AND cr.opened_date = ?
`;

// UPDATE
const UPDATE_CASE_RECORD = `
  UPDATE case_records
  SET
    student_id = ?,
    concern_id = ?,
    opened_by = ?,
    opened_date = ?,
    title = ?,
    description = ?,
    priority = ?,
    status = ?,
    closed_date = ?,
    closing_remarks = ?
  WHERE id = ?
`;

// DELETE
const DELETE_CASE_RECORD = `
  DELETE FROM case_records
  WHERE id = ?
`;

module.exports = {
  CREATE_CASE_RECORD,
  FIND_ALL_CASE_RECORDS,
  FIND_CASE_RECORD_BY_ID,
  FIND_CASE_RECORDS_BY_STUDENT_ID,
  FIND_CASE_RECORDS_BY_CONCERN_ID,
  FIND_CASE_RECORDS_BY_OPENED_BY,
  FIND_CASE_RECORDS_BY_STATUS,
  FIND_CASE_RECORDS_BY_PRIORITY,
  FIND_CASE_RECORD,
  UPDATE_CASE_RECORD,
  DELETE_CASE_RECORD,
};
