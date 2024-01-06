const {
  postPatientDB,
} = require("../../controllers/thePostController/postPatientController");

const createPatientHandler = async (req, res) => {
  const {
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
  } = req.body;

  try {
    await postPatientDB(
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
    );
    res
      .status(200)
      .send(
        `El paciente ${firstName} ${firstSurName} con ${kindDoc} número ${numberDoc}, ha sido creado exitosamente.`
      );
  } catch (error) {
    console.error("Error al crear el paciente:", error);

    res
      .status(500)
      .send(
        `Error interno al crear el paciente. Por favor, inténtalo de nuevo. ${error.message} `
      );
  }
};

module.exports = {
  createPatientHandler,
};
