import React from "react";

import Header from "../../components/Header/Header";

import { BsFillCalendarFill, BsCameraFill, BsFillPencilFill } from "react-icons/bs";

import { Container, TopBar, TopBarContainer } from "./Style.js"

export default function Feed() {
  return (
    <Container>
      <Header />

      <TopBarContainer>
        <TopBar>

          <BsFillCalendarFill
            style={{ cursor: "pointer" }}
            color="#FFF"
            size={23}
          />

          <BsCameraFill
            style={{ cursor: "pointer" }}
            color="#FFF"
            size={30}
          />

          <BsFillPencilFill
            style={{ cursor: "pointer" }}
            color="#FFF"
            size={25}
          />

        </TopBar>
      </TopBarContainer>

    </Container>
  )
}