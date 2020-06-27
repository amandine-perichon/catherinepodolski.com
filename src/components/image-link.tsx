import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Image, Box, Text } from '@chakra-ui/core'
import styles from './image-link.module.css'

interface ImageLinkProps {
  overlayTitle: string
  src: string
  to: string
}

const ImageLink: React.FC<ImageLinkProps> = ({ overlayTitle, src, to }) => {
  const overlayColor = "#000000a6"

  // @ts-ignore
  return < RouterLink to={to} >
    <Box width={[
      "100%",
      "50%",
      "25%",
      "25%",
    ]} className={styles.container}>
      <Box className={styles.overlay} style={{ backgroundColor: overlayColor }}>
        <Text color="white" textTransform="uppercase" fontSize="l" fontWeight="600">{overlayTitle}</Text>
      </Box>
      <Image src={src} />
    </Box>
  </RouterLink >
}

export default ImageLink