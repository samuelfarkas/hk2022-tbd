import React from "react"
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react"

export const Dashboard = () => {
  return (
    <Box width="100%">
      <Box bgGradient="linear-gradient(152.35deg, #0097FD 0%, rgba(0, 151, 253, 0.62) 57.84%);">
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
                  KT
                </Flex>
                <Text fontSize="3xl" color="white" fontFamily="krona">
                  806.47 €
                </Text>
              </Flex>
            </Box>
            <Text mt={3}>zvoncek</Text>
          </Flex>
          <Flex mt={7} justify="space-between" align="center">
            <Button
              border="2px"
              borderColor="rgba(255, 255, 255, 0.2);"
              bg="rgba(255, 255, 255, 0.2);"
              p={6}
            >
              <Text color="white" fontFamily="poppins">
                Poslat peniaze
              </Text>
            </Button>
            <Text color="white" variant="link" fontFamily="poppins">
              Poziadat o peniaze
            </Text>
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
              <Box p={4}>
                <Text fontSize='md' fontFamily="krona" mb={2}>
                  Pokracuj vo vyzve >
                </Text>
                <Text fontSize="xs">Máš nesplnených ešte 5 úloh na tento týždeň.</Text>
              </Box>
              <Box right="0" alignSelf="end" width="80%" height="100%">
                <Image src="coin_stand.svg" width="100%" height="100%"/>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}