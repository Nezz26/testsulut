import {
  Badge,
  Box,
  Flex,
  Highlight,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import LogoDaerah from '../../../assets/Logo_Daerah.png';

const LogoKabupaten = () => {
  return (
    <Flex fontFamily="heading" flexDirection="column" gap={4}>
      <Text fontWeight="600" fontSize="35px">
        Logo Sulawesi Utara
      </Text>
      <Box display="flex" justifyContent="center">
        <Image
          src={LogoDaerah}
          boxSize={{ base: '150px', md: '250px', lg: '300px' }}
          fit={'contain'}
        />
      </Box>
      <Box>
        <Text fontSize="25px">Makna Lambang Provinsi Sulawesi Utara</Text>
        <UnorderedList>
          <ListItem>
            Bintang kuning melambangkan ketuhanan yang menjadi landasan spiritual bagi masyarakat Sulawesi Utara.
          </ListItem>
          <ListItem>
            Gunung Klabat yang merupakan gunung tertinggi di Sulawesi Utara dan simbol keteguhan serta kekuatan.
          </ListItem>
          <ListItem>
            Padi dan kapas melambangkan kesejahteraan dan kemakmuran, simbol dari harapan masyarakat untuk hidup yang makmur dan sejahtera.
          </ListItem>
          <ListItem>
            Warna biru pada perisai melambangkan kesetiaan, ketenangan, dan kedamaian.
          </ListItem>
          <ListItem>
            Laut melambangkan wilayah pesisir dan kelautan Sulawesi Utara yang kaya akan sumber daya alam.
          </ListItem>
          <ListItem>
            Rantai melambangkan persatuan yang kuat antara masyarakat Sulawesi Utara dari berbagai latar belakang.
          </ListItem>
          <ListItem>
            Pohon kelapa sebagai simbol utama karena kelapa merupakan komoditas unggulan daerah ini.
          </ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <Text fontSize="25px">Makna Warna-warna Yang Digunakan :</Text>
        <UnorderedList>
          <ListItem>
            Warna Kuning berarti : Kemuliaan, keluhuran, keagungan.
          </ListItem>
          <ListItem>
            Warna Hijau berarti : Kesuburan, kemakmuran, dan kesejahteraan.
          </ListItem>
          <ListItem>
            Warna Biru berarti : Ketenangan, kedamaian, dan kesetiaan.
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default LogoKabupaten;
