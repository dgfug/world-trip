import { Flex, Text, Image } from "@chakra-ui/react";

interface ContentProps {
  iconName: string;
  typeTravel: string;
}

export default function Content({ iconName, typeTravel }: ContentProps) {
  return (
    <Flex direction="column" align="center">
      <Image w={85} h={85} src={`/icons/${iconName}.svg`} alt="Ícone da Viagem" />
      <Text mt="6" fontSize="2xl" fontWeight="600" color="gray.450">
        {typeTravel}
      </Text>
    </Flex>
  );
}
