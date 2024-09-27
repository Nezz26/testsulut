import { Flex, Text, Box, Badge, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Hero = () => {
  const bgImage =
    'https://images.unsplash.com/photo-1612091508912-2136973784c3?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const badgeColorScheme = 'blue';
  const badgeFontSize = '0.9em';

  return (
    <Flex
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      height={{ base: '200px', md: '300px', lg: '800px' }}
      justifyContent="center"
      alignItems="center"
      mb="30px"
    >
      <Box
        flexDirection="column"
        boxSize={{ base: 'fit-content', md: 'fit-content', lg: 'max-content' }}
        textAlign="center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 2,
          }}
        >
          <Text
            fontSize={{ base: '20px', md: '60px', lg: '100px' }}
            fontFamily="heading"
            fontWeight="900"
            color="gray.50"
            mb={{ base: '10px', md: '20px' }}
          >
            WELCOME TO NORTH SULAWESI
          </Text>
        </motion.div>

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 5,
        }}
        >

        <Text
          fontFamily="heading"
          color="gray.50"
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
        >
          Terwujudnya Sulawesi Utara Yang
          <Badge
            variant="subtle"
            colorScheme={badgeColorScheme}
            fontSize={badgeFontSize}
            m={'0px 2px'}
          >
            Sejahtera,
          </Badge>
          <Badge
            variant="subtle"
            colorScheme={badgeColorScheme}
            fontSize={badgeFontSize}
            m={'0px 2px'}
          >
            Berkeadilan
          </Badge>
          ,
          <Badge
            variant="subtle"
            colorScheme={badgeColorScheme}
            fontSize={badgeFontSize}
            m={'0px 2px'}
          >
            Mandiri
          </Badge>
          ,
          <Badge
            variant="subtle"
            colorScheme={badgeColorScheme}
            fontSize={badgeFontSize}
            m={'0px 2px'}
          >
            Berwawasan Lingkungan
          </Badge>
          dan
          <Badge
            variant="subtle"
            colorScheme={badgeColorScheme}
            fontSize={badgeFontSize}
            m={'0px 2px'}
          >
            Berakhlak Mulia.
          </Badge>
        </Text>
        </motion.div>

      </Box>
    </Flex>
  );
};

export default Hero;
