"use client"

import { Box, Heading, Text, Badge } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { TbTool, TbClock } from "react-icons/tb"

const MotionBox = motion.create(Box)

interface WorkInProgressProps {
  pageName?: string
}

export const WorkInProgress = ({ pageName }: WorkInProgressProps) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    minH="50vh"
    textAlign="center"
    px={4}
  >
    <Box
      position="relative"
      w="120px"
      h="120px"
      mb={6}
      borderRadius="full"
      bg="whiteAlpha.100"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <TbTool size={48} color="#888780" />
      <Box
        position="absolute"
        top="-4px"
        right="-4px"
        w="36px"
        h="36px"
        borderRadius="full"
        bg="orange.400"
        border="3px solid"
        borderColor="black"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <TbClock size={18} color="black" />
      </Box>
    </Box>

    <Heading as="h2" size="lg" mb={2}>
      Digger is digging here{pageName ? ` en ${pageName}` : ""}
    </Heading>
    <Text fontSize="sm" color="gray.400" maxW="360px" mb={5}>
      This section is still under construction. Check back soon to see the
      finished result.
    </Text>

    <Badge
      colorPalette="orange"
      variant="subtle"
      px={3}
      py={1}
      borderRadius="full"
    >
      🚧 Under construction
    </Badge>
  </MotionBox>
)
