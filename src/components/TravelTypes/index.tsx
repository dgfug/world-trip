import { Flex } from "@chakra-ui/react";
import Content from "./Content";

export default function TravelTypes() {
  return (
    <Flex w="100%" maxWidth={1120} mx="auto" align="center" justify="space-between" mt="20" mb="20">
      <Content iconName="cocktail" typeTravel="vida noturna" />
      <Content iconName="surf" typeTravel="praia" />
      <Content iconName="building" typeTravel="moderno" />
      <Content iconName="museum" typeTravel="clássico" />
      <Content iconName="earth" typeTravel="e mais..." />
    </Flex>
  );
}
