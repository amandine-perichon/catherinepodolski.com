import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/core'
import styles from './page.module.css';
import Link from './link'

const Page: React.FC = ({ children }) =>
  <div>
    <nav className={styles.navbar}>
      <Flex direction={["column", "row", "row", "row"]} alignItems="center" justifyContent="space-between">
        <div />
        <Link className={styles.link} to="/">
          <Text
            fontFamily="Sacramento"
            lineHeight={["1.5rem", "3rem", "3.25rem", "3.25rem"]}
            fontSize={["1.5rem", "2rem", "2.5rem", "2.5rem"]}
          >
            Catherine Podolski
          </Text>
        </Link>
        <Box>
          <Link to="/">Accueil</Link>
          <Link to="/about">Biographie</Link>
          <Link to="/contact">Contact</Link>
        </Box>
      </Flex>
    </nav>
    <div className={styles.content}>
      {children}
    </div>
  </div>

export default Page