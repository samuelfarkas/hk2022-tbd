import { Button, Flex, Grid, Heading, Img, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Intro = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  useEffect(() => {
    if (step === 4) {
      navigate("login")
    }
  }, [step])
  return (
    <Flex
      pt="30px"
      pl="36px"
      flex={1}
      justifyContent="space-between"
      flexDirection="column"
      w="100%"
      minHeight="100vh"
      h="100%"
      background="linear-gradient(152.35deg, #0097FD 0%, #4DB2F6 57.84%)"
    >
      <Flex width="100%" justify="center" mb="10px">
        <Img src="logo.png" width="100%" maxWidth="140px" />
      </Flex>
      <Img src="image.png" width="100%" maxWidth="300px" />
      <Flex width="100%" maxWidth="270px">
        <Heading color="white" fontSize="32px">
          {step === 1 && "Peniaze nie sú len pre dospelých"}
          {step === 2 && "Sprav úlohy, vzdelávaj sa a zárabaj!"}
          {step === 3 && "Splň si svoje sny! Našetri si na ciele"}
        </Heading>
      </Flex>
      <Flex mb="10px" align="center" justify="space-between" mt="10px">
        <Grid gridGap="8px" gridTemplateColumns="repeat(3, 5px)">
          <Flex
            backgroundColor={step === 1 ? "white" : "#C4C4C4"}
            borderRadius="50%"
            w="5px"
            h="5px"
          />
          <Flex
            backgroundColor={step === 2 ? "white" : "#C4C4C4"}
            borderRadius="50%"
            w="5px"
            h="5px"
          />
          <Flex
            backgroundColor={step === 3 ? "white" : "#C4C4C4"}
            borderRadius="50%"
            w="5px"
            h="5px"
          />
        </Grid>
        <Flex
          mr="50px"
          mb="10px"
          onClick={() => {
            setStep((step) => step + 1)
          }}
        >
          <svg
            width="70"
            height="74"
            viewBox="0 0 70 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="33" cy="37" r="30" fill="white" />
            <path
              d="M33 1.38684C33 0.620907 33.6212 -0.00271374 34.3866 0.0259854C40.4438 0.253108 46.3603 1.96549 51.6113 5.02159C57.2624 8.3105 61.941 13.0382 65.1708 18.7233C68.4006 24.4084 70.0662 30.8479 69.998 37.386C69.9298 43.9241 68.1302 50.3274 64.7825 55.9439C61.4348 61.5604 56.6586 66.1894 50.9401 69.3597C45.2216 72.53 38.7651 74.1284 32.2281 73.9919C25.691 73.8555 19.3068 71.9893 13.7256 68.5832C8.5394 65.4182 4.21864 61.0287 1.13734 55.8088C0.747984 55.1492 1.00101 54.3062 1.67472 53.9418C2.34843 53.5774 3.18753 53.8299 3.57888 54.4883C6.42566 59.2776 10.4027 63.3059 15.1705 66.2156C20.3333 69.3663 26.2389 71.0927 32.2859 71.2189C38.333 71.3451 44.3054 69.8666 49.5952 66.9339C54.885 64.0013 59.3032 59.7192 62.4 54.5238C65.4967 49.3284 67.1614 43.4051 67.2245 37.3571C67.2876 31.309 65.7468 25.3523 62.7592 20.0934C59.7715 14.8345 55.4436 10.4612 50.2161 7.41882C45.3887 4.60929 39.9534 3.02744 34.3865 2.80176C33.6212 2.77074 33 2.15276 33 1.38684Z"
              fill="#49DEFF"
            />
            <path
              d="M37.2558 31.6803L44.0939 38.5184L37.2558 45.3564"
              stroke="#212121"
              stroke-width="1.6898"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.943 38.5184H43.9025"
              stroke="#212121"
              stroke-width="1.6898"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Flex>
      </Flex>
    </Flex>
  )
}
