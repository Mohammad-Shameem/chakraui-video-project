import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from "react-icons/bi"



const Header = () => {
  return <>
  <Button position={"fixed"} top={"4"} left={"4"} colorScheme={"purple"}>
  <BiMenuAltLeft></BiMenuAltLeft>
  </Button>
    </>;
};

export default Header;
