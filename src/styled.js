import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1120px;
  }
  @media (min-width: 1440px) {
    width: 1280px;
  }
`;

const Row = styled.div`
  margin-right: -10px;
  margin-left: -10px;
`;

export { Container, Row };
