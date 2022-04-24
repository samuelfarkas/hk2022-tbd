import { Box, Flex, Heading, Button, Text, Image, Grid } from "@chakra-ui/react"
import React from "react"
import { StatCard } from "../../../components/StatCard"

const ActiveStyles = {
  border: "2px",
  borderColor: "rgba(255, 255, 255, 0.2)",
  bg: "rgba(255, 255, 255, 0.2)",
  variant: "solid",
}

const learning = [
  {
    title: "Kvíz o požičiavaní peňazí",
    when: "získaj až 2€",
    status: "markAsDone",
  },
  {
    title: "Vyhni sa nebezpečenstvu",
    when: "získaj až 0,75€",
    status: "markAsDone",
  },
]

const parentTasks = [
  {
    title: "Navariť obed",
    when: "V sobotu",
    isRequired: true,
    status: "markAsDone",
  },
  {
    title: "Pokosiť záhradu",
    when: "Termín: 25.4.2021",
    value: "3€",
    isBonus: true,
    status: "markAsDone",
  },
  {
    title: "Umyť riad",
    when: "Každý deň",
    isRequired: true,
    status: "markAsDone",
  },
  {
    title: "Upratať byt",
    when: "Termín: 22.4.2021",
    value: "1€",
    isBonus: true,
    status: "markAsDone",
  },
  {
    title: "Školské úlohy",
    when: "Každý deň",
    isRequired: true,
    status: "waiting",
  },
  {
    title: "Venčenie psa",
    when: "V pondelok a stredu",
    isRequired: true,
    status: "markAsDone",
  },
]

