// CREATE
const CREATE_GUIDANCE_SESSION = `
  INSERT INTO guidance_sessions (
    case_record_id,
    staff_id,
    session_date,
    session_time,
    session_type,
    concern,
    discussion_summary,
    intervention,
    recommendation,
    follow_up_date,
    status
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

// READ - Get all guidance sessions
const FIND_ALL_GUIDANCE_SESSIONS = `
  SELECT
    gs.id AS session_id,
    gs.case_record_id,
    gs.staff_id,
    gs.session_date,
    gs.session_time,
    gs.session_type,
    gs.concern,
    gs.discussion_summary,
    gs.intervention,
    gs.recommendation,
    gs.follow_up_date,
    gs.status,
    gs.created_at,
    gs.updated_at
  FROM guidance_sessions AS gs
  ORDER BY
    gs.session_date DESC,
    gs.session_time DESC
`;

// READ - Get guidance session by ID
const FIND_GUIDANCE_SESSION_BY_ID = `
  SELECT
    gs.id AS session_id,
    gs.case_record_id,
    gs.staff_id,
    gs.session_date,
    gs.session_time,
    gs.session_type,
    gs.concern,
    gs.discussion_summary,
    gs.intervention,
    gs.recommendation,
    gs.follow_up_date,
    gs.status,
    gs.created_at,
    gs.updated_at
  FROM guidance_sessions AS gs
  WHERE gs.id = ?
`;

// READ - Get guidance sessions by case record ID
const FIND_GUIDANCE_SESSIONS_BY_CASE_RECORD_ID = `
  SELECT
    gs.id AS session_id,
    gs.case_record_id,
    gs.staff_id,
    gs.session_date,
    gs.session_time,
    gs.session_type,
    gs.concern,
    gs.discussion_summary,
    gs.intervention,
    gs.recommendation,
    gs.follow_up_date,
    gs.status,
    gs.created_at,
    gs.updated_at
  FROM guidance_sessions AS gs
  WHERE gs.case_record_id = ?
  ORDER BY
    gs.session_date DESC,
    gs.session_time DESC
`;

// READ - Get guidance sessions by staff ID
const FIND_GUIDANCE_SESSIONS_BY_STAFF_ID = `
  SELECT
    gs.id AS session_id,
    gs.case_record_id,
    gs.staff_id,
    gs.session_date,
    gs.session_time,
    gs.session_type,
    gs.concern,
    gs.discussion_summary,
    gs.intervention,
    gs.recommendation,
    gs.follow_up_date,
    gs.status,
    gs.created_at,
    gs.updated_at
  FROM guidance_sessions AS gs
  WHERE gs.staff_id = ?
  ORDER BY
    gs.session_date DESC,
    gs.session_time DESC
`;

// READ - Get guidance sessions by status
const FIND_GUIDANCE_SESSIONS_BY_STATUS = `
  SELECT
    gs.id AS session_id,
    gs.case_record_id,
    gs.staff_id,
    gs.session_date,
    gs.session_time,
    gs.session_type,
    gs.concern,
    gs.discussion_summary,
    gs.intervention,
    gs.recommendation,
    gs.follow_up_date,
    gs.status,
    gs.created_at,
    gs.updated_at
  FROM guidance_sessions AS gs
  WHERE gs.status = ?
  ORDER BY
    gs.session_date DESC,
    gs.session_time DESC
`;

// READ - Get guidance sessions by session type
const FIND_GUIDANCE_SESSIONS_BY_TYPE = `
  SELECT
    gs.id AS session_id,
    gs.case_record_id,
    gs.staff_id,
    gs.session_date,
    gs.session_time,
    gs.session_type,
    gs.concern,
    gs.discussion_summary,
    gs.intervention,
    gs.recommendation,
    gs.follow_up_date,
    gs.status,
    gs.created_at,
    gs.updated_at
  FROM guidance_sessions AS gs
  WHERE gs.session_type = ?
  ORDER BY
    gs.session_date DESC,
    gs.session_time DESC
`;

// UPDATE
const UPDATE_GUIDANCE_SESSION = `
  UPDATE guidance_sessions
  SET
    case_record_id = ?,
    staff_id = ?,
    session_date = ?,
    session_time = ?,
    session_type = ?,
    concern = ?,
    discussion_summary = ?,
    intervention = ?,
    recommendation = ?,
    follow_up_date = ?,
    status = ?
  WHERE id = ?
`;

// DELETE
const DELETE_GUIDANCE_SESSION = `
  DELETE FROM guidance_sessions
  WHERE id = ?
`;

module.exports = {
  CREATE_GUIDANCE_SESSION,
  FIND_ALL_GUIDANCE_SESSIONS,
  FIND_GUIDANCE_SESSION_BY_ID,
  FIND_GUIDANCE_SESSIONS_BY_CASE_RECORD_ID,
  FIND_GUIDANCE_SESSIONS_BY_STAFF_ID,
  FIND_GUIDANCE_SESSIONS_BY_STATUS,
  FIND_GUIDANCE_SESSIONS_BY_TYPE,
  UPDATE_GUIDANCE_SESSION,
  DELETE_GUIDANCE_SESSION,
};
