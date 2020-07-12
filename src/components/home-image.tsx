import React from 'react'
import { Image, Box } from '@chakra-ui/core'

interface ImageLinkProps {
  src: string
}

const HomeImage: React.FC<ImageLinkProps> = ({ src }) => {
  return <Box display="inline-block" width={[
    "100%",
    "50%",
    "25%",
    "25%",
  ]}>
    <Image src={src} />
  </Box>
}

export default HomeImage