
require("dotenv").config();
const { Sequelize } = require("sequelize");
const ClinicalHistoryModel = require("./models/ClinicalHistory");
const PatientModel = require("./models/Patient");
const TrackingSessionModel = require("./models/TrackingSession");
const PsychologistModel = require("./models/Psychologist");


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);


PatientModel(sequelize);
ClinicalHistoryModel(sequelize);
TrackingSessionModel(sequelize);
PsychologistModel(sequelize)

const { Patient, ClinicalHistory, TrackingSession, Psychologist } = sequelize.models



Psychologist.hasMany(Patient); 
Patient.hasMany(ClinicalHistory, { foreignKey: "PatientId" }); // 1 pcte puede tener varias hc
ClinicalHistory.hasMany(TrackingSession); //HC puede tener varias sesiones de seguimiento
TrackingSession.belongsTo(Patient); // una sesión seguimiento es de un pcte
Patient.hasMany(TrackingSession, { foreignKey: "PatientId" }); // 1 pcte puede tener varios seguimeintos
ClinicalHistory.belongsTo(Patient); // 1 hc pertenece a un pcte
TrackingSession.belongsTo(ClinicalHistory, { foreignKey: 'ClinicalHistoryId' }); // 1 seg a 1 hc. 


module.exports = {
  ...sequelize.models,
  psyConn: sequelize,
};
