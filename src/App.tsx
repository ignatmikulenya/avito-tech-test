import React from "react";

import { Container, Header, Footer } from "./components";
import { Gallery } from "./pages";

import "./App.scss";

function App() {
  return (
    <Container>
      <Header title="Test App" />
      <Gallery />
      <Footer text="2019 - 2020" />
    </Container>
  );
}

export default App;
