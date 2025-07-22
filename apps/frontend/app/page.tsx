import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  HStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useIsMobile from "../hooks/useIsMobile";
import useWindowWidth from "../hooks/useWindowWidth";
import textRandom from "../public/text-random.svg";
import textTarot from "../public/text-tarot.svg";

import { t } from "@royale/common";

export default function Home() {
  const isMobile = useIsMobile();

  const textWidth = useWindowWidth() * (isMobile ? 0.9 : 0.7);
  const randomWidth = 0.571 * textWidth;
  const tarotWidth = 0.429 * textWidth;
  const textHeight = 0.786 * tarotWidth;

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{t('home.title')}</title>
      </Head>
      <Flex
        height={"90vh"}
        direction="column"
        justify="center"
        align="center"
        gap={isMobile ? "100px" : undefined}
      >
        <HStack>
          <Image
            alt="random"
            src={textRandom}
            width={randomWidth}
            height={textHeight}
          />
          <Image
            alt="tarot"
            src={textTarot}
            width={tarotWidth}
            height={textHeight}
          />
        </HStack>
        <HStack>
          <IconButton
            aria-label="Toggle Color Mode"
            colorScheme="yellow"
            onClick={toggleColorMode}
            padding={0}
            size={"lg"}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          ></IconButton>
          <Link href="/wiki">
            <Button colorScheme="purple" size="lg">
              {t('home.wiki')}
            </Button>
          </Link>
          <Link href="/select">
            <Button colorScheme="teal" size="lg">
              {t('home.start')}
            </Button>
          </Link>
        </HStack>
      </Flex>
    </>
  );
}
