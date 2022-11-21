import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/image-1.jpg';
import img2 from '../assets/image-2.jpg';
import img3 from '../assets/image-3.jpg';
import img4 from '../assets/image-4.jpg';
import img5 from '../assets/image-5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '15%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: 'xl',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel></MyCarousel>
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          color={'teal.300'}
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid '}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} w={['40', '400']}></Image>
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign="center"
            fontStyle={'italic'}
          >
            We are best gaming service provider you've ever experienced. We
            gives you lots of benefits with service. Ipsum dolor sit amet
            consectetur adipisicing elit. Ad nemo tempora deleniti quod, est eos
            veniam autem asperiores rem, nam laudantium ut, similique ducimus
            amet sequi et voluptas iusto rerum at aliquid numquam corporis ipsa
            reprehenderit? Porro iusto magnam, sit vero deleniti, non nemo rem
            accusamus neque, quibusdam ab. Libero, reprehenderit recusandae
            labore eaque, aspernatur aliquid modi soluta ullam voluptatum unde
            repellat in molestias quod? Doloribus ratione illum quisquam earum
            consequuntur nam voluptatem, velit culpa maiores. Inventore esse
            illum excepturi dolores est natus aliquid maiores sunt omnis
            deserunt accusantium amet enim eos adipisci minima hic, nam
            provident quo aperiam quasi vel? Dignissimos accusantium aliquid aut
            vel explicabo voluptatum molestias fugit harum reprehenderit
            incidunt. Quis cumque explicabo omnis officiis autem dolorum! We are
            the Beast.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => {
  return (
    <Box>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w={'full'} h={'100vh'}>
          <Image src={img1}></Image>
          <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
            Watch The Future
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img2}></Image>
          <Heading bg={'whiteAlpha.700'} color={'black'} {...headingOptions}>
            Future is Gaming
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img3}></Image>
          <Heading bg={'blackAlpha.700'} color={'white'} {...headingOptions}>
            Gaming on Console
          </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Image src={img4}></Image>
          <Heading bg={'blackAlpha.400'} color={'white'} {...headingOptions}>
            Nighty Fighty
          </Heading>
        </Box>
      </Carousel>
    </Box>
  );
};

export default Home;
