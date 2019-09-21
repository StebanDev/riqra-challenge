import React from 'react';
import { Container, Icon, Text, Date } from './styles';
import { TruckIcon } from '../Icons/Truck';
import dayjs from 'dayjs';

export const getDeliveryDate = () => {
  const date = dayjs();
  const day = date.day();
  console.log(day);
  let deliveryDate;
  switch (day) {
    case 5:
      deliveryDate = date.add(3 * 24, 'hour');
      break;
    case 6:
      deliveryDate = date.add(2 * 24, 'hour');
      break;
    default:
      deliveryDate = date.add(1 * 24, 'hour');
  }
  console.log('delivery date', deliveryDate);
  return deliveryDate;
};

export const DeliveryDate = props => {
  const deliveryDate = getDeliveryDate();
  return (
    <Container>
      <Icon children={<TruckIcon />} />
      <Text>
        Buy now and get it by <Date>{deliveryDate.format('MM/DD/YY')}</Date>
      </Text>
    </Container>
  );
};
