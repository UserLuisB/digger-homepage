import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    body: {
      bg: "#202023",
      color: "gray.100",
    },
  },
})

export const system = createSystem(defaultConfig, config)
