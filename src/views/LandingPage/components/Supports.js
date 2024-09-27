import React from 'react';  
import {  
  Box,  
  Image,  
  Text,  
  useColorModeValue,  
  Modal,  
  ModalOverlay,  
  ModalContent,  
  ModalCloseButton,  
  ModalBody,  
  useDisclosure,  
} from '@chakra-ui/react';  
import spt from '../../../assets/supports/image 5.png';  
import { institutionSupports } from '../../../variables/general';  

const Supports = () => {  
  const bgSupport = useColorModeValue("transparent", "gray.200");  
  const { isOpen, onOpen, onClose } = useDisclosure();  
  const [selectedImage, setSelectedImage] = React.useState('');  

  const handleImageClick = (imageSrc) => {  
    setSelectedImage(imageSrc);  
    onOpen();  
  };  

  return (  
    <Box textAlign="center" mt={100}>  
      <Text  
        fontFamily={'heading'}  
        fontSize={{ base: '25px', md: '35px', lg: '45px' }}  
        fontWeight={700}  
        mb={{ base: '5px', md: '7px', lg: '10px' }}  
        mt={{ base: '15px', md: '18px', lg: '20px' }}  
        ml={{ base: '5px', md: '7px', lg: '10px' }}  
        color={useColorModeValue('blue.700', 'gray.100')}  
      >  
        Gallery Desa  
      </Text>  
      <Box display="flex" flexWrap="wrap" justifyContent="center">  
        {institutionSupports.map((e, index) => {  
          return (  
            <Box key={index} onClick={() => handleImageClick(e.image)} m={2}>  
              <Image  
                src={e.image}  
                alt={e.title}  
                objectFit="cover"  
                w={{ base: "100%", md: "300px", lg: "400px" }} // Ukuran gambar  
                h={{ base: "200px", md: "300px", lg: "400px" }} // Ukuran gambar  
                borderRadius="lg"  
                _hover={{ cursor: 'pointer', opacity: 0.8 }} // Efek hover  
              />  
            </Box>  
          );  
        })}  
      </Box>  

      {/* Modal untuk menampilkan gambar fullscreen */}  
      <Modal isOpen={isOpen} onClose={onClose} size="full">  
        <ModalOverlay />  
        <ModalContent>  
          <ModalCloseButton />  
          <ModalBody display="flex" justifyContent="center" alignItems="center">  
            <Image src={selectedImage} alt="Selected" maxH="90vh" />  
          </ModalBody>  
        </ModalContent>  
      </Modal>  
    </Box>  
  );  
};  

export default Supports;  

const supportBox = () => {  
  return (  
    <Box  
      w="300px"  
      h="150px"  
      border="3px solid black"  
      rounded="lg"  
      display="flex"  
      justifyContent="center"  
      alignItems="center"  
      _hover={{ bg: 'gray.100' }}  
    >  
      <Image src={spt} alt={'Youtube'} objectFit="contain" w="140px" />  
    </Box>  
  );  
};