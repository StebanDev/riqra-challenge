import React from 'react';
import { Container, Quantity, Button, MinusIcon, PlusIcon } from './styles';
import { Minus } from '../Icons/Minus';
import { Plus } from '../Icons/Plus';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const UPDATE_QUANTITY = gql`
  mutation updateQuantity($productId: ID!, $action: String) {
    updateQuantity(productId: $productId, action: $action) @client
  }
`;

export const Counter = props => {
  const { productId, quantity, counterVisible, setCounterVisible } = props;

  const [mutate] = useMutation(UPDATE_QUANTITY, { variables: { productId } });

  const handleClick = () => {
    setCounterVisible(true);
  };

  const increaseQuantity = () => {
    mutate({ variables: { action: 'plus' } });
  };
  const decreaseQuantity = () => {
    quantity > 1 && mutate({ variables: { action: 'minus' } });
  };

  if (!counterVisible) {
    return <Button onClick={handleClick}>{quantity}</Button>;
  }

  return (
    <Container>
      <MinusIcon children={<Minus />} onClick={decreaseQuantity} />
      <Quantity>{quantity}</Quantity>
      <PlusIcon children={<Plus />} onClick={increaseQuantity} />
    </Container>
  );
};
