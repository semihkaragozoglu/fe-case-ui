import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./Logo.svg";
import { Container as DefaultContainer, Row } from "../../styled";
import SearchInput from "./SearchInput";

//#region Styled
const Wrapper = styled.header`
  height: 96px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.35);
`;

const Container = styled(DefaultContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0px;
`;

const SearchHolder = styled.div`
  max-width: 695px;
  flex: 1 auto;
  margin-left: auto;
`;

const Cart = styled.div`
  margin-left: 100px;
`;

const Dropdown = styled.div`
  position: absolute;
  right: -1px;
  width: 360px;
  height: 360px;
  padding: 20px;
  background: white;
  border: 1px solid #b0b0b0;
  z-index: 0;
  margin-top: -2px;
  display: none;
  text-align: left;
  cursor: default;
`;

const Button = styled.button`
  position: relative;
  width: 120px;
  height: 48px;
  color: #b0b0b0;
  border: 1px solid #b0b0b0;
  font-size: 17px;
  background-color: white;
  cursor: pointer;
  padding: 0px;
  z-index: 1;
  border-radius: 4px;

  span {
    border-radius: 4px;

    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 1;
    align-items: center;
    justify-content: center;

    background: white;
  }
  :focus {
    span {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    border-bottom-color: transparent;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    ${Dropdown} {
      display: block;
    }
  }
`;

//#endregion

const MOCKDATA = [
  {
    id: 1,
    name: "IPhone 11 Kırmızı kılıflı Garantili Telefon",
    productType: "Telefon",
  },
  {
    id: 2,
    name: "IPhone 11 Kırmızı kılıflı Garantili Telefon",
    productType: "Telefon",
  },
  {
    id: 3,
    name: "IPhone 11 Kırmızı kılıflı Garantili Telefon",
    productType: "Telefon",
  },
];

type ItemType = {
  name: string;
  productType: string;
  id: number;
};

export default function Header(): ReactElement {
  function RenderItem({ name, productType, id }: ItemType) {
    return (
      <div key={id}>
        <p>{name}</p>
        <p>{productType}</p>
      </div>
    );
  }

  return (
    <Wrapper>
      <Container>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <SearchHolder>
          <SearchInput />
        </SearchHolder>
        <Cart>
          <Button tabIndex={0}>
            <span>Sepetim</span>
            <Dropdown>
              {MOCKDATA.map((item) => {
                return <RenderItem {...item} />;
              })}
            </Dropdown>
          </Button>
        </Cart>
      </Container>
    </Wrapper>
  );
}
