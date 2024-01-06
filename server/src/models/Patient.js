const { DataTypes } = require("sequelize");

const PatientModel = (sequelize) => {
  const Patient = sequelize.define(
    "Patient",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      secondName: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      firstSurName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      secondSurName: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      kindDoc: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      numberDoc: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      nataleDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      
      maritalStatus: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      disability: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      occupation: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      
      phoneNumber: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
    },
    { timestamps: true }
  );

  return Patient;
};

module.exports = PatientModel;
