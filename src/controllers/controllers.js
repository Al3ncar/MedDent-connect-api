import { getAllPersons, addPerson } from "../models/personModel.js";
import { responseAPI } from "../utils/response.js";

export const getHome = (req, res) => {
  res.send("Hello, I'm API MedDnt - Volunteer");
};

export const getRegisters = (req, res) => res.json(getAllPersons());

export const createRegister = async (req, res) => {
  try {
    const updatePeople = addPerson(req.body, res);
    responseAPI(res, "Registro criado com sucesso", 201, updatePeople);
  } catch (e) {
    responseAPI(res, "Ocorreu um erro ao processar a requisição", 400);
  }
}; 
 