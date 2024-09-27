import React from 'react';
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  Link,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
// import { ReactComponent as LogoSvg } from '../assets/LogoDaerah.svg';
import LogoDaerah from '../assets/Logo_Daerah.png';
import LogoDaerahKabProb from '../assets/Unsrat.png';

const Logo = props => {
  return (
    <svg
      height={32}
      viewBox="0 0 120 30"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* SVG path data */}
      {/* <LogoSvg /> */}
    </svg>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.100', '#1C395A')}
      color={useColorModeValue('gray.700', 'gray.200')}
      fontFamily={'heading'}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 2fr 1fr 1fr 2fr' }}
          spacing={4}
        >
          <Box>
            <Image
              src={LogoDaerahKabProb}
              boxSize={{ base: '100px', md: '200px' }}
              fit={'contain'}
            />
          </Box>
          <Stack spacing={3}>
            <Text fontSize={'lg'} fontWeight={'bold'}>
              Kab Iyo-iyo
            </Text>
            <Text fontSize={'sm'}>
              Dinas Kominfo Jalan: Raya Panglima Dimana-mana Hatimu Senang
            </Text>
            
            <Link href="https://instagram.com/neziahp" ml={1}>© 2024 @neziahp</Link>
            <Text fontSize={'sm'}></Text>
            <Text fontSize={'sm'}></Text>
            
          </Stack>
          
          
          <Stack align={'flex-start'}>
            <ListHeader></ListHeader>
            <Stack direction={'row'}>
              
              
            </Stack>
            
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
