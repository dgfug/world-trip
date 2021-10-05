import { Flex, Text, Image, Box, Stack } from "@chakra-ui/react";

export default function Content() {
  return (
    <Flex w="100%" maxWidth={1120} mx="auto" align="center" justify="space-between">
      <Stack spacing="5">
        <Text fontSize="4xl" fontWeight="500" color="gray.150">
          5 Continentes,
          <br />
          Infinitas possibilidades.
        </Text>

        <Text fontSize="xl" color="gray.250" maxW={550}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>

      <Box>
        <Image src="/airplane.svg" alt="Avião nas nuvens" transform="translateY(72px)" />
      </Box>
    </Flex>
  );
}
