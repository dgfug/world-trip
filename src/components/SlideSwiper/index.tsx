import { Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";

SwiperCore.use([Keyboard, Pagination, Navigation]);

export default function SlideSwiper() {
  return (
    <Flex maxWidth={1120} mx="auto" mt="14" mb="10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        className="slideSwiper"
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
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
      </Swiper>
    </Flex>
  );
}
