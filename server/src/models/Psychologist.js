const { DataTypes } = require("sequelize");

const PsychologistModel = (sequelize) => {
  const Psychologist = sequelize.define(
    "Psychologist",
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
      profesionalCard: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      nataleDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        defaultValue: false,
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
    },
    { timestamps: true }
  );

  return Psychologist;
};

module.exports = PsychologistModel;
