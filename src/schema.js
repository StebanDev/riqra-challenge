export default `
  type Product {
    id: ID
    name: String
    photoUrl: String
    price: Float
    stock: Int
  }

  type Order {
    id: ID
    subtotal: Float
    total: Float
    taxes: Float
    shipping: Float
    deliveryDate: String
    products: [Product]
  }

  type Query {
    products: [Product]
    productsByName(name: String!) : [Product]
    product(id: ID, name: String): Product
    order(id: ID!): Order
    orders: [Order!]!
  }

  input ProductId {
    id: Int
  }

  type Mutation {
    createOrder(
      subtotal: Float, 
      shipping: Float, 
      taxes: Float, 
      total: Float, 
      deliveryDate: String
      products: [ProductId]
    ): Order!
  }
`;
