import React from "react";

import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

import { BsFillCalendarFill, BsCameraFill, BsFillPencilFill } from "react-icons/bs";

import { Container, TopBar, TopBarContainer, FeedContainer } from "./Style.js"

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

          <Link 
            style={{textDecoration: 'none'}}
            to='/create-post'
          >
            <BsFillPencilFill
              style={{ cursor: "pointer" }}
              color="#FFF"
              size={25}
            />
          </Link>

        </TopBar>
      </TopBarContainer>

      <FeedContainer>

        <Post />
        <Post />
        <Post />
        <Post />

      </FeedContainer>

    </Container>
  )
}