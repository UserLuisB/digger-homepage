import { Box, Container } from "@chakra-ui/react"
import { WorkInProgress } from "../../components/WorkInProgress"

export default function About() {
  return (
    <Container maxW="900px" mx="auto" px={4} py={10}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minH="80vh"
        gap={8}
      >
        <WorkInProgress pageName="Posts" />
      </Box>
    </Container>
  )
}
