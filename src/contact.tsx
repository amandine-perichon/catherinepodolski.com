import React from 'react'
import Page from './components/page'
import PageContent from './components/page-content'
import { Heading, Stack } from '@chakra-ui/core'

const ContactPage: React.FC = () => <Page>
  <PageContent>
    <Stack spacing={5}>
      <Heading size="md">Contact</Heading>
      <p><a href="mailto:catherine.podolski@skynet.be">catherine.podolski@skynet.be</a></p>
    </Stack>
  </PageContent>
</Page >

export default ContactPage