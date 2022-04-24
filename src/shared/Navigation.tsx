import React from "react"
import styled from "@emotion/styled"
import { Box, Flex, Image } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"

const Nav = styled.nav`
  position: fixed;
  bottom: 10px;
  display: flex;
  justify-content: center;
  gap: 38px;
  align-items: center;
  box-shadow: 5px 5px 10px #00000045;
  border-radius: 50px;
  padding: 10px;
  max-width: 350px;
  height: 75px;
  z-index: 10;
  width: 100%;
  a {
    padding: 0 10px;
  }
  background: linear-gradient(
    180deg,
    rgba(0, 151, 253, 0.76) -21.33%,
    #0097fd 120%
  );
`

const Navigation = () => {
  const location = useLocation()
  console.log(location)
  return (
    <Nav>
      <Link to={"/dashboard"}>
        <Flex
          borderRadius="full"
          align="center"
          justify="center"
          w="45px"
          h="45px"
        >
          <Image src="HomeBtn.svg" w="21px" h="21px" />
        </Flex>
      </Link>
      <Link to={"/tasks"}>
        <Flex
          borderRadius="full"
          align="center"
          justify="center"
          w="45px"
          h="45px"
        >
          <Image src="JobBtn.svg" w="21px" h="21px" />
        </Flex>
      </Link>
      <Link to={"/spend"}>
        <Flex
          borderRadius="full"
          align="center"
          justify="center"
          w="45px"
          h="45px"
        >
          <Image src="TransationsBtn.svg" w="21px" h="21px" color="pink" />
        </Flex>
      </Link>
    </Nav>
  )
}

export default Navigation
