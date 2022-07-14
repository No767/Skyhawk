import { FC } from "react";
import React from "react";
import NextLink from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Show,
  Hide,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Button,
  HStack,
  Flex,
  Spacer,
//   Avatar,
  VStack,
} from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

export const NavBarMain: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <>
      <Flex alignItems="center" pt={5} mx={5}>
        {/* Most of these are pulled from Kumiko's Next.js website */}
        {/* <NextLink href="/" passHref>
          <Avatar
            height={16}
            width={16}
            src="https://raw.githubusercontent.com/No767/Kumiko/dev/assets/kumiko.jpg"
            as="a"
          />
        </NextLink> */}
        <Spacer />
        <Hide below="md">
          <HStack spacing={4} pt={5} mx={5} justify="flex-end">
            <IconButton
              aria-label="Switch to light or dark mode"
              variant="outline"
              borderColor="gray.500"
              size="lg"
              onClick={toggleColorMode}
              icon={<SwitchIcon />}
            />
            <NextLink href="https://github.com/No767/Skyhawk" passHref>
              <Button
                variant="outline"
                leftIcon={<SiGithub />}
                borderColor="gray.500"
                size="lg"
                as="a"
              >
                GitHub
              </Button>
            </NextLink>
            <NextLink href="/login" passHref>
              <Button variant="outline" borderColor="gray.500" size="lg" as="a">
                Login
              </Button>
            </NextLink>
          </HStack>
        </Hide>
        <Show below="md">
          <IconButton
            // @ts-ignore
            ref={btnRef}
            aria-label="Open Navbar"
            size="lg"
            colorScheme="white"
            borderColor="gray.500"
            onClick={onOpen}
            variant="outline"
            icon={<AiOutlineMenu />}
          />

          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <VStack spacing={4} pt={15}>
                  <IconButton
                    aria-label="Switch to light or dark mode"
                    variant="outline"
                    borderColor="gray.500"
                    size="lg"
                    onClick={toggleColorMode}
                    icon={<SwitchIcon />}
                  />
                  <NextLink href="https://github.com/No767/Skyhawk" passHref>
                    <Button
                      variant="outline"
                      leftIcon={<SiGithub />}
                      borderColor="gray.500"
                      size="lg"
                      as="a"
                    >
                      GitHub
                    </Button>
                  </NextLink>
                  <NextLink href="/login" passHref>
                    <Button
                      variant="outline"
                      borderColor="gray.500"
                      size="lg"
                      as="a"
                    >
                      Login
                    </Button>
                  </NextLink>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Show>
      </Flex>
    </>
  );
};