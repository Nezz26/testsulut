import {
  Flex,
  ListItem,
  Text,
  OrderedList,
  Box,
} from '@chakra-ui/react';

const VisiMisi = () => {
  return (
    <Flex flexDirection="column">
      <Box my={5}>
        <Text fontFamily="heading" fontWeight="600" fontSize="35px">
          Visi Misi
        </Text>
        <Text fontFamily="heading" fontSize="25px">
          Visi
        </Text>
        <Text fontFamily="heading">
          Terwujudnya Sulawesi Utara sebagai Pintu Gerbang Indonesia ke Asia Pasifik yang Berdaya Saing, Berbudaya, Sejahtera, dan Berwawasan Lingkungan.
        </Text>
      </Box>
      <Box>
        <Text fontFamily="heading" fontSize="25px">
          Misi
        </Text>
        <OrderedList fontFamily="heading">
          <ListItem>
            Meningkatkan kualitas sumber daya manusia yang berdaya saing, profesional, dan berakhlak mulia.
          </ListItem>
          <ListItem>
            Mewujudkan ekonomi yang mandiri dan berdaya saing berbasis potensi lokal serta pelestarian lingkungan hidup.
          </ListItem>
          <ListItem>
            Meningkatkan kualitas hidup masyarakat melalui pembangunan infrastruktur yang merata dan berkelanjutan.
          </ListItem>
          <ListItem>
            Mengembangkan tata kelola pemerintahan yang bersih, transparan, dan akuntabel.
          </ListItem>
          <ListItem>
            Memperkuat harmoni sosial dan budaya untuk mendukung ketentraman dan ketertiban di masyarakat.
          </ListItem>
        </OrderedList>
      </Box>
    </Flex>
  );
};

export default VisiMisi;
