import React, { ReactElement } from "react";
import styled from "styled-components";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: ReactElement;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
