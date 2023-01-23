import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

const TypesOf = ({ product }) => {
  const defaultVariantObj = { color: "", sizes: [] };
  const defaultSizeObj = { size: "", stock: 0 };
  const [selectedSize, setSelectedSize] = useState(defaultSizeObj);
  const defaultQuantity = 0;
  const [selectedQuantity, setSelectedQuantity] = useState(defaultQuantity);

  return (
    <>
      <Flex>
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <FormControl
              as="select"
              onChange={(e) => {
                const {
                  target: { value },
                } = e;
                setSelectedSize(defaultSizeObj);
                setSelectedQuantity(defaultQuantity);
              }}
            >
              <option value="" disabled selected hidden>
                Color
              </option>

              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            </FormControl>
          </Box>
          <Box>
            <FormControl
              as="select"
              onChange={(e) => {
                const {
                  target: { value },
                } = e;
                setSelectedSize(
                  selectedVariant?.sizes.find(({ size }) => size === value) ||
                    {}
                );
                setSelectedQuantity(defaultQuantity);
              }}
              value={selectedSize.size}
            >
              <option value="" disabled selected hidden>
                Size
              </option>

              <option key={product.id} value={product.species}>
                {product.species}
              </option>
            </FormControl>
          </Box>
          <Box>
            <HStack>
              <Box>Quantity</Box>
              <Box>
                <FormControl>
                  <NumberInput
                    size={"sm"}
                    maxW={16}
                    min={!selectedSize?.stock ? 0 : 1}
                    max={selectedSize?.stock || 0}
                    value={selectedQuantity}
                    onChange={(valueString) => setSelectedQuantity(valueString)}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Flex>
      <Flex>
        <Button
          my={15}
          px={10}
          bg={useColorModeValue("#151f21", "gray.900")}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          Add To Cart
        </Button>
      </Flex>
    </>
  );
};

export default TypesOf;
