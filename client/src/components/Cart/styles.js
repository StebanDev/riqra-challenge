import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 360px;
  height: 480px;
  left: 120px;
  top: 128px;

  background: #ffffff;
  border-radius: 4px;
  overflow: auto;
`;

export const Icon = styled.div`
  position: absolute;
  width: 64px;
  height: 64px;
  left: 149px;
  top: 160px;
`;

export const Title = styled.h4`
  position: absolute;
  width: 195px;
  height: 32px;
  left: 88px;
  top: 232px;

  /* h4/semibold */

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 32px;
  /* identical to box height, or 152% */

  text-align: center;

  color: #333333;
`;

export const Subtitle = styled.h5`
  position: absolute;
  width: 227px;
  height: 48px;
  left: 67px;
  top: 272px;

  /* h5Regular */

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;

  color: #333333;
`;
