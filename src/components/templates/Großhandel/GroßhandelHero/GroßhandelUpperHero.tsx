import {
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  VStack,
  Flex,
  Image
} from '@chakra-ui/react'
import { Field } from '@snek-at/jaen'
import { FC } from 'react'
import { CONTAINER_MAX_WIDTH } from '../../../../constant/sizes'
import { StaticImage } from 'gatsby-plugin-image'
import LinkButtonField from '../../../fields/LinkButtonField'

interface IGroßhandelUpperHeroProps { }

const GroßhandelUpperHero: FC<IGroßhandelUpperHeroProps> = () => {
  return (
    <>
      <Flex
        pos="relative"
        // h={{
        //   base: '50rem',
        //   sm: '45rem',
        //   md: '55rem',
        //   xl: '60rem',
        //   '2xl': '65rem'
        // }}
        zIndex="0"
        bgImage="url('/images/großhandel/großhandel_bg.svg')"
        bgSize="100%,contain"
        bgRepeat="no-repeat"
        bgPos={{
          base: 'bottom 0 left 0',
          md: 'bottom 0 left 0',
        }}>
        <Container maxW={CONTAINER_MAX_WIDTH}>
          <VStack
            pos="relative"
            zIndex="1"
            py={{ base: '16', md: '44', lg: '52', xl: '56' }}
          >
            <Field.Text
              as={Heading}
              fontWeight="semibold"
              size="h5030"
              name="title"
              defaultValue="Großhandel"
            />
            <Field.RichText
              as={Heading}
              mb="-4 !important"
              fontWeight="semibold"
              size="h5020"
              name="subtitle"
              defaultValue="<p>Werde <i>Ballon-Partner</i></p>"
            />
            <HStack>
              <LinkButtonField
                size={{ base: 'sm', md: 'md' }}
                variant="outline"
                name="HeroButton1"
                defaultValue="Anmelden"
                defaultUrl={`/grosshandel`}
              />
              <LinkButtonField
                size={{ base: 'sm', md: 'md' }}
                name="HeroButton2"
                defaultValue="Registrieren"
                defaultUrl={`/grosshandel`}
              />
            </HStack>
            <Grid
              right="0"
              pos="absolute"
              top="6.25rem"
              w={{ md: '12.5rem', lg: '16.875rem', xl: '20rem' }}
              h="40vh">
              <Image
                alt="Herzballons gebunden an ein Paket"
                src={"/images/großhandel/ballon_box.png"}
              />
            </Grid>
          </VStack>
        </Container>
      </Flex>
    </>
  )
}
export default GroßhandelUpperHero
