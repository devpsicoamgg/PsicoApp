const {
  postPsychoDB,
} = require("../../controllers/thePostController/postPsychoController");

const createPsychoHandler = async (req, res) => {
  const {
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
  } = req.body;

  try {
    await postPsychoDB(
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
    );
    res
      .status(200)
      .send(
        `El psicologo ${firstName} ${firstSurName}, ha sido creado exitosamente.`
      );
  } catch (error) {
    console.error("Error al crear el psicologo:", error);

    res
      .status(500)
      .send(
        `Error interno al crear el psicólogo. Por favor, inténtalo de nuevo. ${error.message} `
      );
  }
};

module.exports = {
  createPsychoHandler,
};
