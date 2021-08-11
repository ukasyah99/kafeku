import { Box, Flex } from "@chakra-ui/react"
import Sidebar from "./sidebar"

const AdminLayout = ({ children }) => {
  return (
    <Box>
      <Sidebar />
      <Box ml="64">
        {children}
      </Box>
    </Box>
  )
}

export default AdminLayout
