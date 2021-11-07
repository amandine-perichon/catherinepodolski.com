import React from 'react'
import Page from './components/page'
import PageContent from './components/page-content'
import { Text, Image, Stack, Heading, Flex } from '@chakra-ui/core'
import catherine from '../public/images/bio/catherine.jpg'

const AboutPage: React.FC = () => <Page>
  <PageContent>
    <Stack spacing={5}>

      <Heading size="md">Biographie</Heading>

      <Stack spacing={3}>
        <Flex
          direction={["column", "column", "row", "row"]}
          alignItems={["center", "center", "flex-start", "flex-start"]}
        >
          <Stack spacing={8}>
            <Text as="p">Née en 1956, Catherine Podolski est tombée très tôt dans la potion magique de l&apos;art et de la créativité. Depuis l&apos;enfance, elle se passionne pour la céramique grâce à laquelle elle crée un monde d&apos;une profondeur intense; un univers peuplé d&apos;émotions, de sentiments, d&apos;imagination et d&apos;intuition, cohabitant en harmonie parfaite.</Text>

            <Text marginLeft={10} as="p" fontStyle="italic">&quot;Mon père m&apos;a donné la passion du jardinage, ma mère celle de la céramique. À l&apos;âge où l&apos;on donne un crayon aux enfants, j&apos;ai reçu en prime une boule de terre !&quot;</Text>
          </Stack>
          <Image m={["30px 20px", "30px 20px", "0px 0px 10px 30px", "0px 0px 10px 30px"]} width={250} height={336} src={catherine} alt="Catherine Podolski" />
        </Flex>


        <Text as="p">Depuis lors, Catherine a réalisé de nombreuses oeuvres dont plusieurs intégrations de céramique monumentale à Watermael-Boitsfort, en collaboration avec E. Dubrunfaut, A. Cape, D. Vandendriessche et C. Michiels.</Text>

        <Text as="p">Catherine est diplômée de l&apos;enseignement artistique supérieur en céramique à l&apos;académie de dessin et des arts décoratifs de Watermael-Boitsfort (1980). Elle fréquente les ateliers d&apos;Ann Cape, de Tony Van Goolen et de Daniel Vandendriessche (1964 à 1983). De plus, elle a été formée chez Mirko Orlandini pour le tournage et la poterie à l&apos;académie Constantin Meunier d&apos;Etterbeek.</Text>
      </Stack>
    </Stack>
  </PageContent>
</Page>

export default AboutPage