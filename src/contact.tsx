import React from 'react'
import Page from './components/page'
import PageContent from './components/page-content'
import { Heading, Stack, Text, Flex } from '@chakra-ui/core'

const ContactPage: React.FC = () => <Page>
  <PageContent>
    <Stack spacing={5}>
      <Heading size="md">Contact</Heading>
      <p><a href="mailto:catherine.podolski@skynet.be">catherine.podolski@skynet.be</a></p>
      <Flex as="footer" justifyContent="center">
        <Text as="span" color="grey" marginTop="60px" fontSize="xs">© Catherine Podolski - Tous droits réservés - 2020</Text>
      </Flex>
    </Stack>
  </PageContent>
</Page >

export default ContactPage