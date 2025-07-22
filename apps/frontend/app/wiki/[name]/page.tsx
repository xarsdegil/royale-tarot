import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import cards from "../../data/cards.json";
import useIsMobile from "../../hooks/useIsMobile";
import { imgPrefix } from "../../utils/const";
import { t } from "@royale/common";

export default function CardDetail() {
  const router = useRouter();
  const { name } = router.query;
  const card = cards.find(
    (card) =>
      card.name.replace(/\s+/g, "-").toLowerCase() ===
      (typeof name === "string" ? name : "")
  );
  const isMobile = useIsMobile();

  const textPurple = useColorModeValue("purple.600", "purple.300");

  if (!card) return <Box p={8}>Card not found</Box>;

  return (
    <Box p={8} maxW="800px" mx="auto">
      <Heading mb={6} textAlign="center">
        {card.name}
      </Heading>
      {isMobile ? (
        <VStack align="flex-start" spacing={4}>
          <Img
            objectFit="contain"
            boxSize="240px"
            src={imgPrefix + card.link}
            borderRadius={8}
            alignSelf="center"
          />
          <Heading fontSize="lg">Description: </Heading>
          <Text>{card.description}</Text>
          <Heading fontSize="lg">Upright: </Heading>
          <Text>{card.normal}</Text>
          <Heading fontSize="lg">Reversed: </Heading>
          <Text>{card.reversed}</Text>
          <Heading fontSize="lg">More info: </Heading>
          <Link href={card.detail} isExternal color={textPurple}>
            {t('card.view')} <ExternalLinkIcon mx="2px" />
          </Link>
        </VStack>
      ) : (
        <HStack gap="32px" align="flex-start">
          <Img
            objectFit="contain"
            boxSize="240px"
            src={imgPrefix + card.link}
            borderRadius={8}
          />
          <VStack align="flex-start" spacing={4} flex={1}>
            <Heading fontSize="lg">Description: </Heading>
            <Text>{card.description}</Text>
            <Heading fontSize="lg">Upright: </Heading>
            <Text>{card.normal}</Text>
            <Heading fontSize="lg">Reversed: </Heading>
            <Text>{card.reversed}</Text>
            <Heading fontSize="lg">More info: </Heading>
            <Link href={card.detail} isExternal color={textPurple}>
              {t('card.view')} <ExternalLinkIcon mx="2px" />
            </Link>
          </VStack>
        </HStack>
      )}
      <Button
        mt={8}
        onClick={() => router.back()}
        colorScheme="purple"
        variant="outline"
      >
        {t('card.back')}
      </Button>
    </Box>
  );
}
