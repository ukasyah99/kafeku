import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import { ArchiveIcon, ClockIcon, DocumentTextIcon, TagIcon } from "@heroicons/react/outline"
import ActivitiesCard from "src/client/components/activities-card"
import AdminLayout from "src/client/components/admin-layout"
import RankedListCard from "src/client/components/ranked-list-card"
import StatCard from "src/client/components/stat-card"

const AdminHome = () => {
  return (
    <>
      <HStack
        h="16"
        px="7"
        my="1"
      >
        <Text fontSize="xl" fontWeight="bold">
          Beranda
        </Text>
      </HStack>
      <Box h="2" />
      <SimpleGrid columns="4" gap="5" px="7">
        <StatCard
          icon={ArchiveIcon}
          label="Total produk"
          value="56"
        />
        <StatCard
          icon={TagIcon}
          label="Total kategori"
          value="12"
        />
        <StatCard
          icon={DocumentTextIcon}
          label="Total aktivitas"
          value="127"
        />
        <StatCard
          icon={ClockIcon}
          label="Lama login"
          value="40 menit"
        />
      </SimpleGrid>
      <Box h="7" />
      <SimpleGrid columns="2" gap="5" px="7">
        <RankedListCard
          title="Total produk per kategori"
          items={[
            { label: "Makanan", value: 300, percentage: 67 },
          ]}
        />
        <ActivitiesCard
          items={[
            {
              user_name: "John Doe",
              description: "put away his weapon",
              done_at: "4 days ago",
            },
          ]}
        />
      </SimpleGrid>
    </>
  )
}

const getLayout = (page) => (
  <AdminLayout>
    {page}
  </AdminLayout>
)

AdminHome.getLayout = getLayout

export default AdminHome
