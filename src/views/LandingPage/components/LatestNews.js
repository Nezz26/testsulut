import {
  Flex,
  Text,
  // Link,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Badge,
  CardFooter,
  Button,
  // Box,
} from '@chakra-ui/react';

const LatestNews = () => {
  return (
    <Flex flexDirection={'column'} p={{ lg: '40px' }} m={{ lg: '5px' }}>
      <Text
        fontFamily={'heading'}
        fontSize={{ base: '25px', md: '35px', lg: '40px' }}
        fontWeight={700}
        mb={{base: "5px", lg: '10px' }}
        ml={{base: "5px", lg: '10px' }}
        color="#4F7BA6"
      >
        Berita Terbaru
      </Text>
      <Grid
        templateRows={{ base : "", lg : "repeat(2, 1fr)" }}
        templateColumns={{ base : "1fr", lg : "repeat(2, 1fr)" }}
        gap={3}
        m="10px"
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Card
            // size="md"
            _hover={{
              transform: 'translateY(-5px)',
              transition: 'transform 0.3s',
            }}
            h="100%"
            m={{ base: "3" }}
          >
            <Image
              src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/28/2024/03/07/IMG_8219-2906751044.jpeg"
              borderRadius="lg"
              m={3}
            />
            <CardHeader pb={0}>
              <Badge colorScheme="green" fontSize="md" mb="2" fontFamily="default">
                22 / 09 / 2024
              </Badge>
              <Heading size={{ base : "sm" , lg : "md" }}>
              Mutasi Polri: Kapolri Rombak Pejabat Polda Sulut, Ini Daftar Direktur, Karo, dan Kapolres yang Baru
              </Heading>
            </CardHeader>
            <CardBody fontFamily="body" pb={0}>
              <Text fontSize={{ lg : "lg", base : "sm" }} >
              Mutasi Kapolri Jenderal Listyo Sigit Prabowo tertanggal 20 September 2024. Selain Kapolda yang segera dijabat Irjen Pol Roycke Langie, sejumlah pejabat utama hingga kapolres ikut diganti.
              </Text>
            </CardBody>
            <CardFooter>
              <Button fontFamily={'heading'} colorScheme="teal">
                Pemerintah
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem colSpan={1} >
          <Card
            size="lg"
            _hover={{
              transform: 'translateY(-5px)',
              transition: 'transform 0.3s',
            }}
            h="100%"
            m={{ base: "3" }}
          >
            <CardHeader pb={0}>
              <Badge colorScheme="green" fontSize="md" mb="2" fontFamily="default">
                22 / 09 / 2024
              </Badge>
              <Heading size={{ base : "sm" , lg : "md" }}>
              Berapa Harta Kekayaan Paslon Gubernur dan Wagub Sulut Nomor Urut 2 E2L dan HJP? Cek Rinciannya di Sini!
              </Heading>
            </CardHeader>
            <CardBody fontFamily="body" pb={0}>
              <Text fontSize={{ lg : "lg", base : "sm" }} >
              dr Elly Engelbert Lasut ME (E2L) dan Hanny Joost Pajouw SEAk ME (HJP) resmi ditetapkan sebagai pasangan calon gubernur dan wakil gubernur (wagub) Sulawesi Utara (Sulut) oleh KPU pada 22 September 2024.
              </Text>
            </CardBody>
            <CardFooter>
              <Button fontFamily={'heading'} colorScheme="teal">
                Politik
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem colSpan={1}>
          <Card
          size="md"
            _hover={{
              transform: 'translateY(-5px)',
              transition: 'transform 0.3s',
            }}
            h="100%"
            m={{ base: "3" }}
          >
            <CardHeader pb={0}>
              <Badge colorScheme="green" fontSize="md" mb="2" fontFamily="default">
                26 / 09 / 2024
              </Badge>
              <Heading size={{ base : "sm" , lg : "md" }}>
              KABAR GEMBIRA… Prabowo Bangun Sekolah Taruna di Kampung Halamannya Langowan, OD Siapkan Lahan 20 Hektar
              </Heading>
            </CardHeader>
            <CardBody fontFamily="body" pb={0}>
              <Text fontSize={{ lg : "lg", base : "sm" }}  >
              Minahasa, Sulawesi Utara memang menjadi fokus perhatian Presiden Terpilih Prabowo Subianto karena kampung halaman ibundanya Dora Sigar.
              </Text>
            </CardBody>
            <CardFooter>
              <Button fontFamily={'heading'} colorScheme="teal">
                Kemasyarakatan
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default LatestNews;
