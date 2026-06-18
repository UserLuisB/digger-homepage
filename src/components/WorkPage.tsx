import {
  Box,
  Heading,
  Text,
  type HeadingProps,
  type TextProps,
} from "@chakra-ui/react"
import Image from "next/image"

export const Title = (props: HeadingProps) => (
  <Heading as="h2" size="2xl" mb={4} {...props} />
)

export const P = (props: TextProps) => (
  <Text mb={4} lineHeight="1.7" {...props} />
)

interface WorkImageProps {
  src: string
  alt: string
}

export const WorkImage = ({ src, alt }: WorkImageProps) => (
  <Box my={4} borderRadius="md" overflow="hidden">
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      style={{ width: "100%", height: "auto" }}
    />
  </Box>
)
