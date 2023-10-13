import React, { useState } from "react";

import { Link } from 'react-router-dom'

import { BiMenu } from "react-icons/bi";
import { BsFillChatFill } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";

import DrawerContent from '../DrawerContent/DrawerContent'

import Logo from "./img/logo.PNG"

import 'react-modern-drawer/dist/index.css'

import Drawer from 'react-modern-drawer'

import { Container, HeaderContainer, StartContainer, CenterContainer, Icon, EndContainer } from "./Style.js"

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

          <Link
            style={{ textDecoration: "none" }}
            to="/messages"
          >
            <BsFillChatFill
              size={30}
              color="#F8670E"
              style={{ cursor: "pointer" }}
            />
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            to="/search"
          >
            <FaMagnifyingGlass
              size={28}
              color="#F8670E"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </EndContainer>

      </HeaderContainer>

      {
        isOpen ? (
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
            enableOverlay={false}
          >
            <DrawerContent setIsOpen={setIsOpen} />
          </Drawer>
        ) : (
          <div>

          </div>
        )
      }

    </Container>
  )
}