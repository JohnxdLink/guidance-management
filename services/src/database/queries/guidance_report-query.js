// CREATE
const CREATE_GUIDANCE_REPORT = `
  INSERT INTO guidance_reports (
    staff_id,
    report_type,
    report_title,
    date_from,
    date_to
  )
  VALUES (?, ?, ?, ?, ?)
`;

// READ - Get all guidance reports
const FIND_ALL_GUIDANCE_REPORTS = `
  SELECT
    gr.id AS report_id,
    gr.staff_id,
    gr.report_type,
    gr.report_title,
    gr.date_from,
    gr.date_to,
    gr.generated_at
  FROM guidance_reports AS gr
  ORDER BY gr.id DESC
`;

// READ - Get guidance report by ID
const FIND_GUIDANCE_REPORT_BY_ID = `
  SELECT
    gr.id AS report_id,
    gr.staff_id,
    gr.report_type,
    gr.report_title,
    gr.date_from,
    gr.date_to,
    gr.generated_at
  FROM guidance_reports AS gr
  WHERE gr.id = ?
`;

// READ - Get guidance reports by staff ID
const FIND_GUIDANCE_REPORTS_BY_STAFF_ID = `
  SELECT
    gr.id AS report_id,
    gr.staff_id,
    gr.report_type,
    gr.report_title,
    gr.date_from,
    gr.date_to,
    gr.generated_at
  FROM guidance_reports AS gr
  WHERE gr.staff_id = ?
  ORDER BY gr.generated_at DESC
`;

// READ - Get guidance reports by report type
const FIND_GUIDANCE_REPORTS_BY_TYPE = `
  SELECT
    gr.id AS report_id,
    gr.staff_id,
    gr.report_type,
    gr.report_title,
    gr.date_from,
    gr.date_to,
    gr.generated_at
  FROM guidance_reports AS gr
  WHERE gr.report_type = ?
  ORDER BY gr.generated_at DESC
`;

// READ - Get guidance reports within date range
const FIND_GUIDANCE_REPORTS_BY_DATE_RANGE = `
  SELECT
    gr.id AS report_id,
    gr.staff_id,
    gr.report_type,
    gr.report_title,
    gr.date_from,
    gr.date_to,
    gr.generated_at
  FROM guidance_reports AS gr
  WHERE gr.date_from >= ?
    AND gr.date_to <= ?
  ORDER BY gr.date_from DESC
`;

// UPDATE
const UPDATE_GUIDANCE_REPORT = `
  UPDATE guidance_reports
  SET
    staff_id = ?,
    report_type = ?,
    report_title = ?,
    date_from = ?,
    date_to = ?
  WHERE id = ?
`;

// DELETE
const DELETE_GUIDANCE_REPORT = `
  DELETE FROM guidance_reports
  WHERE id = ?
`;

module.exports = {
  CREATE_GUIDANCE_REPORT,
  FIND_ALL_GUIDANCE_REPORTS,
  FIND_GUIDANCE_REPORT_BY_ID,
  FIND_GUIDANCE_REPORTS_BY_STAFF_ID,
  FIND_GUIDANCE_REPORTS_BY_TYPE,
  FIND_GUIDANCE_REPORTS_BY_DATE_RANGE,
  UPDATE_GUIDANCE_REPORT,
  DELETE_GUIDANCE_REPORT,
};
