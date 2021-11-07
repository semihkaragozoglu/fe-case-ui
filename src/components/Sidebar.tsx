import React from "react";
import FilterCategory, { Category } from "./FilterCategory";
import styled from "styled-components";
import { useStore } from "../context/StoreContext";

const Wrapper = styled.div`
  padding: 10px 0px;
`;

export const Sidebar = () => {
  const { setFilter, categories, filter } = useStore();
  return (
    <Wrapper>
      {categories.map((category: Category) => {
        return (
          <FilterCategory {...category} setFilter={setFilter} filter={filter} />
        );
      })}
    </Wrapper>
  );
};
