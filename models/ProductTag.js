const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      validate: {
        isInt: true
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
