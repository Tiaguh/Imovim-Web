import React, { useState } from "react"

import { BiMenu } from "react-icons/bi";
import { BsFillChatFill } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";

import Logo from "./img/logo.PNG"

import { Container, HeaderContainer, StartContainer, CenterContainer, Icon, EndContainer, Drawer, DrawerItem } from "./Style.js"

export default function Header() {
  const [activite, setActivite] = useState(false)

  return (
    <Container>

      <HeaderContainer>

        <StartContainer>
          <BiMenu
            onClick={()=> setActivite(!activite)}
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

      {
        activite ? (
          <Drawer>

            <DrawerItem>

            </DrawerItem>

          </Drawer>
        ) : (
          <div>
            
          </div>
        )
      }

    </Container>
  )
}