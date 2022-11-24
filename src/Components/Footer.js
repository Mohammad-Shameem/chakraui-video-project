import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineSend,
  AiOutlineCopyrightCircle,
  AiOutlineYoutube,
  AiFillGithub,
  AiFillInstagram,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box
      bgColor={'blackAlpha.900'}
      h={['480px', '255px']}
      p={'16'}
      color={'white'}
    >
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            textAlign={['center', 'left']}
            size={'md'}
            textTransform={'uppercase'}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid teal'} py={'2'}>
            <Input
              type="text"
              placeholder="Enter your Email"
              p={'2'}
              mr={'2'}
              border={'none'}
              borderRadius={'none'}
              focusBorderColor={'none'}
            ></Input>
            <Button
              p={'0'}
              colorScheme={'teal'}
              variant={'ghost'}
              borderRadius={'0 35px 35px 0'}
            >
              <AiOutlineSend size={20}></AiOutlineSend>
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderRight={['none', '1px solid teal']}
          borderLeft={['none', '1px solid teal']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            video hub
          </Heading>
          <Text
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <HStack position={'absolute'} bottom={'5'}>
              <h3>All right reserved</h3>{' '}
              <AiOutlineCopyrightCircle></AiOutlineCopyrightCircle>
            </HStack>
          </Text>
        </VStack>
        <VStack w={'full'}>
          <Heading textTransform={'uppercase'} size={'md'}>
            social media
          </Heading>
          <Button colorScheme={'red'} p={'0'} borderRadius="full">
            {' '}
            <a href="https://youtube.com" target="_blank">
              <AiOutlineYoutube fontSize={'30px'}></AiOutlineYoutube>
            </a>
          </Button>
          <Button colorScheme={'whiteAlpha'} p={'0'} borderRadius="full">
            {' '}
            <a href="https://github.com/Mohammad-Shameem" target="_blank">
              <AiFillGithub fontSize={'30px'}></AiFillGithub>
            </a>
          </Button>
          <Button colorScheme={'whiteAlpha'} p={'0'} borderRadius="full">
            {' '}
            <a href="https://instagram.com" target="_blank">
              <AiFillInstagram fontSize={'30px'}></AiFillInstagram>
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
