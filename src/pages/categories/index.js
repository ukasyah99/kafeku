import { Box, Button, Checkbox, CheckboxGroup, CircularProgress, Divider, Flex, HStack, Icon, IconButton, Input, InputGroup, InputLeftElement, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import CustomerLayout from "src/client/components/customer-layout"
import ProductCard from "src/client/components/product-card"
import VertCategoryCard from "src/client/components/vert-category-card"
import sleep from "src/client/lib/sleep"

const Categories = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([
    { name: "Lorem ipsum" }
  ])

  useEffect(() => {
    const fetchInitialData = async () => {
      await sleep(1000)
      setIsLoading(false)
    }
    fetchInitialData()
  }, [])

  return (
    <>
      <Flex>
        <Box flex="1">
          <HStack mb="5">
            <Text fontSize="xl" fontWeight="bold">
              All Categories
            </Text>
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
              <SimpleGrid columns="4" gap="5">
                <VertCategoryCard
                  name="Kue Kering Spesial Huang Guanyi"
                  color="blue"
                  image="/assets/kategori/makanan.jpg"
                />
                <VertCategoryCard
                  name="Minuman"
                  color="purple"
                  image="/assets/kategori/minuman.jpg"
                />
              </SimpleGrid>
            </>
          )}
        </Box>
      </Flex>
    </>
  )
}

const getLayout = (page) => (
  <CustomerLayout>
    {page}
  </CustomerLayout>
)

Categories.getLayout = getLayout

export default Categories
