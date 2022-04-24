import React from "react"
import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { TransactionCard } from "../../../components/TransactionCard"

const Spend = () => {
  return (
    <Box width="100%">
      <Flex
        px={8}
        py={20}
        justify="space-between"
        align="center"
        position="relative"
        bgGradient="linear-gradient(152.35deg, #0097FD 0%, rgba(0, 151, 253, 0.62) 57.84%);"
      >
        <Heading color="white" fontSize="3xl">
          Platby
        </Heading>
        <Image src="plus.svg" w="36px" h="36px" />
      </Flex>
      <Flex flexDirection="column" px={8} py={12} gap={4}>
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
        <TransactionCard
          Icon={<Image src="cart_icon.svg" width="24px" height="24px" />}
          name="Odmena"
          price={+20}
          time="18. Apríla 2022 o 8:57"
        />
      </Flex>
    </Box>
  )
}

export default Spend
