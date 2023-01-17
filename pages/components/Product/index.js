import { SmallAddIcon } from '@chakra-ui/icons'
import {  Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image,  Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Product = ({ name, gender,url, id }) => {
  return (
    <>
   
        <Card maxW='sm' size='20'mt='3' alignItems={'center'}>
          <CardBody>
            <Image
              src={url}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
              objectFit='cover'
              alignItems={'center'}
              
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
              </Link>
              <Button rightIcon={<SmallAddIcon />} variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
    </>
  )
}

export default Product