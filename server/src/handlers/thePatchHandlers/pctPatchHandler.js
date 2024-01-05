const patchPatientHandler = (req, res) => {
  res.status(200).send("Modificar datos del paciente");
}


module.exports = { patchPatientHandler }