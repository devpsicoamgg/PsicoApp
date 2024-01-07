const patchPatientHandler = (req, res) => {
  const { patientId } = req.params;
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
  res.status(200).send(`Datos del paciente con ID ${patientId} modificados con éxito.`);
};

module.exports = { patchPatientHandler };
