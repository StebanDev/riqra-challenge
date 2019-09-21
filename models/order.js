module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'order',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      subtotal: {
        type: DataTypes.FLOAT,
      },
      shipping: {
        type: DataTypes.FLOAT,
      },
      taxes: {
        type: DataTypes.FLOAT,
      },
      total: {
        type: DataTypes.FLOAT,
      },
      deliveryDate: {
        type: DataTypes.DATE,
      },
    },
    {
      freezeTableName: false,
    },
  );

  Order.associate = models => {
    Order.belongsToMany(models.product, {
      through: 'ProductsOrders',
      foreignKey: 'orderId',
    });
  };

  return Order;
};
