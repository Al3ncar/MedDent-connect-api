const actionRgx = (regexValid, name) => {
  const regex = regexValid;
  regex.test(name);
};

const validTypes = {
  rgxName: actionRgx(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, name),
};


