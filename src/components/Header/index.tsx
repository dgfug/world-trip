import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex w="100vw" h="24" align="center" justify="center">
      <Image src="/logo.svg" alt="Logo World Trip" />
    </Flex>
  );
}
