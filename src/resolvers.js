export default {
  Order: {
    products: (parent, args, context, info) => parent.getProducts(),
  },
  Query: {
    products: (parent, args, { db }, info) => db.product.findAll(),
    productsByName: (parent, { name }, { db }, info) => {
      const sequelize = db.sequelize;
      return name === ''
        ? []
        : db.product.findAll({
            where: {
              name: sequelize.where(
                sequelize.fn('LOWER', sequelize.col('name')),
                'LIKE',
                `${name.toLowerCase()}%`,
              ),
            },
          });
    },
    orders: (parent, args, { db }, info) => db.order.findAll(),
    product: (parent, { id, name }, { db }, info) => {
      const sequelize = db.sequelize;
      return id
        ? db.product.findByPk(id)
        : db.product.findOne({
            where: {
              name: sequelize.where(
                sequelize.fn('LOWER', sequelize.col('name')),
                'LIKE',
                `%${name.toLowerCase()}%`,
              ),
            },
          });
    },
    order: (parent, { id }, { db }, info) => db.order.findByPk(id),
  },
  Mutation: {
    createOrder: async (
      parent,
      { subtotal, shipping, taxes, total, deliveryDate, products },
      { db },
      info,
    ) => {
      const order = await db.order.create({
        subtotal,
        shipping,
        taxes,
        total,
        deliveryDate,
      });
      products.forEach(product => order.addProducts(product.id));

      return order;
    },
  },
};