export const Tasks = () => {
  const [tasks, setTasks] = React.useState(parentTasks)
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
          <Button
            variant="link"
            {...(activeTab === 2 && ActiveStyles)}
            onClick={() => setActiveTab(2)}
          >
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
      {activeTab === 1 && (
        <Box px={8} mt={4}>
          <Text fontSize="2xl" fontFamily="poppins" mb="20px">
            Poď do toho!💪
          </Text>
          <Grid gridGap="20px">
            {tasks.map((task, index) => {
              const { title, when, isRequired, isBonus, status, value } = task
              return (
                <Grid
                  position="relative"
                  borderRadius="8px"
                  backgroundColor={index % 2 === 1 ? "#F6CC33" : "#149FFD"}
                  border={
                    index % 2 === 1 ? "2px solid #FFEDAD" : "2px solid #149FFD"
                  }
                  color={index % 2 === 1 ? "black" : "white"}
                >
                  {isBonus && (
                    <Text
                      px="5px"
                      py="8px"
                      right={0}
                      top="12px"
                      fontWeight={400}
                      position="absolute"
                      display="inline-flex"
                      backgroundColor="black"
                      color="white"
                    >
                      BONUS
                    </Text>
                  )}
                  {isRequired && (
                    <Text
                      textAlign="right"
                      w="120px"
                      px="5px"
                      py="8px"
                      right={0}
                      top="12px"
                      fontSize="9px"
                      fontWeight={500}
                      position="absolute"
                      display="inline-flex"
                      backgroundColor="#EFCD3E"
                      color="black"
                    >
                      povinné pre získanie týždňového vreckového
                    </Text>
                  )}
                  <Grid
                    ml="13px"
                    mt="35px"
                    gridTemplateRows="repeat(2, 1fr)"
                    gridGap="15px"
                  >
                    <Text fontSize="20px" fontWeight={600} lineHeight="20px">
                      {title}
                    </Text>
                    <Text fontSize="14px" lineHeight="14px">
                      {when}
                    </Text>
                  </Grid>
                  <Flex justifyContent="flex-end" mr="5px" mb="10px">
                    {status === "markAsDone" ? (
                      <Button
                        onClick={() => {
                          setTasks((oldTasks) => [
                            ...oldTasks.slice(0, index),
                            {
                              ...task,
                              status: "waiting",
                            },
                            ...oldTasks.slice(index + 1, oldTasks.length),
                          ])
                        }}
                        px="5px"
                        h="25px"
                        fontSize="12px"
                        color="black"
                        backgroundColor="white"
                        border={
                          index % 2 === 0
                            ? "2px solid #FFEDAD"
                            : "2px solid #149FFD"
                        }
                      >
                        označiť ako splnené
                      </Button>
                    ) : (
                      <Flex w="115px" align="center">
                        <Flex flexShrink={0} mr="5px">
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5 16.3125C13.7629 16.3125 17.2188 13.0386 17.2188 9C17.2188 4.96142 13.7629 1.6875 9.5 1.6875C5.23705 1.6875 1.78125 4.96142 1.78125 9C1.78125 13.0386 5.23705 16.3125 9.5 16.3125Z"
                              stroke="white"
                              stroke-linecap="round"
                            />
                            <path
                              d="M9.5 4.09497V8.99997L13.0387 11.0418"
                              stroke="white"
                              stroke-linecap="round"
                            />
                          </svg>
                        </Flex>
                        <Text color="white" fontSize="9px">
                          čaká na potvrdenie splnenia rodičom
                        </Text>
                      </Flex>
                    )}
                    {value && (
                      <Grid ml="13px">
                        <Text display="flex" fontSize="7px" lineHeight="7px">
                          hodnota
                        </Text>
                        <Text
                          lineHeight="16px"
                          fontSize="20px"
                          fontWeight="500"
                        >
                          {value}
                        </Text>
                      </Grid>
                    )}
                  </Flex>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      )}
      {activeTab === 2 && (
        <Box px={8} mt={4}>
          <Text fontSize="2xl" fontFamily="poppins" mb="20px">
            Otestuj sa a zabav!😄
          </Text>
          <Grid gridGap="20px">
            {learning.map((task, index) => {
              const { title, status, when } = task
              return (
                <Grid
                  position="relative"
                  borderRadius="8px"
                  backgroundColor={index % 2 === 1 ? "#F6CC33" : "#149FFD"}
                  border={
                    index % 2 === 1 ? "2px solid #FFEDAD" : "2px solid #149FFD"
                  }
                  color={index % 2 === 1 ? "black" : "white"}
                >
                  <Grid
                    ml="13px"
                    mt="25px"
                    gridTemplateRows="repeat(2, 1fr)"
                    gridGap="15px"
                  >
                    <Text fontSize="20px" fontWeight={600} lineHeight="20px">
                      {title}
                    </Text>
                    <Text fontSize="14px" lineHeight="14px">
                      {when}
                    </Text>
                  </Grid>
                  <Flex justifyContent="flex-end" mr="5px" mb="10px">
                    {status === "markAsDone" ? (
                      <>
                        <Button
                          mr="5px"
                          px="5px"
                          h="25px"
                          fontSize="12px"
                          color="white"
                          border={
                            index % 2 === 0
                              ? "2px solid #FFEDAD"
                              : "2px solid #149FFD"
                          }
                          borderColor="white"
                          variant="outline"
                        >
                          pozriet video
                        </Button>
                        <Button
                          px="5px"
                          h="25px"
                          fontSize="12px"
                          color={index % 2 === 0 ? "black" : "white"}
                          backgroundColor={index % 2 === 0 ? "white" : "black"}
                        >
                          test
                        </Button>
                      </>
                    ) : (
                      <Flex w="115px" align="center">
                        <Flex flexShrink={0} mr="5px">
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5 16.3125C13.7629 16.3125 17.2188 13.0386 17.2188 9C17.2188 4.96142 13.7629 1.6875 9.5 1.6875C5.23705 1.6875 1.78125 4.96142 1.78125 9C1.78125 13.0386 5.23705 16.3125 9.5 16.3125Z"
                              stroke="white"
                              stroke-linecap="round"
                            />
                            <path
                              d="M9.5 4.09497V8.99997L13.0387 11.0418"
                              stroke="white"
                              stroke-linecap="round"
                            />
                          </svg>
                        </Flex>
                        <Text color="white" fontSize="9px">
                          čaká na potvrdenie splnenia rodičom
                        </Text>
                      </Flex>
                    )}
                  </Flex>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      )}
    </Box>
  )
}
