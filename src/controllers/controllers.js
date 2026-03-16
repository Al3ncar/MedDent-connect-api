import {
  addPerson,
  getAllPersons,
  updatePerson,
  deletePerson,
} from "../models/personModel.js";
import { responseAPI } from "../utils/response.js";

export const getHome = (req, res) => {
  res.send("Hello, I'm API MedDnt - Volunteer");
};

export const getRegisters = (req, res) => res.json(getAllPersons());

export const createRegister = async (req, res) => {
  try {
    const updatePeople = addPerson(req.body, res);
    responseAPI(res, 201, updatePeople);
  } catch (e) {
    responseAPI(res, 400, []);
  }
};

export const updateRegister = async (req, res) => {
  try {
    const { id } = req.params;
    const person = updatePerson(id, req.body);
    responseAPI(res, 200, person);
  } catch (e) {
    responseAPI(res, 200, []);
  }
};

export const deleteRegister = async (req, res) => {
  try {
    const { id } = req.params;
    deletePerson(id);
    responseAPI(res, 200, []);
  } catch (e) {
    responseAPI(res, 400, []);
  }
};
