"use client"

import { Box, Button, Heading, Text, Container } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Image from "next/image"
import NextLink from "next/link"
import { BioSection, BioYear } from "../components/Bio"
import RightArrow from "../../public/icons/right-arrow"

const MotionBox = motion.create(Box)

export default function Home() {
  return (
    <Container maxW="900px" mx="auto" px={4} py={10}>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg="whiteAlpha.100"
        css={{
          _light: { bg: "blackAlpha.50" },
        }}
      >
        Hello 👋, I&apos;m an software developer based in{" "}
        <Text as="span" color="yellow.400" fontWeight="bold">
          Colo
        </Text>
        <Text as="span" color="blue.400" fontWeight="bold">
          m
        </Text>
        <Text as="span" color="red.400" fontWeight="bold">
          bia
        </Text>{" "}
        !
      </Box>

      <Box display={{ md: "flex" }} mb={4}>
        <Box flexGrow={1}>
          <Heading as="h2" size={"5xl"}>
            Luis Berrio
          </Heading>
          <Text fontSize="2xl" color={"gray.400"}>
            Digital Digger ({" "}
            <Text as="span" color="teal.400" fontWeight="medium">
              Artist
            </Text>
            {" / "}
            <Text as="span" color="purple.400" fontWeight="medium">
              Developer
            </Text>
            {" / "}
            <Text as="span" color="orange.400" fontWeight="medium">
              Designer
            </Text>
            )
          </Text>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            border="3px solid"
            borderColor="whiteAlpha.300"
          >
            <Image
              src="/pet-logo.jpg"
              alt="Profile image"
              width={100}
              height={100}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
      </Box>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Heading
          as="h3"
          size="2xl"
          mb={4}
          pb={2}
          borderBottom="5px solid"
          borderColor="gray.700"
          display="inline-block"
        >
          Work
        </Heading>
        <Text fontSize="lg">
          Hi, I&apos;m a{" "}
          <Text as="span" color="orange.400" fontWeight="medium">
            full-stack developer{" "}
          </Text>
          based in{" "}
          <Text as="span" color="yellow.400" fontWeight="bold">
            Colo
          </Text>
          <Text as="span" color="blue.400" fontWeight="bold">
            m
          </Text>
          <Text as="span" color="red.400" fontWeight="bold">
            bia
          </Text>
          . I&apos;m passionate about creating digital products and services. I
          have a strong aptitude for everything related to product launches,
          from planning and design to solving{" "}
          <Text as="span" color="teal.400" fontWeight="medium">
            real-world problems{" "}
          </Text>{" "}
          through code. When I&apos;m not working, I love spending time on
          sports or art.{" "}
        </Text>
        <Box textAlign="center" my={4}>
          <Button
            asChild
            bg="teal.400"
            color="black"
            size="lg"
            _hover={{ bg: "teal.500" }}
          >
            <NextLink href="/projects" scroll={false}>
              My portfolio <RightArrow />
            </NextLink>
          </Button>
        </Box>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Heading
          as="h3"
          size="2xl"
          mb={4}
          pb={2}
          borderBottom="5px solid"
          borderColor="gray.700"
          display="inline-block"
        >
          Bio
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={4}
        >
          <BioSection>
            <BioYear>2022</BioYear>I worked at Olsoftware as a Middle Developer
            Colombia 🇨🇴
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>I worked at Switchs as a Software engineer
            Colombia 🇨🇴
          </BioSection>
          <BioSection>
            <BioYear>2025</BioYear>I worked at Switchs as a Full - Stack
            Developer Colombia 🇨🇴
          </BioSection>
          <BioSection>
            <BioYear>2026 to present</BioYear>
            I&apos;m working on creating my own development company
          </BioSection>
        </Box>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Heading
          as="h3"
          size="2xl"
          mb={4}
          pb={2}
          borderBottom="5px solid"
          borderColor="gray.700"
          display="inline-block"
        >
          Newsletter
        </Heading>
        <Text fontSize="lg" mb={5}>
          Join me on a journey through the world of programming and other
          interesting topics. Weekly updates on projects, tutorials, and videos.
        </Text>
        <Box textAlign="center" mt={10} mb={2}>
          <Button
            asChild
            bg="teal.400"
            color="black"
            size="lg"
            _hover={{ bg: "teal.500" }}
          >
            <NextLink href="/about" scroll={false}>
              Sign up my newsletter here <RightArrow />
            </NextLink>
          </Button>
        </Box>
      </MotionBox>
    </Container>
  )
}
