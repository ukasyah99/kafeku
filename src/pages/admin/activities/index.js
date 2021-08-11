import { HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import AdminLayout from "src/client/components/admin-layout"

const Activities = () => {
  return (
    <>
      <HStack
        h="16"
        px="7"
        my="1"
      >
        <Text fontSize="xl" fontWeight="bold">
          Aktivitas
        </Text>
      </HStack>
      <Tabs>
        <TabList px="3">
          <Tab>Semua</Tab>
          <Tab>Hanya saya</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

const getLayout = (page) => (
  <AdminLayout>
    {page}
  </AdminLayout>
)

Activities.getLayout = getLayout

export default Activities
