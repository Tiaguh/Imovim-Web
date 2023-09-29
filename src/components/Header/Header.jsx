import React from "react"

import { BiMenu } from "react-icons/bi";
import { BsFillChatFill } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";

import Logo from "./img/logo.PNG"

import { HeaderContainer, StartContainer, CenterContainer, Icon, EndContainer } from "./Style.js"

export default function Header() {
  return (
    <HeaderContainer>

      <StartContainer>
        <BiMenu
          size={50}
          color="#F8670E"
          style={{ cursor: "pointer" }}
        />
      </StartContainer>

      <CenterContainer>
        <Icon src={Logo} alt="logo" />
      </CenterContainer>

      <EndContainer>
        <BsFillChatFill
          size={30}
          color="#F8670E"
          style={{ cursor: "pointer" }}
        />

        <FaMagnifyingGlass
          size={30}
          color="#F8670E"
          style={{ cursor: "pointer" }}
        />
      </EndContainer>

    </HeaderContainer>
  )
}