// CREATE
const CREATE_GUIDANCE_CONCERN = `
  INSERT INTO guidance_concerns (
    name,
    description,
    is_active
  )
  VALUES (?, ?, ?)
`;

// READ - Get all guidance concerns
const FIND_ALL_GUIDANCE_CONCERNS = `
  SELECT
    gc.id AS concern_id,
    gc.name,
    gc.description,
    gc.is_active,
    gc.created_at,
    gc.updated_at
  FROM guidance_concerns AS gc
  ORDER BY gc.id DESC
`;

// READ - Get guidance concern by ID
const FIND_GUIDANCE_CONCERN_BY_ID = `
  SELECT
    gc.id AS concern_id,
    gc.name,
    gc.description,
    gc.is_active,
    gc.created_at,
    gc.updated_at
  FROM guidance_concerns AS gc
  WHERE gc.id = ?
`;

// READ - Get guidance concern by name
const FIND_GUIDANCE_CONCERN_BY_NAME = `
  SELECT
    gc.id AS concern_id,
    gc.name,
    gc.description,
    gc.is_active,
    gc.created_at,
    gc.updated_at
  FROM guidance_concerns AS gc
  WHERE gc.name = ?
`;

// READ - Get active guidance concerns
const FIND_ACTIVE_GUIDANCE_CONCERNS = `
  SELECT
    gc.id AS concern_id,
    gc.name,
    gc.description,
    gc.is_active,
    gc.created_at,
    gc.updated_at
  FROM guidance_concerns AS gc
  WHERE gc.is_active = 1
  ORDER BY gc.name ASC
`;

// READ - Get inactive guidance concerns
const FIND_INACTIVE_GUIDANCE_CONCERNS = `
  SELECT
    gc.id AS concern_id,
    gc.name,
    gc.description,
    gc.is_active,
    gc.created_at,
    gc.updated_at
  FROM guidance_concerns AS gc
  WHERE gc.is_active = 0
  ORDER BY gc.name ASC
`;

// UPDATE
const UPDATE_GUIDANCE_CONCERN = `
  UPDATE guidance_concerns
  SET
    name = ?,
    description = ?,
    is_active = ?
  WHERE id = ?
`;

// DELETE
const DELETE_GUIDANCE_CONCERN = `
  DELETE FROM guidance_concerns
  WHERE id = ?
`;

module.exports = {
  CREATE_GUIDANCE_CONCERN,
  FIND_ALL_GUIDANCE_CONCERNS,
  FIND_GUIDANCE_CONCERN_BY_ID,
  FIND_GUIDANCE_CONCERN_BY_NAME,
  FIND_ACTIVE_GUIDANCE_CONCERNS,
  FIND_INACTIVE_GUIDANCE_CONCERNS,
  UPDATE_GUIDANCE_CONCERN,
  DELETE_GUIDANCE_CONCERN,
};
