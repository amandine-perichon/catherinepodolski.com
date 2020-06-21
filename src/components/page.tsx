import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/core'
import styles from './page.module.css';
import Link from './link'

const Page: React.FC = ({ children }) =>
  <div>
    <nav className={styles.navbar}>
      <Flex alignItems="center" justifyContent="space-between">
        <div />
        <Text>Catherine Podolski</Text>
        <Box>
          <Link to="/about">Bio</Link>
          <Link to="/contact">Contact</Link>
        </Box>
      </Flex>
    </nav>
    <div className={styles.content}>{children}</div>
  </div>

export default Page