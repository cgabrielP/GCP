import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const FormProduct = () => {

    const [product, setProduct] = useState({
        name: '',
        description: '',
        url: '',
        price: 0,
    })

    const router = useRouter()

    function handleOnChange(changeEvent) {
        const reader = new FileReader();

        reader.onload = function (onLoadEvent) {
            const imageData = onLoadEvent.target.result;
            setProduct({ ...product, url: imageData })
        }

        reader.readAsDataURL(changeEvent.target.files[0]);
    }
    const handleInputChange = ({ target: { name, value } }) => { setProduct({ ...product, [name]: value }) };
    console.log(product);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const fileInput = Array.from(form.elements).find(({ name }) => name === 'url')
        const formData = new FormData();
        for (const file of fileInput.files) {
            formData.append('file', file)
        }



        formData.append('upload_preset', 'my-uploads')
        const data = await axios.post('https://api.cloudinary.com/v1_1/dwpjhyrfl/image/upload', formData)
        setProduct({ ...product, url: data.data.secure_url });
        console.log(product);
        axios.post('api/products', product
        );
        router.push('/')
    }



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
                                <input type='file' name='url' onChange={handleOnChange} />
                                <img src={product.url} />

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