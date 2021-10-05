import { Flex, Text, Center } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Keyboard, Pagination, Navigation]);

export default function SlideSwiper() {
  return (
    <Flex maxWidth={1120} mx="auto" mt="14" mb="20">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Flex
            h="450px"
            bgImage="url('/images/europe/banner.jpg')"
            bgSize="cover"
            bgPosition="center"
            align="center"
            justify="center"
            direction="column"
          >
            <Text fontSize="5xl" fontWeight="700" color="gray.150">
              Europa
            </Text>
            <Text fontSize="2xl" fontWeight="700" color="gray.250" mt="4">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            h="450px"
            bgImage="url('/images/europe/banner.jpg')"
            bgSize="cover"
            bgPosition="center"
            align="center"
            justify="center"
          >
            <Text>Teste</Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
