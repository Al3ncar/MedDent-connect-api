import dataAllPerson from "./data-person.js";

const rgxValid = (rgxCode, value) => {
  const regex = rgxCode;
  return regex.test(value);
};

const regexType = {
  rgxName: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[' ][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
  rgxEmail: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  rgxCell: /^(?:\+55\s?)?(?:\(?\d{2}\)?\s?)?(?:9?\d{4})-?\d{4}$/,
  rgxMsg: /^.{1,500}$/,
};

const allRegexValid = (personData) => {
  const { name, email, cellPhone, msg } = personData;

  return (
    rgxValid(regexType["rgxName"], name) &&
    rgxValid(regexType["rgxEmail"], email) &&
    rgxValid(regexType["rgxCell"], cellPhone) &&
    rgxValid(regexType["rgxMsg"], msg)
  );
};

export const validEqualData = (value, field) => {
  return dataAllPerson.some((person) => person[field] === value);
};

const validDuplicateData = (dataSendPerson) => {
  const { name, email, cellPhone } = dataSendPerson;
  const validData =
    validEqualData(name, "name") &&
    validEqualData(email, "email") &&
    validEqualData(cellPhone, "cellPhone");
  return validData;
};

export const allValid = (personData, dataSendPerson) => {
  return allRegexValid(personData) && !validDuplicateData(dataSendPerson);
};