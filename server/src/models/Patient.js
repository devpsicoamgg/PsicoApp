const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Patient",
    {
      Id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      documentTypeId: {
        type: DataTypes.INTEGER,
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
      
      maritalStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      disability: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      genderId: {
        type: DataTypes.INTEGER,
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
};

