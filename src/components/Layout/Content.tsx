import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import { Container as DefaultContainer } from "../../styled";
// import styles from "./content.module.scss";

const Main = styled.main`
  width: 100%;
  min-height: 200px;
  flex: 1 auto;
`;

const Container = styled(DefaultContainer)`
  padding: 0px;
`;

interface Props {
  children: ReactElement;
}

export default function Content({ children }: Props): ReactElement {
  return (
    <Main>
      <Container>{children}</Container>
    </Main>
  );
}
