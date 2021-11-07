import React from "react";
import styled, { css } from "styled-components";

const Title = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;
`;

const Item = styled.div<{ $selected: boolean }>`
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  color: #646464;
  ${(props) =>
    props.$selected &&
    css`
      color: #ff6000;
    `}
`;

type Option = {
  id: number;
  name: string;
  totalCount?: number;
};

export type Category = {
  title: string;
  data: Option[];
};

interface Props extends Category {
  setFilter: any;
  filter: any;
}

const FilterCategory = ({ data, title, setFilter, filter }: Props) => {
  function getCurrentFilter() {
    if (title === "Renk") {
      return filter.color;
    }
    if (title === "Marka") {
      return filter.brand;
    }
  }
  return (
    <div>
      <Title>{title}</Title>
      <div>
        {data.map((filter) => {
          return (
            <Item
              $selected={getCurrentFilter() === filter.id}
              onClick={() => {
                setFilter({
                  title,
                  value: filter.id,
                });
              }}
            >
              {filter.name} {filter.totalCount && `(${filter.totalCount})`}
            </Item>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCategory;
