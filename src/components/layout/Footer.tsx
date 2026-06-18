import { Box } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box
      as="footer"
      textAlign="center"
      py={6}
      mt={10}
      borderTop="0.5px solid"
      borderColor="whiteAlpha.200"
      css={{ _light: { borderColor: "gray.200" } }}
      fontSize="sm"
      color="gray.500"
    >
      &copy; {new Date().getFullYear()} Luis Berrio. All Rigths Reserved.
    </Box>
  )
}
