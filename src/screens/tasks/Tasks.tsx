import { Box, Flex, Heading, Button, Text, Image } from "@chakra-ui/react"
import React from "react"
import { StatCard } from "../../../components/StatCard"

const ActiveStyles = {
  border: "2px",
  borderColor: "rgba(255, 255, 255, 0.2)",
  bg: "rgba(255, 255, 255, 0.2)",
  variant: "solid",
}

export const Tasks = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0)

  return (
    <Box width="100%">
      <Box
        px={8}
        py={12}
        bgGradient="linear-gradient(152.35deg, #0097FD 0%, rgba(0, 151, 253, 0.62) 57.84%);"
      >
        <Heading color="white" fontSize="3xl" mb={8}>
          Úlohy
        </Heading>
        <Flex gap={4}>
          <Button
            variant="link"
            {...(activeTab === 0 && ActiveStyles)}
            onClick={() => setActiveTab(0)}
          >
            <Text fontSize="sm" color="white">
              Prehľad
            </Text>
          </Button>
          <Button
            variant="link"
            {...(activeTab === 1 && ActiveStyles)}
            onClick={() => setActiveTab(1)}
          >
            <Text fontSize="sm" color="white">
              Úlohy od rodičov
            </Text>
          </Button>
          <Button variant="link">
            <Text fontSize="sm" color="white">
              Otestuj si vedomosti
            </Text>
          </Button>
        </Flex>
      </Box>
      {activeTab === 0 && (
        <Box px={8} mt={4}>
          <Text fontSize="2xl" fontFamily="poppins">
            Si super! 😍
          </Text>
          <Text my={2}>Tvoja aktivita</Text>
          <Image src="Statistic.svg" mt={2} w="full" />
          <Flex w="full" gap={4} mt={4}>
            <StatCard />
            <StatCard bg="#F6CC33" />
          </Flex>
          <Text textAlign="center" mt={4} fontFamily="poppins">
            9 splnených úloh z 17
          </Text>
          <Text
            textAlign="center"
            mt={2}
            fontSize="sm"
            fontWeight="bold"
            fontFamily="krona"
          >
            Získanie týždňového vreckového - 15€
          </Text>
        </Box>
      )}
    </Box>
  )
}
