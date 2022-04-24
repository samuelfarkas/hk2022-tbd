import React, { FC } from "react"
import { Text, Flex, Box } from "@chakra-ui/react"

export const StatCard: FC<{ bg?: string }> = ({ bg }) => {
  return (
    <Flex
      w="full"
      flexDirection="column"
      borderRadius="lg"
      border="2px"
      borderColor="#F6CC33"
      bg={bg ?? "#FAE085"}
    >
      <Flex w="full" justify="space-between" align="center" p={4}>
        <Text fontFamily="krona" fontSize="2xl" fontWeight="bold" mr={4}>
          7
        </Text>
        <Text fontFamily="poppins" fontSize="xs">
          splnených <br /> bonusových úloh
        </Text>
      </Flex>
      <Text
        textAlign="center"
        py={3}
        fontSize="0.7rem"
        bg="rgba(255, 255, 255, 0.4);"
      >
        5 nesplnených
      </Text>
    </Flex>
  )
}
