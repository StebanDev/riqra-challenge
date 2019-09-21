import React from 'react';
import { Container, Icon, Title, Subtitle } from './styles';
import { CartIcon } from '../Icons/Cart';
import { Product } from '../Product';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

const GET_SEARCH_VALUE = gql`
  {
    searchValue @client
  }
`;

const GET_PRODUCTS = gql`
  query getProductsByName($name: String!) {
    productsByName(name: $name) {
      id
      name
      photoUrl
      price
    }
  }
`;

const Cart = () => {
  const { data: search } = useQuery(GET_SEARCH_VALUE);
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: { name: search.searchValue },
  });
  const { data: cart } = useQuery(GET_CART_ITEMS);

  if (loading) {
    return (
      <Container>
        <Subtitle>Loading...</Subtitle>
      </Container>
    );
  }
  if (error) {
    return <Subtitle>Error</Subtitle>;
  }
  return (
    <Container>
      {!search.searchValue && !cart.cartItems.length && (
        <>
          <Icon>
            <CartIcon />
          </Icon>
          <Title>Your Cart is empty</Title>
          <Subtitle>Seems like you haven't chosen what to buy...</Subtitle>
        </>
      )}
      {search.searchValue
        ? data.productsByName.map(item => <Product {...item} key={item.id} />)
        : cart.cartItems.map(item => (
            <Product {...item} key={item.id} isInCart={true} />
          ))}
    </Container>
  );
};

export default Cart;
