// 1. Import Database Connection and Query Definitions
const db = require("../config/database.js");
const {
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
} = require("../database/queries/case-records-query.js");

// ==========================================
// CREATE OPERATION
// ==========================================
const createCaseRecord = async (data) => {
  // Input Validation
  if (!data.student_id || !data.concern_id || !data.opened_by || !data.opened_date || !data.title) {
    throw new Error("Required fields are missing.");
  }

  // Execute SQL query with parameter binding
  const [result] = await db.query(CREATE_CASE_RECORD, [
    data.student_id,
    data.concern_id,
    data.opened_by,
    data.opened_date,
    data.title,
    data.description,
    data.priority,
    data.status,
    data.closed_date,
    data.closing_remarks,
  ]);

  return result;
};

// ==========================================
// READ OPERATIONS
// ==========================================

// Get All Records
const findAllCaseRecords = async () => {
  const [rows] = await db.query(FIND_ALL_CASE_RECORDS);
  return rows;
};

// Get Single Record by Primary Key (ID)
const findCaseRecordById = async (id) => {
  if (!id) {
    throw new Error("Case record ID is required.");
  }

  const [rows] = await db.query(FIND_CASE_RECORD_BY_ID, [id]);

  return rows[0] || null;
};

// Get Case Records by Student ID
const findCaseRecordsByStudentId = async (studentId) => {
  if (!studentId) {
    throw new Error("Student ID is required.");
  }

  const [rows] = await db.query(FIND_CASE_RECORDS_BY_STUDENT_ID, [studentId]);

  return rows;
};

// Get Case Records by Concern ID
const findCaseRecordsByConcernId = async (concernId) => {
  if (!concernId) {
    throw new Error("Concern ID is required.");
  }

  const [rows] = await db.query(FIND_CASE_RECORDS_BY_CONCERN_ID, [concernId]);

  return rows;
};

// Get Case Records by Staff ID
const findCaseRecordsByOpenedBy = async (openedBy) => {
  if (!openedBy) {
    throw new Error("Staff ID is required.");
  }

  const [rows] = await db.query(FIND_CASE_RECORDS_BY_OPENED_BY, [openedBy]);

  return rows;
};

// Get Case Records by Status
const findCaseRecordsByStatus = async (status) => {
  if (!status) {
    throw new Error("Status is required.");
  }

  const [rows] = await db.query(FIND_CASE_RECORDS_BY_STATUS, [status]);

  return rows;
};

// Get Case Records by Priority
const findCaseRecordsByPriority = async (priority) => {
  if (!priority) {
    throw new Error("Priority is required.");
  }

  const [rows] = await db.query(FIND_CASE_RECORDS_BY_PRIORITY, [priority]);

  return rows;
};

// Get Case Record by Student, Concern, and Opened Date
const findCaseRecord = async (studentId, concernId, openedDate) => {
  if (!studentId || !concernId || !openedDate) {
    throw new Error("Student ID, concern ID, and opened date are required.");
  }

  const [rows] = await db.query(FIND_CASE_RECORD, [studentId, concernId, openedDate]);

  return rows[0] || null;
};

// ==========================================
// UPDATE OPERATION
// ==========================================
const updateCaseRecord = async (id, data) => {
  if (!id) {
    throw new Error("Case record ID is required.");
  }

  const [result] = await db.query(UPDATE_CASE_RECORD, [
    data.student_id,
    data.concern_id,
    data.opened_by,
    data.opened_date,
    data.title,
    data.description,
    data.priority,
    data.status,
    data.closed_date,
    data.closing_remarks,
    id,
  ]);

  return result;
};

// ==========================================
// DELETE OPERATION
// ==========================================
const deleteCaseRecord = async (id) => {
  if (!id) {
    throw new Error("Case record ID is required.");
  }

  const [result] = await db.query(DELETE_CASE_RECORD, [id]);

  return result;
};

// ==========================================
// EXPORT
// ==========================================
module.exports = {
  createCaseRecord,
  findAllCaseRecords,
  findCaseRecordById,
  findCaseRecordsByStudentId,
  findCaseRecordsByConcernId,
  findCaseRecordsByOpenedBy,
  findCaseRecordsByStatus,
  findCaseRecordsByPriority,
  findCaseRecord,
  updateCaseRecord,
  deleteCaseRecord,
};
