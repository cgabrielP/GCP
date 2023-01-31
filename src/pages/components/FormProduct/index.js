import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

const FormProduct = () => {

    const [product, setProduct] = React.useState({
        name: '',
        description: '',
        url: '',
        price: 0,
    })
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('api/products', product
        );
        router.push('/')
    }
    const handleInputChange = ({ target: { name, value } }) => setProduct({ ...product, [name]: value });
    console.log(product)
    return (
        <form onSubmit={handleSubmit}>
            <FormControl >
                <Flex
                    minH={'100vh'}
                    bg={useColorModeValue('gray.50', 'gray.800')}>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Stack align={'center'}>
                            <Heading fontSize={'4xl'}>Post a product</Heading>
                        </Stack>
                        <Box
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormLabel>Nombre</FormLabel>
                                <Input type='text' name='name' onChange={handleInputChange} />
                                <FormLabel>Description</FormLabel>
                                <Input type="text" name='description' onChange={handleInputChange} />
                                <FormLabel>Image</FormLabel>
                                <Input type='file' name='url' onChange={handleInputChange} />

                                <FormLabel>Price</FormLabel>
                                <Input type='text' name='price' onChange={handleInputChange} />
                                <Stack spacing={10}>

                                    <Button
                                        type='submit'

                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Post
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>

               
            </FormControl>
        </form>

    )
}

export default FormProduct