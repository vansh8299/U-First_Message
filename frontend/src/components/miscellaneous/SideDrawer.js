import {
  Avatar,
  Box,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuList,
  Square,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Flex, Spacer } from "@chakra-ui/react";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  return (
    <>
      <Flex
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Center>
          <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
            <Button varient="ghost">
              <i class="fas fa-search"></i>
              <Text d={{ base: "none", md: "flex" }} px={4}>
                Search User
              </Text>
            </Button>
          </Tooltip>
        </Center>

        <Square>
          <Text fontSize="4xl" fontFamily="Work sans" as="i">
            U-First-Message
          </Text>
        </Square>

        <Box>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
            {/*<MenuList></MenuList>*/}
          </Menu>
          <Menu>
            <MenuButton p={1} as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar size="sm" cursor="pointer" name="" />
            </MenuButton>
          </Menu>
        </Box>
      </Flex>
    </>
  );
};

export default SideDrawer;
