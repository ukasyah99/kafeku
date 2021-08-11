import { Avatar, Box, Flex, Icon, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"
import { DocumentTextIcon, HomeIcon, LogoutIcon, PhotographIcon, ShoppingBagIcon, TagIcon, UserIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"
import NextLink from "next/link"

const Sidebar = () => {
  const router = useRouter()

  return (
    <Box
      position="fixed"
      insetY="0"
      left="0"
      bg="white"
      color="gray.800"
      w="64"
      borderRightWidth="1px"
      borderColor="gray.200"
      shadow="sm"
      py="7"
    >
      <Box px="7">
        <Avatar
          size="lg"
          bg="white"
          ring="2"
          color="gray.400"
          ringColor="gray.400"
          icon={<Icon as={UserIcon} w="8" h="8" className="kafeku_icon_stroke_1.5" />}
        />
        <Box h="3" />
        <Text fontSize="lg" fontWeight="bold">
          Pankaj Patel
        </Text>
        <Text color="gray.600" fontSize="sm" fontWeight="semibold">
          pankaj.patel@yahoo.com
        </Text>
      </Box>
      <Box h="10" />
      <Box>
        <SidebarLink
          href="/admin"
          icon={HomeIcon}
          text="Beranda"
          isActive={router.asPath === "/admin"}
        />
        <SidebarLink
          href="/admin/activities"
          icon={DocumentTextIcon}
          text="Aktivitas"
          isActive={router.asPath === "/admin/activities"}
        />
        <SidebarLink
          href="/admin"
          icon={PhotographIcon}
          text="Banner"
          isActive={router.asPath === "/admin/banner"}
        />
        <SidebarLink
          href="/admin"
          icon={TagIcon}
          text="Kategori"
          isActive={router.asPath === "/admin/categories"}
        />
        <SidebarLink
          href="/admin"
          icon={ShoppingBagIcon}
          text="Produk"
          isActive={router.asPath === "/admin/products"}
        />
        <SidebarLink
          href="/admin"
          icon={LogoutIcon}
          text="Logout"
        />
      </Box>
    </Box>
  )
}

const SidebarLink = ({ icon, text, href, isActive }) => {
  return (
    <LinkBox
      bg={isActive ? "yellow.50" : "inherit"}
      color={isActive ? "yellow.600" : "inherit"}
      px="7"
    >
      <Flex py="2.5" alignItems="center">
        <Icon as={icon} w="6" h="6" className="kafeku_icon_stroke_1.75" />
        <Box w="4" />
        <NextLink href={href} passHref>
          <LinkOverlay>
            <Text>
              {text}
            </Text>
          </LinkOverlay>
        </NextLink>
      </Flex>
    </LinkBox>
  )
}

export default Sidebar
