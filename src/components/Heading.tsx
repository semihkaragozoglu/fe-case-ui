import React from "react";
import styled from "styled-components";
import { ORDER_TYPES } from "../constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 17px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  h3 {
    font-weight: bold;
    font-size: 28px;
    line-height: 100%;
    margin: 0px;
  }
`;

const Select = styled.select`
  width: 120px;
  height: 48px;
  border: 1px solid #b4b4bb;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 17px;
  text-align: center;
`;

const SearchTerm = styled.div`
  margin-top: 2px;
  font-weight: normal;
  font-size: 15px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #b0b0b0;
  em {
    font-style: normal;
    color: #000;
  }
`;

interface Props {
  pageTitle: string;
  keyword?: string;
}

export const Heading = ({ pageTitle, keyword }: Props) => {
  return (
    <Wrapper>
      <Title>
        <h3>{pageTitle}</h3>
        <SearchTerm>
          {keyword && (
            <div>
              Aranan Kelime: <em>{keyword}</em>
            </div>
          )}
        </SearchTerm>
      </Title>
      <Select name="orderType" placeholder="sıralama">
        {ORDER_TYPES.map((order) => {
          return <option value={order.value}>{order.label}</option>;
        })}
      </Select>
    </Wrapper>
  );
};
