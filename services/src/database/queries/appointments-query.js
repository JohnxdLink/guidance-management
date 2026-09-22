// CREATE
const CREATE_APPOINTMENT = `
  INSERT INTO appointments (
    student_id,
    staff_id,
    appointment_date,
    appointment_time,
    purpose,
    status,
    remarks
  )
  VALUES (?, ?, ?, ?, ?, ?, ?)
`;

// READ - Get all appointments
const FIND_ALL_APPOINTMENTS = `
  SELECT
    a.id AS appointment_id,
    a.student_id,
    a.staff_id,
    a.appointment_date,
    a.appointment_time,
    a.purpose,
    a.status,
    a.remarks,
    a.created_at,
    a.updated_at
  FROM appointments AS a
  ORDER BY a.id DESC
`;

// READ - Get appointment by ID
const FIND_APPOINTMENT_BY_ID = `
  SELECT
    a.id AS appointment_id,
    a.student_id,
    a.staff_id,
    a.appointment_date,
    a.appointment_time,
    a.purpose,
    a.status,
    a.remarks,
    a.created_at,
    a.updated_at
  FROM appointments AS a
  WHERE a.id = ?
`;

// READ - Get appointments by student ID
const FIND_APPOINTMENTS_BY_STUDENT_ID = `
  SELECT
    a.id AS appointment_id,
    a.student_id,
    a.staff_id,
    a.appointment_date,
    a.appointment_time,
    a.purpose,
    a.status,
    a.remarks,
    a.created_at,
    a.updated_at
  FROM appointments AS a
  WHERE a.student_id = ?
  ORDER BY
    a.appointment_date DESC,
    a.appointment_time DESC
`;

// READ - Get appointments by staff ID
const FIND_APPOINTMENTS_BY_STAFF_ID = `
  SELECT
    a.id AS appointment_id,
    a.student_id,
    a.staff_id,
    a.appointment_date,
    a.appointment_time,
    a.purpose,
    a.status,
    a.remarks,
    a.created_at,
    a.updated_at
  FROM appointments AS a
  WHERE a.staff_id = ?
  ORDER BY
    a.appointment_date DESC,
    a.appointment_time DESC
`;

// READ - Get appointment by student, staff, date, and time
const FIND_APPOINTMENT = `
  SELECT
    a.id AS appointment_id,
    a.student_id,
    a.staff_id,
    a.appointment_date,
    a.appointment_time,
    a.purpose,
    a.status,
    a.remarks,
    a.created_at,
    a.updated_at
  FROM appointments AS a
  WHERE a.student_id = ?
    AND a.staff_id = ?
    AND a.appointment_date = ?
    AND a.appointment_time = ?
`;

// UPDATE
const UPDATE_APPOINTMENT = `
  UPDATE appointments
  SET
    student_id = ?,
    staff_id = ?,
    appointment_date = ?,
    appointment_time = ?,
    purpose = ?,
    status = ?,
    remarks = ?
  WHERE id = ?
`;

// DELETE
const DELETE_APPOINTMENT = `
  DELETE FROM appointments
  WHERE id = ?
`;

module.exports = {
  CREATE_APPOINTMENT,
  FIND_ALL_APPOINTMENTS,
  FIND_APPOINTMENT_BY_ID,
  FIND_APPOINTMENTS_BY_STUDENT_ID,
  FIND_APPOINTMENTS_BY_STAFF_ID,
  FIND_APPOINTMENT,
  UPDATE_APPOINTMENT,
  DELETE_APPOINTMENT,
};
