const { Patient } = require("../../db");

const postPatientDB = async (
  firstName,
  secondName,
  firstSurName,
  secondSurName,
  kindDoc,
  numberDoc,
  nataleDate,
  maritalStatus,
  disability,
  gender,
  occupation,
  email,
  phoneNumber,
  date
) => {
  return await Patient.create({
    firstName,
    secondName,
    firstSurName,
    secondSurName,
    kindDoc,
    numberDoc,
    nataleDate,
    maritalStatus,
    disability,
    gender,
    occupation,
    email,
    phoneNumber,
    date,
  });


};

module.exports = { postPatientDB };
