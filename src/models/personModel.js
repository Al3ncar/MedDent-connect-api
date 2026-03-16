import dataAllPerson from "../utils/data-person.js";
import { responseAPI } from "../utils/response.js";
import { allValid, validEqualData } from "../utils/valid-data-method.js";

export const getAllPersons = () => {
  return dataAllPerson;
};

export const addPerson = (personData, res) => {
  const { name, email, cellPhone, msg } = personData;
  const dataSendPerson = {
    id: dataAllPerson.length + 1,
    name,
    email,
    cellPhone,
    msg: msg || null,
  };

  allValid(personData, dataSendPerson)
    ? dataAllPerson.push(dataSendPerson)
    : responseAPI(res, 400, []);

  return dataAllPerson;
};

export const updatePerson = (id, newData) => {
  const idUpdate = Number(id);
  const index = dataAllPerson.findIndex((i) => i.id === idUpdate);

  if (index === -1) return [];

  dataAllPerson[index] = {
    ...dataAllPerson[index],
    ...newData,
  };
  return dataAllPerson[index];
};

export const deletePerson = (id) => {
  const idDelete = Number(id);

  validEqualData(idDelete, "id")
    ? dataAllPerson.splice(idDelete - 1, 1)
    : responseAPI(res, 400, []);

  return dataAllPerson;
};
