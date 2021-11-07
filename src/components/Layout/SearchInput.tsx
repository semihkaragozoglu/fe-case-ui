import React, { ReactElement } from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/search.svg";

const Wrapper = styled.div`
  background: #eeeeee;
  border-radius: 100px;
  display: flex;
  height: 48px;
  flex-direction: row;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
`;
const TextInput = styled.input`
  color: #b0b0b0;
  border: none;
  background-color: transparent;
  outline: 0px;
  font-size: 15px;
  margin-left: 12.5px;
  width: 100%;
`;

interface Props {}

export default function SearchInput({}: Props): ReactElement {
  return (
    <Wrapper>
      <Search />
      <TextInput
        type="text"
        placeholder="25 milyon’dan fazla ürün içerisinde ara"
      />
    </Wrapper>
  );
}
