import React from "react";
import styled from "styled-components";

const ImageHolder = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  flex-basis: 250px;
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #484848;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  span {
    font-weight: normal;
  }
`;

const Detail = styled.div`
  margin-bottom: 13px;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
`;
const OldPrice = styled.div`
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  text-decoration: line-through;
  color: #9b9b9b;
  span {
    font-weight: bold;
    font-size: 12px;
    text-decoration: none;
    color: #f90000;
    display: inline-block;
    padding-left: 3px;
  }
`;

export type Product = {
  id: number;
  name: string;
  brandId: number;
  brandName: string;
  colorId: number;
  colorName: string;
  price: number;
  createdDate?: string | undefined;
  discountPercentage: number;
};

export const ProductItem = ({
  id,
  name,
  brandId,
  brandName,
  colorId,
  colorName,
  price,
  createdDate,
  discountPercentage,
}: Product) => {
  return (
    <Wrapper key={id}>
      <ImageHolder>
        <img src={`/assets/img/image-${id}.png`} alt="" />
      </ImageHolder>
      <Name>{name}</Name>
      <Detail>
        <Label>
          Marka: <span>{brandName}</span>
        </Label>
        <Label>
          Renk: <span>{colorName}</span>
        </Label>
      </Detail>
      <Price>{price * (1 - discountPercentage / 100)} TL</Price>
      <OldPrice>
        {price} TL <span>{discountPercentage}%</span>
      </OldPrice>
    </Wrapper>
  );
};
