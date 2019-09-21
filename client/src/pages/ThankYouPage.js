import React from 'react';
import Container from '../components/Container';
import { Title, Message, Anchor, Image, OrderNumber } from './styles';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Link } from '@reach/router';
import SuccessImg from '../assets/success.png';

export const ThankYouPage = props => {
  return (
    <Container>
      <GlobalStyle />
      <Title>Thank You</Title>
      <Message>
        Your Order{' '}
        <OrderNumber>
          P{props.location.state.orderId.padStart(4, '000')}
        </OrderNumber>{' '}
        has been registered
      </Message>
      <Link to="/">
        <Anchor>Continue Shopping</Anchor>
      </Link>
      <Image src={SuccessImg} />
    </Container>
  );
};
