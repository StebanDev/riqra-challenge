import React from 'react';
import {
  Container,
  Button,
  PricingContainer,
  PriceLineContainer,
  Label,
  Value,
} from './styles';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { navigate } from '@reach/router';
import { getDeliveryDate } from '../DeliveryDate';

const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

const CREATE_ORDER = gql`
  mutation createOrder(
    $subtotal: Float
    $taxes: Float
    $shipping: Float
    $total: Float
    $deliveryDate: String
    $products: [ProductId]
  ) {
    createOrder(
      subtotal: $subtotal
      taxes: $taxes
      shipping: $shipping
      total: $total
      deliveryDate: $deliveryDate
      products: $products
    ) {
      id
      total
    }
  }
`;

const formatPrice = value => value.toFixed(2);

const PriceLine = props => {
  const { total, highlighted, boldLabel, value } = props;
  return (
    <PriceLineContainer total={total} highlighted={highlighted}>
      <Label total={total} bold={boldLabel}>
        {props.label}
      </Label>
      <Value total={total}>${formatPrice(value)}</Value>
    </PriceLineContainer>
  );
};

const PricingDetail = props => {
  const { subtotal, shipping, taxes, total } = props;

  return (
    <PricingContainer>
      <PriceLine label="Products" value={subtotal} />
      <PriceLine label="Shipping Cost" value={shipping} highlighted boldLabel />
      <PriceLine label="Taxes" value={taxes} />
      <PriceLine label="Total" value={total} total />
    </PricingContainer>
  );
};

export const Pricing = () => {
  const { data: items } = useQuery(GET_CART_ITEMS);
  const subtotal =
    items.cartItems.length &&
    items.cartItems.reduce(
      (sum, { quantity, price }) => sum + quantity * price,
      0,
    );
  const taxes = subtotal * 0.18;
  const shipping = subtotal * 0.1;
  const total = subtotal + shipping;
  const pricing = {
    subtotal,
    taxes,
    shipping,
    total,
  };

  const productIds = items.cartItems.map(({ id }) => ({ id: parseInt(id) }));

  const deliveryDate = getDeliveryDate().toISOString();

  const [mutate] = useMutation(CREATE_ORDER, {
    variables: {
      subtotal,
      taxes,
      shipping,
      total,
      deliveryDate,
      products: productIds,
    },
  });

  const completeOrder = () => {
    if (total >= 50) {
      mutate().then(({ data }) => {
        navigate('/thankyou', { state: { orderId: data.createOrder.id } });
      });
    }
  };

  return (
    <Container>
      <PricingDetail {...pricing} />
      <Button total={total} onClick={completeOrder}>
        COMPLETE ORDER
      </Button>
    </Container>
  );
};
