import { getAllPersons, addPerson } from "../models/personModel.js";

export const getHome = (req, res) => {
  res.send("Hello, I'm API MedDnt - Volunteer");
};

export const getRegisters = (req, res) => {
  const person = getAllPersons();
  res.json(person);
};

export const createRegister = (req, res) => {
  const { name, email, cellPhone, msg } = req.body;
  const updatePeople = addPerson({ name, email, cellPhone, msg });
  res.status(201).json(updatePeople);
};
