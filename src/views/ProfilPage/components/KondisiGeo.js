import { Flex, ListItem, OrderedList, Text, Box } from '@chakra-ui/react';  

const KondisiGeo = () => {  
  return (  
    <Flex flexDirection="column" fontFamily="heading" gap={4}>  
      <Text fontWeight="600" fontSize="35px">  
        Kondisi Geografis  
      </Text>  
      <Text>  
        Provinsi Sulawesi Utara merupakan salah satu provinsi yang terletak di  
        Indonesia, berada pada posisi 124° - 127° Bujur Timur (BT) dan 1° - 4° Lintang Utara (LU), dengan luas wilayah sekitar  
        15.000 km².   
      </Text>  
      <Box>  
        <Text fontWeight={700}>Dengan rincian sebagai berikut :</Text>  
        <OrderedList>  
          <ListItem>Permukiman : X Km²</ListItem>  
          <ListItem>Persawahan : X Km²</ListItem>  
          <ListItem>Tegal : X Km²</ListItem>  
          <ListItem>Perkebunan : X Km²</ListItem>  
          <ListItem>Hutan : X Km²</ListItem>  
          <ListItem>Tambak/Kolam : X Km²</ListItem>  
          <ListItem>Pulau : X Km²</ListItem>  
          <ListItem>Lain-lain : X Km²</ListItem>  
        </OrderedList>  
      </Box>  
      <Box>  
        <Text fontWeight={700}>Wilayah Provinsi Sulawesi Utara berbatasan dengan :</Text>  
        <OrderedList>  
          <ListItem>Sebelah Utara : Laut Sulawesi</ListItem>  
          <ListItem>  
            Sebelah Timur : Provinsi Maluku  
          </ListItem>  
          <ListItem>Sebelah Barat : Provinsi Gorontalo</ListItem>  
          <ListItem>  
            Sebelah Selatan : Provinsi Sulawesi Tengah  
          </ListItem>  
        </OrderedList>  
      </Box>  
      <Box>  
        <Text>  
        Dilihat dari geografisnya, Provinsi Sulawesi Utara terletak di pulau Sulawesi dengan pegunungan yang membujur dari Barat ke Timur, yaitu Gunung Klabat, Gunung Soputan, dan Gunung Lokon. Selain itu terdapat gunung lainnya, yaitu Gunung Manado Tua dan Gunung Tumpa. Dilihat dari ketinggian, berada pada 0-3000 m di atas permukaan laut dengan temperatur rata-rata 27°C – 30°C.  
        </Text>  
      </Box>  
      <Box>  
        <Text>  
        Lokasi Provinsi Sulawesi Utara yang berada di sekitar garis khatulistiwa menyebabkan daerah ini mengalami perubahan iklim dua jenis setiap tahun, yaitu musim kemarau dan musim penghujan. Untuk musim kemarau berkisar pada bulan April hingga bulan Oktober dengan rata-rata curah hujan + 29,5 mm per hari hujan, sedangkan musim penghujan dari bulan Oktober hingga bulan April dengan rata-rata curah hujan + 229 mm per hari hujan. Curah hujan yang cukup tinggi terjadi pada bulan Desember sampai dengan bulan Maret dengan rata-rata curah hujan + 360 mm per hari hujan. Di antara dua musim tersebut terdapat musim pancaroba yang biasanya ditandai dengan tiupan angin kering yang cukup kencang yang berhembus dari arah Tenggara ke Barat Laut biasa disebut “Angin Gending”.  
        </Text>  
      </Box>  
      <Box>  
        <Text>  
        Selain itu, Provinsi Sulawesi Utara memiliki beberapa obyek wisata yaitu Bunaken, Taman Nasional Bunaken, Danau Tondano, Air Terjun Tumpah, dan Pantai Manado yang mencerminkan keindahan alamnya.  
        </Text>  
      </Box>  
      <Box>  
        <Text>  
        Adapun pembagian wilayah administratif, secara yuridis formal dibentuk dengan Undang-Undang Nomor 12 Tahun 1950 Tentang Pembentukan Daerah-daerah Kabupaten Dalam Lingkungan Provinsi Sulawesi Utara, yang terdiri dari beberapa wilayah Kecamatan, Desa, dan Kelurahan.  
        </Text>  
      </Box>  
    </Flex>  
  );  
};  

export default KondisiGeo;