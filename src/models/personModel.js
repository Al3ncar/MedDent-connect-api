import dataAllPerson from "../utils/data-person.js";
import { responseAPI } from "../utils/response.js";
import { allValid } from "../utils/valid-regex-data.js";

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
    : responseAPI(res, "Ocorreu um erro ao processar a requisiçãos", 400);

  return dataAllPerson;
};
