"use client"

import { Box, Button, Container, Flex, Heading, HStack } from "@chakra-ui/react"
import Logo from "./Logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const links = [
  { label: "Works", href: "/projects" },
  { label: "Stacks", href: "/stack" },
  { label: "Posts", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      backdropFilter={scrolled ? "blur(10px)" : "none"}
      bg={scrolled ? "blackAlpha.700" : "transparent"}
      css={{
        _light: { bg: scrolled ? "whiteAlpha.800" : "transparent" },
      }}
      transition="all 0.2s ease"
    >
      <Container
        maxW="900px"
        mx="auto"
        display="flex"
        p={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <HStack gap={1} display={{ base: "none", md: "flex" }}>
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Button
                key={link.href}
                asChild
                variant="ghost"
                size="sm"
                color={isActive ? "white" : "gray.400"}
                bg={isActive ? "whiteAlpha.100" : "transparent"}
                fontWeight={isActive ? "bold" : "normal"}
                _hover={{ color: "white" }}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            )
          })}
        </HStack>
      </Container>
    </Box>
  )
}
