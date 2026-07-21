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
          LifeOnIce <Badge ml={2}>2024/02/14 - 2024/06/22</Badge>
        </Title>
        <P>A business and advertising page for a famous restaurant.</P>

        <List.Root ml={4} my={4} gap={2}>
          <List.Item>
            <Badge colorPalette={"green"}>Platform</Badge>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </List.Item>

          <List.Item>
            <HStack gap={2}>
              <Badge colorPalette={"teal"}>Stack</Badge>
              <Badge colorPalette="gray" variant="subtle">
                Next.js
              </Badge>
              <Badge colorPalette="teal" variant="subtle">
                React
              </Badge>
              <Badge colorPalette="blue" variant="subtle">
                TypeScript
              </Badge>
              <Badge colorPalette="green" variant="subtle">
                Node.js
              </Badge>
            </HStack>
            {/* <Badge colorPalette={"teal"}>Stack</Badge>
            <span>NodeJS, Electron, React Native</span> */}
          </List.Item>
        </List.Root>

        <WorkImage src="/projects/works/home-life.png" alt="Inkdrop" />
        <WorkImage src="/projects/works/life-mid.png" alt="Inkdrop" />
        <WorkImage src="/projects/works/life-bottom.png" alt="Inkdrop" />
        <WorkImage src="/projects/works/life-top.png" alt="Inkdrop" />
      </MotionBox>
    </Container>
  )
}
