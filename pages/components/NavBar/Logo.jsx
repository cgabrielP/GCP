import React from "react"
import {  Box, Text } from "@chakra-ui/react"
import Link from "next/link"

 const Logo=(props)=> {
  return (
    <Link href={'/'}>

    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
    </Link>
  )
}
export default Logo