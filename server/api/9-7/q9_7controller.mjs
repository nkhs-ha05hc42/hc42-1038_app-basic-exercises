import { examModel } from "./q9_7model.mjs";

const getAllExams = async (req, res) => {
  const result = await examModel.selectAllExams();
  if (!result) {
    return res.send(JSON.stringify({ status: "error" }));
  }
  res.send(JSON.stringify({ status: "success", list: result }));
};

const getExamById = async (req, res) => {
  const { id } = req.params; 
  const result = await examModel.selectExamById(id);
  
  res.send(JSON.stringify({ status: "success", data: result }));
};

const createExam = async (req, res) => {
  const { user_id, year, month, day, name, score } = req.body;
  const result = await examModel.insertExam(user_id, year, month, day, name, score);
  res.status(201).send(JSON.stringify({ status: "success", data: result }));
};

const updateExam = async (req, res) => {
  const { id } = req.params;
  const { user_id, year, month, day, name, score } = req.body;

  const result = await examModel.updateExam(id, user_id, year, month, day, name, score);

  res.send(JSON.stringify({ status: "success", data: result }));
};




export const examsController = {
  getAllExams,
  getExamById,
  createExam,
  updateExam,
};
