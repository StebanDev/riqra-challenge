module.exports = (sequelize, DataTypes) => {
  const ProductsOrders = sequelize.define(
    'productsorders',
    {
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
    },
    {
      freezeTableName: false,
    },
  );

  ProductsOrders.associate = models => {
    ProductsOrders.belongsTo(models.product, { foreignKey: 'productId' });
    ProductsOrders.belongsTo(models.order, { foreignKey: 'orderId' });
  };

  return ProductsOrders;
};
