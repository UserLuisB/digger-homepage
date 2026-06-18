"use client"

import { Text } from "@chakra-ui/react"
import styled from "@emotion/styled"
import Link from "next/link"
import GlassIcon from "../../../public/icons/glass"

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  gap: 12px;
  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

export default function Logo() {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <GlassIcon />
        <Text
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={5}
        >
          Digger
        </Text>
      </LogoBox>
    </Link>
  )
}
