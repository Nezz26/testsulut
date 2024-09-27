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
import LogoDaerahKabProb from '../assets/Logo_Kabupaten_Probolinggo_-_Seal_of_Probolinggo_Regency.png';

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
              Sulawesi Utara
            </Text>
            <Text fontSize={'sm'}>
              Universitas Sam Ratulangi, Fakultas Teknik Elektro, Profi Informatika
            </Text>
            <Text fontSize={'sm'}>© 2023 
            <Link href="https://instagram.com/neziahp/" ml={1}>Neziahp</Link>
            </Text>
            
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                label={'Twitter'}
                href={'https://twitter.com/'}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={'YouTube'}
                href={
                  'https://www.youtube.com/'
                }
              >
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={'Facebook'}
                href={'https://www.facebook.com/'}
              >
                <FaFacebook />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader></ListHeader>
            <Box as="a" href={'#'}>
              
            </Box>
            <Box as="a" href={'#'}>
              
            </Box>
            <Box as="a" href={'#'}>
              
            </Box>
            <Box as="a" href={'#'}>
              
            </Box>
            <Box as="a" href={'#'}>
              
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader></ListHeader>
            <Box as="a" href={'#'}>
              
            </Box>
            <Box as="a" href={'#'}>
              
            </Box>
            <Box as="a" href={'#'}>
              
            </Box>
            <Box as="a" href={'#'}>
              
            </Box>
            <Box as="a" href={'#'}>
              
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader></ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('blue.400', 'blue.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'blue.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
            
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
