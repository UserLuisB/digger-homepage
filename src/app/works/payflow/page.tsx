"use client"

import { Badge, Box, Container, HStack, List } from "@chakra-ui/react"
import { P, Title, WorkImage } from "../../../components/WorkPage"
import { motion } from "framer-motion"

const MotionBox = motion.create(Box)

export default function Work() {
  return (
    <Container maxW="900px" mx="auto" px={4} py={10}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Title>
          PayFlow <Badge ml={2}>2026/01/10 - 2026/05/20</Badge>
        </Title>
        <P>
          An application for managing payment orders, featuring different
          payment order statuses, invoice attachments, and role management.
        </P>

        <List.Root ml={4} my={4} gap={2}>
          <List.Item>
            <Badge colorPalette={"green"}>Platform</Badge>
            <span>Windows/Linux</span>
          </List.Item>
          <List.Item>
            <HStack gap={2}>
              <Badge colorPalette={"teal"}>Stack</Badge>
              <Badge colorPalette="red" variant="subtle">
                Angular
              </Badge>
              <Badge colorPalette="blue" variant="subtle">
                TypeScript
              </Badge>
              <Badge colorPalette="green" variant="subtle">
                SpringBoot
              </Badge>
              <Badge colorPalette="yellow" variant="subtle">
                AWS
              </Badge>
            </HStack>
          </List.Item>
        </List.Root>

        <WorkImage src="/projects/payflow-screen.png" alt="Inkdrop" />
        <WorkImage
          src="/projects/works/payflow-screen-pending.png"
          alt="Inkdrop"
        />
        <WorkImage src="/projects/works/modal-payflow.png" alt="Inkdrop" />
        <WorkImage src="/projects/works/modal-edit-payflow.png" alt="Inkdrop" />
      </MotionBox>
    </Container>
  )
}
