import { Flex, Text, Image } from "@chakra-ui/react";

export default function TravelTypes() {
  return (
    <Flex w="100%" maxWidth={1120} mx="auto" align="center" justify="space-between" mt="20" mb="20">
      <Flex direction="column" align="center">
        <Image w={85} h={85} src="/icons/cocktail.svg" alt="Logo World Trip" />
        <Text mt="6" fontSize="2xl" fontWeight="600" color="gray.450">
          vida noturna
        </Text>
      </Flex>

      <Flex direction="column" align="center">
        <Image w={85} h={85} src="/icons/surf.svg" alt="Logo World Trip" />
        <Text mt="6" fontSize="2xl" fontWeight="600" color="gray.450">
          praia
        </Text>
      </Flex>

      <Flex direction="column" align="center">
        <Image w={85} h={85} src="/icons/building.svg" alt="Logo World Trip" />
        <Text mt="6" fontSize="2xl" fontWeight="600" color="gray.450">
          moderno
        </Text>
      </Flex>

      <Flex direction="column" align="center">
        <Image w={85} h={85} src="/icons/museum.svg" alt="Logo World Trip" />
        <Text mt="6" fontSize="2xl" fontWeight="600" color="gray.450">
          clássico
        </Text>
      </Flex>

      <Flex direction="column" align="center">
        <Image w={85} h={85} src="/icons/earth.svg" alt="Logo World Trip" />
        <Text mt="6" fontSize="2xl" fontWeight="600" color="gray.450">
          e mais...
        </Text>
      </Flex>
    </Flex>
  );
}
