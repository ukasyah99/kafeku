import { Box } from "@chakra-ui/layout"
import NextImage from "next/image"
import ReactSlick from "react-slick"

const Carousel = () => {
  return (
    <>
      <Box w="800px" mx="auto">
        <ReactSlick
          dots
          infinite
          speed={500}
          // autoplay
          // autoplaySpeed={5000}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <Box>
            <NextImage
              src="/assets/banner/banner-1.jpg"
              width="800"
              height="400"
            />
          </Box>
          <Box>
            <NextImage
              src="/assets/banner/banner-2.jpg"
              width="800"
              height="400"
            />
          </Box>
          <Box>
            <NextImage
              src="/assets/banner/banner-3.jpg"
              width="800"
              height="400"
            />
          </Box>
        </ReactSlick>
      </Box>
    </>
  )
}

export default Carousel
