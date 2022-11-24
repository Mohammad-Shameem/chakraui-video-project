import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  DrawerHeader,
  VStack,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import { IoIosCloseCircle } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { BsFillCollectionPlayFill } from 'react-icons/bs';
import { ImUpload } from 'react-icons/im';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        position={'fixed'}
        zIndex={'overlay'}
        top={'4'}
        left={'4'}
        colorScheme={'teal'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>VIDEO HUB</DrawerHeader>

          <Button
            position={'fixed'}
            top={'4'}
            right={'4'}
            colorScheme={'teal'}
            p={'0'}
            w={'10'}
            h={'10'}
            borderRadius={'full'}
            onClick={onClose}
          >
            <IoIosCloseCircle fontSize={'22'} />
          </Button>
          <DrawerBody>
            <VStack>
              <Button
                onClick={onClose}
                borderRadius={'full'}
                backgroundColor={'teal'}
                color={'white'}
                _hover={{ backgroundColor: 'teal' }}
                w={'60px'}
                h={'60px'}
              >
                <Link to={'/home'}>
                  <Flex
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <AiFillHome fontSize={'18'} />
                    <small>Home</small>
                  </Flex>
                </Link>
              </Button>
              <Button
                onClick={onClose}
                borderRadius={'full'}
                backgroundColor={'teal'}
                color={'white'}
                _hover={{ backgroundColor: 'teal' }}
                w={'60px'}
                h={'60px'}
              >
                <Link to={'/videos'}>
                  <Flex
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <BsFillCollectionPlayFill fontSize={'18'} />
                    <small>Videos</small>
                  </Flex>
                </Link>
              </Button>
              <Button
                onClick={onClose}
                borderRadius={'full'}
                backgroundColor={'teal'}
                color={'white'}
                _hover={{ backgroundColor: 'teal' }}
                w={'60px'}
                h={'60px'}
              >
                <Link to={'/videos?categories=free'}>
                  <Flex
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <BsFillCameraVideoFill fontSize={'18'} />
                    <small>
                      Free
                      <br />
                      Videos
                    </small>
                  </Flex>
                </Link>
              </Button>
              <Button
                onClick={onClose}
                borderRadius={'full'}
                backgroundColor={'teal'}
                color={'white'}
                _hover={{ backgroundColor: 'teal' }}
                w={'60px'}
                h={'60px'}
              >
                <Link to={'/upload'}>
                  <Flex
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <ImUpload fontSize={'18'} />
                    <small>Upload</small>
                  </Flex>
                </Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={'3'}
              justifyContent={'space-evenly'}
              w={'full'}
              left={'0'}
            >
              <Button colorScheme={'teal'} onClick={onClose}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                colorScheme={'teal'}
                variant={'outline'}
                onClick={onClose}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
