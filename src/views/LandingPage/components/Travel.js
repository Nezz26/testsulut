import {  
  Flex,  
  Text,  
  Grid,  
  GridItem,  
  useColorModeValue,  
} from '@chakra-ui/react';  
import CardTravel from '../../../components/CardTravel';  
import { TravelPlace } from '../../../variables/general'; // Ganti dengan variabel yang sesuai  

const Travel = () => {  
  return (  
    <Flex  
      flexDirection="column"  
      alignItems="center"  
      p={{ base: "25px", lg: "25" }}  
      bg={useColorModeValue('gray.300', 'blue.900')}  
    >  
      <Text  
        fontFamily={'heading'}  
        fontSize={{ base: '25px', md: '35px', lg: '45px' }}  
        fontWeight={700}  
        mb={{ base: '5px', md: "7px", lg: '10px' }}  
        mt={{ base: '15px', md: "18px", lg: '20px' }}  
        ml={{ base: '5px', md: "7px", lg: '10px' }}  
        color={useColorModeValue('blue.700', 'gray.100')}  
      >  
        Potensi Desa  
      </Text>  
      <Text  
        fontFamily="heading"  
        fontWeight="500"  
        color={useColorModeValue('blue.700', 'gray.100')}  
        textAlign="center"  
      >  
        Potensi-potensi yang ada di desa-desa di Kota Manado  
      </Text>  
      <Grid  
        templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3, 1fr)' }}  
        p={15}  
        gap={5}  
        mb={{ lg: "50px" }}  
      >  
        {TravelPlace.map(e => {  
          return (  
            <GridItem key={e.title}>  
              <CardTravel  
                title={e.title}  
                image={e.image}  
                location={e.location}  
              />  
            </GridItem>  
          );  
        })}  
      </Grid>  
    </Flex>  
  );  
};  

export default Travel;