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
        <ListItem>Nama Resmi : Kota Manado </ListItem>  
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d107321.49044916782!2d124.75114865620908!3d1.5498392804312922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32879ef9ffb30fd3%3A0x3030bfbcaf77280!2sManado%2C%20Manado%20City%2C%20North%20Sulawesi!5e0!3m2!1sen!2sid!4v1727295014673!5m2!1sen!2sid"  
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