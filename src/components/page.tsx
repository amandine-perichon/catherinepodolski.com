import React from 'react'
import { Flex, Text, Link, Box } from '@chakra-ui/core'
import styles from './page.module.css';
import { Link as RouterLink } from "react-router-dom"

const Page: React.FC = ({ children }) =>
  <div>
    <nav className={styles.navbar}>
      <Flex alignItems="center" justifyContent="space-between">
        <div />
        <Text>Catherine Podolski</Text>
        <Box>
          <Link as={RouterLink} to="/about">Bio</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </Box>
      </Flex>
    </nav>
    <div className={styles.content}>{children}</div>
  </div>

export default Page