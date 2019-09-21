import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 360px;
  height: 224px;
  left: 544px;
  top: 168px;
`;

export const PricingContainer = styled.div`
  position: absolute;
  width: 360px;
  height: 160px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  padding-top: 16px;
`;

export const PriceLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
  /* position: relative; */
  height: 24px;
  margin-bottom: 8px;
  ${props =>
    props.total &&
    css`
      margin-top: 16px;
    `}
  ${props =>
    props.highlighted &&
    css`
      background: #ffe200;
    `}
`;

export const Label = styled.h5`
  /* position: absolute;
  width: 106px;
  left: 0px;
  top: 0%;
  bottom: 0%; */

  /* h5Regular */

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* black */

  color: #333333;
  ${props =>
    (props.total || props.bold) &&
    css`
      font-weight: 600;
    `}
`;

export const Value = styled.h5`
  /* position: absolute;
  width: 41px;
  right: 0px;
  top: 0%;
  bottom: 0%; */

  /* h5Regular */

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: right;

  /* black */

  color: #333333;
  ${props =>
    props.total &&
    css`
      font-weight: 600;
      color: red;
    `}
`;

export const Button = styled.button`
  /* Component / Button / Standard / Disabled */

  position: absolute;
  width: 360px;
  height: 48px;
  left: 0px;
  top: 176px;

  /* grayLight */

  background: #f7f7f7;
  /* gray */

  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;

  /* h5Semibold */

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  color: #c1c1c1;

  ${({ total }) =>
    total >= 50 &&
    css`
      background: #ff8000;
      color: #ffffff;
      cursor: pointer;
    `}
`;
