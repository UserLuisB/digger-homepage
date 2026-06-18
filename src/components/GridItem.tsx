"use client"
import {
  Badge,
  Box,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react"
import Image from "next/image"
import type { ReactNode } from "react"
import NextLink from "next/link"

const stackColors: Record<string, string> = {
  "Next.js": "gray",
  React: "cyan",
  TypeScript: "blue",
  "Chakra UI": "teal",
  "Node.js": "green",
  SpringBoot: "green",
  AWS: "yellow",
  PostgreSQL: "purple",
  Tailwind: "cyan",
  Python: "yellow",
  Angular: "red",
}

interface GridItemProps {
  href: string
  title: string
  thumbnail: string
  stack?: string[]
}

export const GridItem = ({ href, title, thumbnail, stack }: GridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      cursor="pointer"
      css={{
        "& img": {
          transition: "transform 0.3s ease",
        },
        "&:hover img": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box overflow="hidden" borderRadius="8px">
        <Image
          src={thumbnail}
          alt={title}
          width={500}
          height={300}
          style={{ width: "100%", height: "auto", display: "block" }}
          loading="lazy"
        />
      </Box>
      <LinkOverlay asChild>
        <NextLink href={href}>
          <Text mt={2} fontWeight="medium">
            {title}
          </Text>
        </NextLink>
      </LinkOverlay>
      {/* <Text fontSize="sm" color="gray.400">
        {children}
      </Text> */}
      {stack && (
        <HStack gap={2} justify="center" wrap="wrap">
          {stack.map((tech) => (
            <Badge
              key={tech}
              colorPalette={stackColors[tech] || "gray"}
              variant="subtle"
              size="sm"
            >
              {tech}
            </Badge>
          ))}
        </HStack>
      )}
    </LinkBox>
  </Box>
)
