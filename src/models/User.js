module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Users', {
      username: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      touchedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
      },
      aNumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: null
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: null
      }
    });
  };
