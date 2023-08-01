import { Image, Box, Button, Text, Center, Container } from '@chakra-ui/react';

function Header() {
  return (
    <>
        <Container maxW="container.lg">
            <Center h='100px' mt="150px">
                <Box w="100%" >
                <Image
                src='https://niixer.com/wp-content/uploads/2020/10/Panoramica.jpg'
                alt='MIAMI'
                objectFit="cover"         
                />
                </Box>
                <Box position="absolute" top="120px" left="32%" bg="transparent">
                    <Text color="whiteAlpha.900" fontWeight="bold" fontSize="25px">
                        DISFRUTA TUS VACACIONES EN MIAMI
                    </Text>
                </Box>
                <Box position="absolute" top="70%" left="50%" transform="translate(-50%, -50%)">
                    <Button colorScheme="red" bg="transparent" >
                        VER DETALLES
                    </Button>
                    <Button colorScheme="red" bg="transparent" >
                        VER VIDEO
                    </Button>
                </Box>                
            </Center>
        </Container>       
    </>
  );
}
export default Header;


