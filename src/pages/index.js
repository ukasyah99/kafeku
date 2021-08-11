import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import Carousel from "src/client/components/carousel"
import CategoryCard from "src/client/components/category-card"
import CustomerLayout from "src/client/components/customer-layout"
import ProductCard from "src/client/components/product-card"

const Home = () => {
  return (
    <>
      <Carousel />
      <Box h="20" />
      <Box>
        <HStack>
          <Text fontSize="xl" fontWeight="extrabold">
            Kategori
          </Text>
          <Box flex="1" />
          <Text color="yellow.600" fontSize="md" fontWeight="bold">
            Lihat semua
          </Text>
        </HStack>
        <Box h="5" />
        <SimpleGrid columns="3" gap="5">
          <CategoryCard
            name="Makanan"
            color="blue"
            image="/assets/kategori/makanan.jpg"
          />
          <CategoryCard
            name="Minuman"
            color="purple"
            image="/assets/kategori/minuman.jpg"
          />
          <CategoryCard
            name="Sarapan"
            color="green"
            image="/assets/kategori/sarapan.jpg"
          />
          <CategoryCard
            name="Makan Siang"
            color="yellow"
            image="/assets/kategori/makan-siang.jpg"
          />
          <CategoryCard
            name="Camilan Ringan"
            color="pink"
            image="/assets/kategori/makanan.jpg"
          />
          <CategoryCard
            name="Roti &amp; Kue"
            color="orange"
            image="/assets/kategori/roti.jpg"
          />
        </SimpleGrid>
      </Box>
      <Box h="14" />
      <Box>
        <HStack>
          <Text fontSize="xl" fontWeight="extrabold">
            Rekomendasi
          </Text>
          <Box flex="1" />
          <Text color="yellow.600" fontSize="md" fontWeight="bold">
            Lihat semua
          </Text>
        </HStack>
        <Box h="5" />
        <SimpleGrid columns="4" gap="5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      </Box>
      <Box h="14" />
      <Box>
        <HStack>
          <Text fontSize="xl" fontWeight="extrabold">
            Ramah di Kantong
          </Text>
          <Box flex="1" />
          <Text color="yellow.600" fontSize="md" fontWeight="bold">
            Lihat semua
          </Text>
        </HStack>
        <Box h="5" />
        <SimpleGrid columns="4" gap="5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      </Box>
    </>
  )
}

const getLayout = (page) => (
  <CustomerLayout>
    {page}
  </CustomerLayout>
)

Home.getLayout = getLayout

export default Home
