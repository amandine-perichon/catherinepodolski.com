import React from 'react'
import {
  Box,
  Flex,
  Text, Tabs, TabList, Tab
} from '@chakra-ui/core'
import styles from './page.module.css';
import Link from './link'
import { useMediaQuery } from "@chakra-ui/react"

const Page: React.FC = ({ children }) => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

  return <div>
    <Flex paddingTop="20px" justifyContent="center">
      <Link className={styles.link} to="/">
        <Text
          fontFamily="Sacramento"
          fontSize={["1.5rem", "1.5rem", "1.5rem", "2.5rem"]}
        >
          Catherine Podolski
          </Text>
      </Link>
    </Flex>
    <nav className={styles.navbar}>
      <Tabs variant="unstyled" align="center" orientation={isLargerThan500 ? "horizontal" : "vertical"}
      >
        <TabList>
          <Tab><Link to="/"><Box>Accueil</Box></Link></Tab>
          <Tab><Link to="/bio"><Box>Biographie</Box></Link></Tab>
          <Tab><Link to="/oeuvres"><Box>Oeuvres</Box></Link></Tab>
          <Tab><Link to="/cadrans"><Box>Cadrans solaires</Box></Link></Tab>
          <Tab><Link to="/contact"><Box>Contact</Box></Link></Tab>
        </TabList >
      </Tabs >
    </nav >
    <div className={styles.content}>
      {children}
    </div>
  </div >
}
export default Page