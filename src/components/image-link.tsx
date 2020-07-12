import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Image, Box, Text } from '@chakra-ui/core'
import styles from './image-link.module.css'
import { motion } from "framer-motion";

const MotionBox = motion.custom(Box);

interface ImageLinkProps {
  overlayTitle: string
  src: string
  to: string
}

const ImageLink: React.FC<ImageLinkProps> = ({ overlayTitle, src, to }) => {
  const overlayColor = "#000000a6"

  // @ts-ignore
  return < RouterLink to={to} >
    <MotionBox width={[
      "100%",
      "50%",
      "50%",
      "50%",
    ]}
      className={styles.container}
      whileHover={{ scale: 1.025, zIndex: 1 }}
      whileTap={{ scale: 1 }}
    >
      <Box className={styles.overlay} style={{ backgroundColor: overlayColor }}>
        <Text color="white" textTransform="uppercase" fontSize="l" fontWeight="600">{overlayTitle}</Text>
      </Box>
      <Image src={src} />
    </MotionBox>
  </RouterLink >
}

export default ImageLink