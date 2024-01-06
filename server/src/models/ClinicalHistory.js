const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ClinicalHistory",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      reasonForConsultation: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      physicalAppearanceAndBehavior: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      orientation: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      intelligence: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      language: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      affect: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      sensorPerception: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      psychomotorActivity: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      attentionDBA: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      memoryDBA: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      attitudeTowardsAssessment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      sexualAbuse: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      suicidalIdeation: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      suicidalPlan: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      suicidalAttempt: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      substanceAbuse: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      sleepCycle: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      affectivityAndSexuality: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      nutrition: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      physicalActivity: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      personalMentalHealthHistory: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      familyMentalHealthHistory: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      educationAndEmployment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      familyRelationships: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      therapistObservations: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      mainDiagnoses: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      secondaryDiagnosesOne: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      secondaryDiagnosesTwo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      secondaryDiagnosesThree: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      diagnosesType: {
        type: DataTypes.ENUM("Impresión diagnostica", "Confirmado nuevo", "Confirmado repetido"),
        allowNull: false,
      },
      additionalNotes: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date_added: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

    },
    { timestamps: true }
  );
};

