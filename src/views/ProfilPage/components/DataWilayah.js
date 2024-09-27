import {  
  AspectRatio,  
  Flex,  
  ListItem,  
  Text,  
  UnorderedList,  
} from '@chakra-ui/react';  

const DataWilayah = () => {  
  return (  
    <Flex direction={'column'}>  
      <Text fontFamily="heading" fontWeight="600" fontSize="35px">  
        Data Wilayah  
      </Text>  
      <UnorderedList fontFamily="heading" spacing={3}>  
        <ListItem>Nama Resmi : Provinsi Sulawesi Utara </ListItem>  
        <ListItem>Ibu Kota : Manado </ListItem>  
        <ListItem>Provinsi : Sulawesi Utara </ListItem>  
        <ListItem>Batas Wilayah </ListItem>  
        <ListItem>Utara : Laut Sulawesi </ListItem>  
        <ListItem>Selatan : Kabupaten Minahasa Selatan </ListItem>  
        <ListItem>Barat : Kabupaten Minahasa </ListItem>  
        <ListItem>Timur : Kabupaten Sangihe dan Kabupaten Talaud </ListItem>  
        <ListItem>Luas Wilayah : 157,48 Km² </ListItem>  
        <ListItem>  
          Jumlah Penduduk : 474.000 jiwa (Sensus Penduduk 2020){' '}  
        </ListItem>  
        <ListItem>Wilayah Administrasi : </ListItem>  
        <ListItem>Kecamatan : 11 </ListItem>  
        <ListItem>Kelurahan : 87 </ListItem>  
        <ListItem>Website Resmi : http://www.manadokota.go.id </ListItem>  
      </UnorderedList>  
      <AspectRatio  
          ratio={16 / 9}  
          my={5}  
          maxWidth={{ base: '500px', lg: '700px' }}  
        >  
          <iframe  
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021222.1078233217!2d123.92318116849027!3d1.0496149247695286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287754270069e31%3A0x45891617980cb835!2sNorth%20Sulawesi!5e0!3m2!1sen!2sid!4v1727406504664!5m2!1sen!2sid"  
            title="embed_location"  
            style={{ border: 0 }}  
            allowFullScreen=""  
            loading="lazy"  
          />    
      </AspectRatio>  
    </Flex>  
  );  
};  

export default DataWilayah;