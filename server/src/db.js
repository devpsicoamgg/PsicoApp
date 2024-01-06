
require("dotenv").config();
const { Sequelize } = require("sequelize");
const ClinicalHistoryModel = require("./models/ClinicalHistory");
const PatientModel = require("./models/Patient");
const TrackingSessionModel = require("./models/TrackingSession");


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

const { Patient, ClinicalHistory, TrackingSession } = sequelize.models



Patient.hasMany(ClinicalHistory);
ClinicalHistory.belongsTo(Patient);
Patient.hasMany(TrackingSession);
TrackingSession.belongsTo(Patient);
TrackingSession.belongsTo(ClinicalHistory);


module.exports = {
  psyConn: sequelize,
};
