import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./Logo.svg";
import { generateContainer } from "../../styled";

const Wrapper = styled.header`
  height: 96px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.35);
`;

const Container = styled.div`
  ${generateContainer}

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export default function Header(): ReactElement {
  return (
    <Wrapper>
      <Container>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div>
          <input type="text" name="search" />
        </div>
        <div>
          <button>Sepet</button>
        </div>
      </Container>
    </Wrapper>
  );
}
