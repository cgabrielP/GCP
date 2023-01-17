import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaShoppingBag } from "react-icons/fa";
import {
  Stack,
  Box,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Button,
} from "@chakra-ui/react";
import React from "react";
import NavLinks from "./NavLinks";

function NavItems({ isOpen }) {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Menu>
          <MenuButton
            as="button"
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
          </MenuList>
        </Menu>

        <NavLinks to="/SignIn">
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Sign In
          </Button>
        </NavLinks>
        <NavLinks to="/SignUp">
          <Button
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Button>
        </NavLinks>
        <NavLinks to="/bag">
          <Icon as={FaShoppingBag} />
        </NavLinks>
      </Stack>
    </Box>
  );
}

export default NavItems;
