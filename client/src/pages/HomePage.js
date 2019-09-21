import React from 'react';
import Search from '../components/Search';
import Cart from '../components/Cart';
import Container from '../components/Container';
import { Pricing } from '../components/Pricing';
import { DeliveryDate } from '../components/DeliveryDate';
import { GlobalStyle } from '../styles/GlobalStyle';

export const HomePage = () => {
  return (
    <Container>
      <GlobalStyle />
      <Search />
      <Cart />
      <DeliveryDate />
      <Pricing />
    </Container>
  );
};
