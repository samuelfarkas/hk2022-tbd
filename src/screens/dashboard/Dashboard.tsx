import React from "react"
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react"
import { TransactionCard } from "../../../components/TransactionCard"
import { GoalsSwiper } from "../../../components/GoalsSwiper"
import { Link } from "react-router-dom"

export const Dashboard = () => {
  return (
    <Box width="100%">
      <Box
        mb={20}
        position="relative"
        bgGradient="linear-gradient(152.35deg, #0097FD 0%, rgba(0, 151, 253, 0.62) 57.84%);"
      >
        <Image src="left_stripe.svg" right={0} top={-10} position="absolute" />
        <Box px={8} py={12}>
          <Flex justify="space-between">
            <Box>
              <Text color="white" mb={4}>
                Tvoj zostatok
              </Text>
              <Flex align="center" gap={3.5}>
                <Flex
                  w={9}
                  h={9}
                  borderRadius="full"
                  bg="white"
                  align="center"
                  justify="center"
                >
                  <Image src="icon_money.svg" w={5} h={5} />
                </Flex>
                <Text fontSize="3xl" color="white" fontFamily="krona">
                  806.47
                </Text>
                <Text
                  fontSize="2xl"
                  color="#FFEDAD"
                  fontFamily="poppins"
                  fontWeight="medium"
                >
                  €
                </Text>
              </Flex>
              <Flex>
                <Text
                  ml={12}
                  pl={1}
                  fontSize="xs"
                  color="white"
                  fontFamily="poppins"
                >
                  to sa rovná <b>320</b>
                </Text>
                <Image mx={1} src="vbucks.png" w="38px" h="22px" />
                <Text color="white" fontFamily="poppins" fontSize="xs">
                  V-bucks
                </Text>
              </Flex>
            </Box>
            <Image src="notification.svg" w="24px" h="24px" mt={4} />
          </Flex>
          <Flex mt={7} justify="space-between" align="center">
            <Button
              border="2px"
              borderColor="rgba(255, 255, 255, 0.2);"
              bg="rgba(255, 255, 255, 0.2);"
              p={6}
            >
              <Image src="icon_sned.svg" w={4} h={4} mr={2} />
              <Text color="white" fontFamily="poppins">
                Poslat peniaze
              </Text>
            </Button>
            <Button variant="link">
              <Image src="icon_plus.svg" w={4} h={4} mr={1} />
              <Text
                color="white"
                fontSize="sm"
                variant="link"
                fontFamily="poppins"
              >
                Poziadat o peniaze
              </Text>
            </Button>
          </Flex>
          <Box position="relative">
            <Flex
              bg="white"
              mt={4}
              borderRadius="2xl"
              width="100%"
              height="128px"
              boxShadow="md"
              position="absolute"
              justify="space-between"
            >
              <Link to="/tasks" color="black">
                <Box p={4}>
                  <Text fontSize="md" color="black" fontFamily="krona" mb={2}>
                    Pokračuj  v úlohách {">"}
                  </Text>
                  <Text fontSize="xs" color="#3F4765" fontFamily="poppins">
                    Máš nesplnených ešte 5 úloh na tento týždeň.
                  </Text>
                </Box>
              </Link>
              <Box right="0" alignSelf="end" width="80%" height="100%">
                <Image src="coin_stand.svg" width="100%" height="100%" />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box px={8} py={12}>
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="sm" fontFamily="poppins">
            Tvoje posledné platby
          </Text>
          <Link to="/spend" color="#8991AC">
            <Text fontSize="xs" fontFamily="poppins" color="#8991AC">
              zobraziť všetky
            </Text>
          </Link>
        </Flex>
        <Flex flexDirection="column" gap={4}>
          <TransactionCard
            Icon={<Image src="cart_icon.svg" width="24px" height="24px" />}
            name="Lístok na autobus"
            price={-1}
            time="18. Apríla 2022 o 8:57"
          />
          <TransactionCard
            Icon={<Image src="cart_icon.svg" width="24px" height="24px" />}
            name="Lístok na autobus"
            price={-1}
            time="18. Apríla 2022 o 8:57"
          />
        </Flex>
        <Flex justify="space-between" align="center" mt={9} mb={8}>
          <Text fontSize="sm" fontFamily="poppins">
            Cieľe
          </Text>
          <Link to="/spend" color="#8991AC">
            <Text fontSize="xs" fontFamily="poppins" color="#8991AC">
              zobraziť všetky
            </Text>
          </Link>
        </Flex>
        <Box width="100%">
          <GoalsSwiper />
        </Box>
      </Box>
    </Box>
  )
}
