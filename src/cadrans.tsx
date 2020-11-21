import React from 'react'
import Page from './components/page'
import PageContent from './components/page-content'
import { Image, Text, Link, Stack, Heading } from '@chakra-ui/core'
import cadran from '../public/images/house/cera1626273.jpg'
import cadran2 from '../public/images/house/cera1272733.jpg'

const CadransPage: React.FC = () => <Page>
  <PageContent>
    <Stack spacing={5}>

      <Heading size="md">Cadrans Solaires</Heading>

      <Stack spacing={3}>
        <Text as="p">Catherine réalise des cadrans solaires, avec l&apos;aide de son mari Étienne. Ils peuvent être admirés sur leur maison à Bruxelles, ainsi qu&apos;à Perinaldo.</Text>

        <Image padding="10px" m={["30px 20px", "30px 20px", "0px 0px 10px 30px", "0px 0px 10px 30px"]} src={cadran} />

        <Image padding="10px" m={["30px 20px", "30px 20px", "0px 0px 10px 30px", "0px 0px 10px 30px"]} src={cadran2} />


        <Text as="h2">Ses cadrans sont mentionés sur plusieurs sites de recensement de cadrans solaires:</Text>

        <Link textDecoration="underline" href="https://www.gnomonica.be/fr/gnomonicaBxls.html" isExternal>
          Gnomonica
        </Link>

        <Link textDecoration="underline" href="http://cadrans-solaires.scg.ulaval.ca/v08-08-04/ccsq/XIX-4-p20-21.pdf" isExternal>
          Les écrits en gnomonique lus en 2012
        </Link>

        <Link textDecoration="underline" href="http://michel.lalos.free.fr/cadrans_solaires/autres_pays/belgique/cs_region_bruxelles.php#bruxelles" isExternal>
          Michel Lalos - Bruxelles
        </Link>

        <Link textDecoration="underline" href="http://michel.lalos.free.fr/cadrans_solaires/autres_pays/italie/ligurie/imperia/cs_perinaldo.php" isExternal>
          Michel Lalos - Perinaldo
        </Link>
      </Stack>
    </Stack>
  </PageContent>
</Page>

export default CadransPage