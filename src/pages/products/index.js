// import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react"
// import Carousel from "src/client/components/carousel"
// import CategoryCard from "src/client/components/category-card"
import { Box, Button, Checkbox, CheckboxGroup, CircularProgress, Divider, Flex, HStack, Icon, IconButton, Input, InputGroup, InputLeftElement, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import CustomerLayout from "src/client/components/customer-layout"
import ProductCard from "src/client/components/product-card"
import sleep from "src/client/lib/sleep"
// import ProductCard from "src/client/components/product-card"

const Products = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([
    { name: "Lorem ipsum" }
  ])

  useEffect(() => {
    const fetchInitialData = async () => {
      await sleep(1000)
      setIsMounted(true)
      await sleep(3000)
      setIsLoading(false)
    }
    fetchInitialData()
  }, [])

  return (
    <>
      {!isMounted && (
        <Flex justifyContent="center" py="20">
          <CircularProgress isIndeterminate size="10" color="yellow.500" />
        </Flex>
      )}
      {isMounted && (
        <Flex>
          <Box w="64">
            <Text fontSize="xl" fontWeight="bold" mb="5">
              Filters
            </Text>
            <Box mb="5">
              <HStack mb="3">
                <Text fontWeight="bold">
                  Categories
                </Text>
                <Box flex="1" />
                <Text color="yellow.600" fontSize="sm">
                  Select all
                </Text>
              </HStack>
              <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
                <Stack>
                  <Checkbox colorScheme="yellow" value="naruto">Makanan</Checkbox>
                  <Checkbox colorScheme="yellow" value="sasuke">Minuman</Checkbox>
                  <Checkbox colorScheme="yellow" value="kakashi">Makanan ringan</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
            <Box>
              <HStack mb="3">
                <Text fontWeight="bold">
                  Rentang harga
                </Text>
                <Box flex="1" />
              </HStack>
              <HStack>
                <Input placeholder="Minimum" />
                <Input placeholder="Maksimum" />
              </HStack>
            </Box>
            <Box h="6" />
            <Divider borderColor="gray.300" />
            <Box h="6" />
            <Button variant="outline" isFullWidth>
              Reset
            </Button>
            <Box h="2" />
            <Button variant="solid" isFullWidth>
              Terapkan
            </Button>
          </Box>
          <Box w="12" />
          <Box flex="1">
            <HStack mb="5">
              {/* <Text fontSize="xl" fontWeight="bold">
                All Products
              </Text> */}
              <InputGroup w="64">
                <InputLeftElement color="gray.500">
                  <Icon as={SearchIcon} w="5" h="5" />
                </InputLeftElement>
                <Input placeholder="Cari nama produk..." />
              </InputGroup>
              <Box flex="1" />
              <HStack spacing="1" color="gray.600">
                <Text fontSize="md" fontWeight="semibold">Harga terendah</Text>
                <Icon as={ChevronDownIcon} w="4" h="4" />
              </HStack>
            </HStack>
            {isLoading && (
              <Flex justifyContent="center" py="20">
                <CircularProgress isIndeterminate size="10" color="yellow.500" />
              </Flex>
            )}
            {!isLoading && data.length === 0 && (
              <Flex justifyContent="center" py="20">
                <Text color="gray.600">
                  Tidak ada produk yang ditemukan :(
                </Text>
              </Flex>
            )}
            {!isLoading && data.length > 0 && (
              <>
                <SimpleGrid columns="3" gap="5">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </SimpleGrid>
                <Box h="7" />
                <HStack justifyContent="center">
                  <IconButton
                    icon={<Icon as={ChevronLeftIcon} w="5" h="5" />}
                    variant="outline"
                  />
                  <IconButton
                    icon={<Icon as={ChevronRightIcon} w="5" h="5" />}
                    variant="outline"
                  />
                </HStack>
              </>
            )}
          </Box>
        </Flex>
      )}
    </>
  )
}

const getLayout = (page) => (
  <CustomerLayout>
    {page}
  </CustomerLayout>
)

Products.getLayout = getLayout

export default Products
