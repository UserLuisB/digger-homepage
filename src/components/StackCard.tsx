import { Box, Text, SimpleGrid } from "@chakra-ui/react"
import type { StackItem } from "./../lib/data"

export const StackCard = ({ name, icon: Icon, color }: StackItem) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    gap={2}
    p={4}
    borderRadius="lg"
    transition="transform 0.2s ease"
    css={{
      bg: "whiteAlpha.100",
      _light: { bg: "blackAlpha.50" },
    }}
    _hover={{
      transform: "translateY(-4px)",
    }}
  >
    <Icon size={36} color={color} />
    <Text fontSize="sm" fontWeight="medium">
      {name}
    </Text>
  </Box>
)

interface StackGridProps {
  items: StackItem[]
}

export const StackGrid = ({ items }: StackGridProps) => (
  <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} gap={4}>
    {items.map((item) => (
      <StackCard key={item.name} {...item} />
    ))}
  </SimpleGrid>
)
