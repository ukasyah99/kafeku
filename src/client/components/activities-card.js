import { Avatar, Box, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react"
import { UserIcon } from "@heroicons/react/outline"
// import dayjs from "dayjs"
// import relativeTime from "dayjs/plugin/relativeTime"

// dayjs.extend(relativeTime)

const ActivitiesCard = ({ items = [] }) => {
  return (
    <Box
      alignSelf="flex-start"
      rounded="lg"
      px="4"
      py="4"
      borderWidth="1px"
      borderColor="gray.300"
      shadow="sm"
    >
      <Text color="gray.500" fontWeight="semibold">
        Aktivitas terbaru
      </Text>
      <Box h="5" />
      <SimpleGrid columns="1" gap="3">
        {items.map((item, i) => (
          <HStack key={i} mb="2">
            <Avatar
              bg="gray.100"
              rounded="lg"
              mr="1"
              icon={<Icon as={UserIcon} w="6" h="6" className="kafeku_icon_stroke_1.75" />}
            />
            <Box ml="-6" overflow="hidden">
              <Text color="gray.600" isTruncated>
                <span style={{ color: "black", fontWeight: "bold" }}>{item.user_name}</span> {item.description}
              </Text>
              <Text fontSize="sm" fontWeight="semibold" color="gray.600" mt="-1">
                {item.done_at}
                {/* {dayjs(item.done_at).fromNow()} */}
              </Text>
            </Box>
          </HStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default ActivitiesCard
