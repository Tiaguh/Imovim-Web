import React, { useState } from "react"

import { BiMenu } from "react-icons/bi";
import { BsFillChatFill } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiCloseLine } from "react-icons/ri";

import Logo from "./img/logo.PNG"

import 'react-modern-drawer/dist/index.css'

import Drawer from 'react-modern-drawer'

import { Container, HeaderContainer, StartContainer, CenterContainer, Icon, EndContainer, DrawerContainer, CloseDrawer } from "./Style.js"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <Container>

      <HeaderContainer>

        <StartContainer>
          <BiMenu
            onClick={() => setIsOpen(true)}
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
        isOpen ? (
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
            className='bla bla bla'
            enableOverlay={false}
          >
            <DrawerContainer>

              <CloseDrawer>
                <RiCloseLine
                  onClick={() => setIsOpen(false)}
                  size={50}
                  color="#FFF"
                  style={{ cursor: "pointer" }}
                />
              </CloseDrawer>

            </DrawerContainer>
          </Drawer>
        ) : (
          <div>

          </div>
        )
      }

    </Container>
  )
}