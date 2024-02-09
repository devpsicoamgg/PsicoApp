const { Psychologist } = require("../../db");

const postPsychoDB = async (
  firstName,
  secondName,
  firstSurName,
  secondSurName,
  kindDoc,
  numberDoc,
  profesionalCard,
  nataleDate,
  email,
  phoneNumber,
) => {
  return await Psychologist.create({
    firstName,
    secondName,
    firstSurName,
    secondSurName,
    kindDoc,
    numberDoc,
    profesionalCard,
    nataleDate,
    email,
    phoneNumber,
  });


};

module.exports = { postPsychoDB };
