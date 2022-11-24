import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Uplaod = () => {
  return (
    <Container maxW={'container.lg'} h={'100vh'} p={'16'}>
      <VStack color={'teal.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'}></AiOutlineCloudUpload>
        <HStack p={'20'}>
          <Input
            type={'file'}
            required
            css={{
              '&::file-selector-button': {
                border: 'none',
                width: 'calc(100%+36px)',
                height: '100%',
                marginLeft: '-18px',
                color: 'teal',
                background: 'white',
                cursor: 'pointer',
              },
            }}
          ></Input>
          <Button
            colorScheme={'teal'}
            type={'submit'}
            p={'0'}
            borderRadius={'full'}
          >
            {' '}
            <AiOutlineCloudUpload size={'30'}></AiOutlineCloudUpload>
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Uplaod;
