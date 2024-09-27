import { Flex, ListItem, OrderedList, Text, Box } from '@chakra-ui/react';  

const KondisiGeo = () => {  
  return (  
    <Flex flexDirection="column" fontFamily="heading" gap={4}>  
      <Text fontWeight="600" fontSize="35px">  
        Kondisi Geografis  
      </Text>  
      <Text>  
        Kota Manado merupakan salah satu kota yang terletak di Provinsi Sulawesi Utara, berada pada posisi 124°50' – 125°30' Bujur Timur (BT) dan 1°30' – 1°50' Lintang Utara (LU), dengan luas wilayah sekitar 157,48 Km².  
      </Text>  
      <Box>  
        <Text fontWeight={700}>Dengan rincian sebagai berikut :</Text>  
        <OrderedList>  
          <ListItem>Permukiman : 45,00 Km²</ListItem>  
          <ListItem>Persawahan : 20,00 Km²</ListItem>  
          <ListItem>Tegal : 10,00 Km²</ListItem>  
          <ListItem>Perkebunan : 5,00 Km²</ListItem>  
          <ListItem>Hutan : 30,00 Km²</ListItem>  
          <ListItem>Tambak/Kolam : 2,00 Km²</ListItem>  
          <ListItem>Pulau : 1,00 Km²</ListItem>  
          <ListItem>Lain-lain : 64,48 Km²</ListItem>  
        </OrderedList>  
      </Box>  
      <Box>  
        <Text fontWeight={700}>Wilayah Kota Manado berbatasan dengan :</Text>  
        <OrderedList>  
          <ListItem>Sebelah Utara : Laut Sulawesi</ListItem>  
          <ListItem>Sebelah Timur : Kabupaten Minahasa Tenggara</ListItem>  
          <ListItem>Sebelah Barat : Kabupaten Minahasa</ListItem>  
          <ListItem>Sebelah Selatan : Kabupaten Minahasa Selatan</ListItem>  
        </OrderedList>  
      </Box>  
      <Box>  
        <Text>  
          Dilihat dari geografisnya, Kota Manado terletak di sekitar pegunungan yang membujur dari Barat ke Timur, yaitu Gunung Klabat dan Gunung Soputan. Dilihat dari ketinggian, berada pada 0-1.500 m di atas permukaan laut dengan temperatur rata-rata 27°C – 30°C.  
        </Text>  
      </Box>  
      <Box>  
        <Text>  
          Lokasi Kota Manado yang berada di sekitar garis khatulistiwa menyebabkan daerah ini mengalami perubahan iklim dua jenis setiap tahun, yaitu musim kemarau dan musim penghujan. Untuk musim kemarau berkisar pada bulan April hingga bulan Oktober dengan rata-rata curah hujan + 29,5 mm per hari hujan, sedangkan musim penghujan dari bulan Oktober hingga bulan April dengan rata-rata curah hujan + 229 mm per hari hujan. Curah hujan yang cukup tinggi terjadi pada bulan Desember sampai dengan bulan Maret dengan rata-rata curah hujan + 360 mm per hari hujan. Di antara dua musim tersebut terdapat musim pancaroba yang biasanya ditandai dengan tiupan angin kering yang cukup kencang yang berhembus dari arah Tenggara ke Barat Laut biasa disebut “Angin Gending”.  
        </Text>  
      </Box>  
      <Box>  
        <Text>  
          Selain itu, Kota Manado memiliki beberapa obyek wisata yaitu Bunaken, Air Terjun Tumpa, Pulau Siladen, Pantai Malalayang, dan Taman Nasional Bunaken yang mencerminkan keindahan alam bawah laut.  
        </Text>  
      </Box>  
      <Box>  
        <Text>  
          Adapun pembagian wilayah administratif, secara yuridis formal dibentuk dengan Undang-Undang Nomor 12 Tahun 1950 Tentang Pembentukan Daerah-daerah Kota Dalam Lingkungan Propinsi Sulawesi Utara, yang terdiri dari 11 wilayah Kecamatan, 87 Kelurahan, dan 1.000 Rukun Warga (RW) serta 4.000 Rukun Tetangga (RT).  
        </Text>  
      </Box>  
    </Flex>  
  );  
};  

export default KondisiGeo;