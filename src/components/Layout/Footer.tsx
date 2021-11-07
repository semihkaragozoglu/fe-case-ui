import React, { ReactElement } from "react";
// import styles from "./footer.module.scss";

import styled, { css } from "styled-components";
import { Container as DefaultContainer } from "../../styled";
const Wrapper = styled.footer`
  background: #eee;
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
`;

const Container = styled(DefaultContainer)`
  padding: 0px;
`;

export default function Footer(): ReactElement {
  return (
    <Wrapper>
      <Container>Footer</Container>
    </Wrapper>
  );
}
