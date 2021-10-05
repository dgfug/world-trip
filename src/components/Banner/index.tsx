import { Flex } from "@chakra-ui/react";
import Content from "./Content";

export default function Banner() {
  return (
    <Flex w="100vw" h="96" bgImage="url('/banner.jpg')" bgPosition="100% 32%">
      <Content />
    </Flex>
  );
}
