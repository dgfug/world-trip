import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" direction="column">
      <Header />
      <Banner />
    </Flex>
  );
}
