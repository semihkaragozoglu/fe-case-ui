import React, { useState, useEffect, ReactElement } from "react";
import styled from "styled-components";
import { Heading } from "../components/Heading";
import { Sidebar } from "../components/Sidebar";
import { Category } from "../components/FilterCategory";
import { Product, ProductItem } from "../components/ProductItem";
import { useStore } from "../context/StoreContext";

// #region Styled
const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const SidebarWrapper = styled.div`
  width: 224px;
  min-width: 224px;
`;
const ContentWrapper = styled.div`
  flex: 1 auto;
`;

const ProductList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//#endregion

export default function Home(): ReactElement {
  const { setInitialValues, products, filter } = useStore();

  // This is bad practice
  function createCategories(data: any): {
    categories: Category[];
    products: Product[];
  } {
    let groupedData = data.reduce(
      (previousValue: any, currentValue: any) => {
        let currentColor = previousValue.colors.find(
          (color: any) => currentValue.colorId === color.id
        );
        if (currentColor) {
          // object mutation
          currentColor.total++;
        } else {
          previousValue.colors.push({
            id: currentValue.colorId,
            name: currentValue.colorName,
            total: 1,
          });
        }

        let currentBrand = previousValue.brands.find(
          (brand: any) => currentValue.brandId === brand.id
        );
        if (currentBrand) {
          // object mutation
          currentBrand.total++;
        } else {
          previousValue.brands.push({
            id: currentValue.brandId,
            name: currentValue.brandName,
            total: 1,
          });
        }
        return previousValue;
      },
      {
        colors: [],
        brands: [],
      }
    );
    const categories = [
      {
        title: "Renk",
        data: groupedData.colors,
      },
      {
        title: "Marka",
        data: groupedData.brands,
      },
    ];

    return { categories, products: data };
  }

  useEffect(() => {
    fetch("http://localhost:3001/getAll")
      .then((response) => response.json())
      .then((data) => {
        const categories = createCategories(data);
        setInitialValues(categories);
      });
  }, []);

  function withQuery(filter: object) {
    return Object.keys(filter).reduce((prev, current) => {
      // @ts-ignore: Unreachable code error
      if (filter[current]) {
        // @ts-ignore: Unreachable code error
        return prev + `&${current}=${filter[current]}`;
      }
      return prev;
    }, "");
  }
  useEffect(() => {
    fetch(`http://localhost:3001/filter?${withQuery(filter)}`)
      .then((response) => response.json())
      .then((data) => {
        const categories = createCategories(data.result);
        setInitialValues(categories);
      });
  }, [filter]);

  return (
    <div>
      <Heading pageTitle="iPhone iOS cep telefonu" keyword="iphone 11" />
      <Content>
        <SidebarWrapper>
          <Sidebar></Sidebar>
        </SidebarWrapper>
        <ContentWrapper>
          <ProductList>
            {products.map((item: Product) => {
              return <ProductItem {...item} />;
            })}
          </ProductList>
        </ContentWrapper>
      </Content>
    </div>
  );
}
