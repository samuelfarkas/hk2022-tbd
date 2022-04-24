import React, { FC } from "react"
import { Box, Flex, VStack, Text, HStack } from "@chakra-ui/react"

interface Props {
  Icon: any
  time: string
  name: string
  price: number
}

export const TransactionCard: FC<Props> = ({ Icon, time, name, price }) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      p={4}
      bg="white"
      borderRadius={8}
      boxShadow="lg"
    >
      <HStack>
        <Flex
          borderRadius="full"
          w={9}
          h={9}
          bgColor="#57B5F4"
          justify="center"
          align="center"
          mr={2}
        >
          {Icon}
        </Flex>
        <Flex flexDirection="column">
          <Text fontFamily="poppins" fontWeight="medium">
            {name}
          </Text>
          <Text fontFamily="poppins" fontSize="sm" color="#A2A7B9">
            {time}
          </Text>
        </Flex>
      </HStack>
      <Text fontWeight="bold" fontSize="lg">
        {price}€
      </Text>
    </Flex>
  )
}
