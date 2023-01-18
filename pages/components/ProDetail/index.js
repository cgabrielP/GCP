import React from 'react'
import {Box, Container, Flex, Image, SimpleGrid, Text, useColorModeValue,} from '@chakra-ui/react';
import TypesOf from './typesOf';

const ProDetail = ({product}) => {
  return (
   <>
   <Container maxW={'7xl'} zIndex={10} position={'relative'} py={12}>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
                <Flex>
                    <Image rounded={'md'} alt={'feature image'}
                        src={product.image}
                        objectFit={'cover'}
                        w={'480px'}
                    />
                </Flex>
                <Box>
                    <Text
                        fontSize={{base: '16px', lg: '18px'}}
                        color={'black'}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                        {product.name}
                    </Text>
                    <Text
                        fontSize={{base: '16px', lg: '18px'}}
                        color={useColorModeValue('yellow.500', 'yellow.300')}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                        {product.price}
                    </Text>
                    <TypesOf product={product}/>
                </Box>
            </SimpleGrid>
        </Container>
   </>
  )
}

export default ProDetail