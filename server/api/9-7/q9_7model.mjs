import { query } from "../../db/manager.mjs";

const selectAllExams = async () => {
  const results = await query(`
    SELECT * FROM exams;
  `);
  return results.rows;
};

const selectExamById = async (id) => {
  const results = await query(`
    SELECT * FROM exams WHERE id = $1;
  `, [id]); 
  return results.rows[0]; 
};

const insertExam = async (user_id, year, month, day, name, score) => {
  const result = await query(
    `INSERT INTO exams (user_id, year, month, day, name, score) 
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [user_id, year, month, day, name, score]
  );
  return result.rows[0]; 
};

const updateExam = async (id, user_id, year, month, day, name, score) => {
  const result = await query(
    `UPDATE exams 
     SET user_id = $1, year = $2, month = $3, day = $4, name = $5, score = $6
     WHERE id = $7 
     RETURNING *;`,
    [user_id, year, month, day, name, score, id]
  );
  return result.rows[0]; 
};

export const examModel = {
  selectAllExams,
  selectExamById,
  insertExam,
  updateExam,
};
