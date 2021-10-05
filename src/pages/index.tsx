import { Flex, Center, Text } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Divider from "../components/Divider";
import Header from "../components/Header";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex w="100vw" direction="column">
      <Header />
      <Banner />
      <TravelTypes />

      <Center flexDirection="column">
        <Divider />
        <Text mt="14" fontSize="4xl" fontWeight="500" color="gray.450">
          Vamos Nessa?
        </Text>
        <Text t="14" fontSize="4xl" fontWeight="500" color="gray.450">
          Então escolha seu continente
        </Text>
      </Center>
    </Flex>
  );
}
