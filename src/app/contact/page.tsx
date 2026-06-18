"use client"

import { Box, Container, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import NextLink from "next/link"
import { TbMail, TbBrandLinkedin } from "react-icons/tb"
import type { IconType } from "react-icons"

const MotionBox = motion.create(Box)

interface ContactLink {
  label: string
  value: string
  href: string
  icon: IconType
  bg: string
  border: string
}

const contacts: ContactLink[] = [
  {
    label: "Email",
    value: "berrio8724@gmail.com",
    href: "mailto:berrio8724@gmail.com",
    icon: TbMail,
    bg: "#1a1a1a",
    border: "#333",
  },

  {
    label: "LinkedIn",
    value: "Luis Berrio",
    href: "https://www.linkedin.com/in/luis-alfonso-berrio-narvaez-343266228/",
    icon: TbBrandLinkedin,
    bg: "#0077B5",
    border: "#0066a0",
  },
]

export default function Contact() {
  return (
    <Container maxW="900px" mx="auto" px={4}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minH="80vh"
        gap={8}
      >
        <Box textAlign="center" mb={8}>
          <Heading as="h2" size="2xl" mb={2}>
            Should we talk?
          </Heading>
          <Text color="gray.400">Find me on any of these platforms</Text>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
          gap={3}
          maxW="660px"
          mx="auto"
        >
          {contacts.map(({ label, value, href, icon: Icon, bg, border }) => (
            <MotionBox
              key={label}
              as={NextLink}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              display="flex"
              alignItems="center"
              gap={3}
              px={5}
              py={3}
              w="100%"
              borderRadius="full"
              style={{
                background: bg,
                border: `0.5px solid ${border}`,
                textDecoration: "none",
              }}
              _hover={{ opacity: 0.8 }}
            >
              <Icon size={20} color="white" />
              <Text fontSize="sm" fontWeight="medium" color="white">
                {value}
              </Text>
            </MotionBox>
          ))}
        </Box>
        <Box textAlign="center" mt={10} px={4}>
          <Text fontSize="sm" color="gray.400">
            I usually respond within 24 hours.
          </Text>
        </Box>
      </Box>
    </Container>
  )
}
