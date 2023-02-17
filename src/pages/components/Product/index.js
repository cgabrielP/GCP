import { SmallAddIcon, CheckIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import useAppContext from '../../contexts/appContext'

const Product = ({ name, gender, url, id }) => {
  const { cartItems, setCartItems, flag, setFlag } = useAppContext();

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  }
  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  }
  console.log(flag);
  return (
    <>

      <Card maxW='sm' size='20' mt='3' alignItems={'center'} key={id}>
        <CardBody>
          <Image
            src={url}
            alt={`Foto de ${name}`}
            borderRadius='lg'
            objectFit='cover'
            alignItems={'center'}
            py='4'
          />
          <Stack mt='6' spacing='3' alignItems={'center'}>
            <Heading size='md'>{name}</Heading>
            <Text color='blue.600' fontSize='2xl'>
              {gender}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter p={4}>
          <ButtonGroup spacing='2'>
            <Link href={`/ProductDetail/${id}`}>
              <Button variant='outline' colorScheme='blue'>
                Watch more
              </Button>
            </Link>{flag === true ?
              <Button rightIcon={<SmallAddIcon />} variant='ghost' colorScheme='blue' onClick={() => { addToCart(id), setFlag(!flag) }}>
                Add to cart
              </Button> :
              <Button rightIcon={<CheckIcon />} variant='ghost' colorScheme='blue' onClick={() => { removeFromCart(id), setFlag(!flag) }} >
              </Button>
            }
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}

export default Product