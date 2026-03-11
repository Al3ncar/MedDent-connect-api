import dataAllPerson from "../utils/data-person.js";

export const getAllPersons = () => {
  return dataAllPerson;
};

export const addPerson = (personData) => {
  const newDataAllPerson = {
    id: dataAllPerson.length + 1,
    ...personData,
    msg: msg || null,
  };

  dataAllPerson.push(newDataAllPerson);
  return dataAllPerson;
};
