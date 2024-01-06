const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "TrackingSession",
    {
    trackingSessionId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      startTime: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      endTime: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      sessionType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sessionNotes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      therapistObservations: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      challengesEncountered: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      goalsAchieved: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      treatmentPlanAdjustments: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      moodRating: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sessionRating: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      additionalNotes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    { timestamps: true }
  );
};

