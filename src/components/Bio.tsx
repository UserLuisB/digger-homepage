import { Box, type BoxProps } from "@chakra-ui/react"

export function BioSection(props: BoxProps) {
  return (
    <Box
      mb={4}
      p={4}
      borderRadius="lg"
      textAlign="center"
      borderColor="gray.800"
      backdropFilter="blur(10px)"
      css={{
        bg: "whiteAlpha.200",
        _light: { bg: "whiteAlpha.500" },
      }}
      {...props}
    />
  )
}

export function BioYear(props: BoxProps) {
  return (
    <Box
      as="span"
      fontWeight="bold"
      mr={2}
      minW="48px"
      display="inline-block"
      {...props}
    />
  )
}
