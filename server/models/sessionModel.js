const { pool } = require('./setup');

/**
 * @returns Database session object.
 */
async function createSession(username, expires) {
  const result = await pool.query(`
    INSERT INTO sessions(username, expires)
    VALUES ($1, $2)
    RETURNING *;
  `, [username, expires]);

  return result.rows[0];
}

/**
 * @returns Database session object or undefined if no session exists.
 */
async function readSession(sid) {
  const result = await pool.query(`
    SELECT id, username, expires
    FROM sessions
    WHERE id = $1;
  `, [sid]);

  return result.rows[0];
}

/**
 * @returns Database session object or undefined if no session exists.
 */
async function updateSession(sid, expires) {
  const result = await pool.query(`
    UPDATE sessions
    SET expires = $2
    WHERE id = $1
    RETURNING *;
  `, [sid, expires]);

  return result.rows[0];
}

/**
 * @returns Boolean whether the session was successfully deleted.
 */
async function deleteSession(sid) {
  const result = await pool.query(`
      DELETE FROM sessions
      WHERE id = $1;
    `, [sid]);

  return result.rowCount > 0;
}

module.exports = { createSession, updateSession, readSession, deleteSession };
