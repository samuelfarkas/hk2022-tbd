import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import {
  Box,
  CircularProgress,
  Divider,
  Flex,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react"

const Goal = () => (
  <Flex p={4} w="full" bg="white" boxShadow="lg" align="center">
    <Grid>
      <GridItem area="1 / 1 / 2 / 2">
        <CircularProgress value={0} thickness={14} trackColor="#E6EBF8" />
      </GridItem>
      <GridItem area="1 / 1 / 4 / 2">
        <CircularProgress
          trackColor="transparent"
          color="#F7CC33"
          value={30}
          thickness={24}
        />
      </GridItem>
    </Grid>
    <Flex ml={4} flexDirection="column" gap={2}>
      <Text fontWeight="bold" fontFamily="poppins">
        Xiaomi kolobezka {">"}
      </Text>
      <Divider />
      <div>
        <Text color="#9CA1B4" fontSize="xs" fontFamily="poppins">
          našporené
        </Text>
        <Flex align="end" gap={2}>
          <Text fontWeight="bold" fontSize="xl" fontFamily="poppins">
            37 €
          </Text>
          <Text fontWeight="bold" fontSize="md" fontFamily="poppins">
            z 150 €
          </Text>
        </Flex>
      </div>
    </Flex>
  </Flex>
)

export const GoalsSwiper = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1.25}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Goal />
      </SwiperSlide>
      <SwiperSlide>
        <Goal />
      </SwiperSlide>
      <SwiperSlide>
        <Goal />
      </SwiperSlide>
    </Swiper>
  )
}
