import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/core'

interface LinkProps {
  to: string
}

const Link: React.FC<LinkProps> = ({ children, to }) =>
  // @ts-ignore
  <ChakraLink as={RouterLink} to={to}>
    {children}
  </ChakraLink>

export default Link