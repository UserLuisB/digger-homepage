"use client"

import { Container, Heading, Box } from "@chakra-ui/react"
import { stackCategories } from "./../../lib/data"
import { StackGrid } from "../../components/StackCard"
import { motion } from "framer-motion"

const MotionBox = motion.create(Box)

export default function Stack() {
  return (
    <Container maxW="900px" mx="auto" px={4} py={10}>
      <Heading
        as="h3"
        size="2xl"
        mb={4}
        pb={2}
        borderBottom="5px solid"
        borderColor="gray.700"
        display="inline-block"
      >
        Stack
      </Heading>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {stackCategories.map((group) => (
          <Box key={group.category} mb={10}>
            <Heading
              as="h3"
              size="lg"
              mb={4}
              pb={2}
              borderBottom="1px solid"
              borderColor="gray.700"
              display="inline-block"
            >
              {group.category}
            </Heading>
            <StackGrid items={group.items} />
          </Box>
        ))}
      </MotionBox>
    </Container>
  )
}
