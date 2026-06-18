import { Box, Container } from "@chakra-ui/react"
import { Provider } from "../components/ui/provider"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Digger homepage" />
        <meta name="author" content="Luis Berrio" />
        <meta name="author" content="digger" />
        <title>Digger - Homepage</title>
      </head>
      <body suppressHydrationWarning>
        <Provider>
          <Box display="flex" flexDirection="column" minH="100vh">
            <Navbar />
            <Container maxW="900px" mx="auto" px={4} flex="1">
              <main>{children}</main>
            </Container>
            <Footer />
          </Box>
        </Provider>
      </body>
    </html>
  )
}
