import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
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
                <FormLabel>Nombre</FormLabel>
                <Input type='text' name='name' onChange={handleInputChange} />

                <FormLabel>Description</FormLabel>
                <Input type='text' name='description' onChange={handleInputChange} />

                <FormLabel>Image</FormLabel>
                <Input type='file' name='url' onChange={handleInputChange} />

                <FormLabel>Price</FormLabel>
                <Input type='text' name='price' onChange={handleInputChange} />

                <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                >
                    Submit
                </Button>
            </FormControl>
        </form>

    )
}

export default FormProduct