import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';

export const Stylestpcl = styled.div`
  & .cardImage {
    width: 84 !important;
    height: 76 !important;
  }
`;

export const Button = styled.button`
  margin-top: 4px !important;
  width: 100% !important;
  /* height: 100% !important; */
  padding: 0 !important;
`;

export const ColAdj = styled(Col)`
  padding-right: 0px;
  padding-left: 0px;
  margin-right: 4px;
  margin-left: 4px;
  @media (min-width: 320px) and (max-width: 1023px) {
    display: inline-block;
    width: initial;
    &:first-child {
      margin-left: 30px;
    }
    &:last-child {
      margin-right: 24px;
    }
  }
  @media (min-width: 1023px) {
    margin-bottom: 1rem;
    max-width: 24%;
  }
`;

export const RowAdj = styled(Row)`
  margin-left: -0.3125rem;
  margin-right: -0.3125rem;
  width: 100%;

  @media (min-width: 320px) and (max-width: 1023px) {
    display: block;
    /* height: 100%;
    overflow-y: auto;
    white-space: nowrap;
    overflow-x: scroll;
    padding-bottom: 30px;
    margin-bottom: -30px; */

    margin-left: 0rem;
    margin-right: 0rem;

    height: 100% !important;
    overflow-y: auto !important;
    white-space: nowrap !important;
    overflow-x: scroll !important;
    padding-bottom: 30px !important;
    margin-bottom: -30px !important;
    -webkit-overflow-scrolling: touch !important;
  }

  @media (min-width: 1023px) {
    justify-content: center;
  }
`;

export const RowBase = styled(Row)`
  margin-right: 0px !important;
  margin-left: 0px !important;
  width: 100% !important;

  @media (min-width: 320px) and (max-width: 1023px) {
    width: 100% !important;
    overflow-y: hidden !important;
    height: 100% !important;
    /* display: block; */
  }
`;

export const RelativeCustom = styled(Relative)`
  @media (min-width: 320px) and (max-width: 1023px) {
    margin-right: -1.2rem !important;
    margin-left: -28px !important;
    overflow-y: hidden !important;
    overflow-x: hidden !important;
  }
`;

export const CardContainer = styled(Div)`
  float: left;
  text-align: left;
  width: 140px;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
  margin-right: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-image: initial;
  border-radius: 3px;
  padding: 0px;

  @media (min-width: 1023px) {
    width: 100%;
    display: table;
  }
`;

export const DivBgColor = styled(Div)`
  padding-top: 56.25%;
  background: rgb(72, 72, 72, 0.3);
  contain: strict;
  position: relative;
  width: 100%;

  @media (min-width: 1023px) {
    width: 96px;
    display: table-cell;
    vertical-align: middle;
    height: 72px;
    border-spacing: 0px;
    min-height: 100%;
    padding-top: 0px;
  }
`;

export const DivImagePosition = styled(Div)`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 100%;
  width: 100%;

  @media (min-width: 1023px) {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

export const DivImageHolder = styled(Div)`
  position: relative;
  height: 99%;
  width: 100%;
  background-size: 140px;

  @media (min-width: 1023px) {
    background-size: cover !important;
    background-position: 50% 50% !important;
    background-repeat: no-repeat !important;
    position: absolute;
  }
`;

export const ProcedureName = styled(Span)`
  @media (min-width: 1023px) {
    vertical-align: sub;
  }
  font-size: 14px;
`;
