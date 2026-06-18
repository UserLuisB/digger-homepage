"use client"

import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { projects } from "../../lib/data"
import { GridItem } from "../../components/GridItem"

const MotionBox = motion.create(Box)

export default function Projects() {
  return (
    <Container maxW="900px" mx="auto" px={4}>
      <Heading
        as="h3"
        size="2xl"
        mb={2}
        pb={2}
        borderBottom="5px solid"
        borderColor="gray.700"
        display="inline-block"
      >
        Work
      </Heading>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minH="80vh"
        gap={8}
      >
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {projects.map((project) => (
              <GridItem
                key={project.title}
                title={project.title}
                href={project.href}
                thumbnail={project.thumbnail}
                stack={project.stack}
              ></GridItem>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Box>
    </Container>
  )
}
