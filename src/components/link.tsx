import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/core'

interface LinkProps {
  className?: string
  to: string
}

const Link: React.FC<LinkProps> = ({ className, children, to }) =>
  // @ts-ignore
  <ChakraLink className={className} as={RouterLink} to={to}>
    {children}
  </ChakraLink>

export default Link