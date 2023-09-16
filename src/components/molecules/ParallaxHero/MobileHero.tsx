import {
  Box,
  Image,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  chakra
} from '@chakra-ui/react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import HBalloon from '../../../common/assets/hballoon.inline.svg'
import {Field} from '@atsnek/jaen'
import LinkButtonField from '../../fields/LinkButtonField'
import {useScrollSync} from '../../hooks/scroll'
import {useMemo} from 'react'
import {useContentPages} from '../../hooks/useContentPages'
import CardWithImageBackground from '../../CardWithImageBackground'
import SkylineL1 from '../../../common/assets/skyline1.inline.svg'
import SkylineL2 from '../../../common/assets/skyline2.inline.svg'
import SkylineL3 from '../../../common/assets/skyline3.inline.svg'
import * as style from './style'
import BallonSvg from '../ParallaxBackground/BallonSvg'

export const MobileHero = () => {
  const {ref, scrollTop} = useScrollSync()
  const contentPagesIndex = useContentPages()

  const noScroll = false

  const grid = useMemo(
    () => (
      <SimpleGrid
        w="full"
        placeItems="center"
        my="40"
        mx={{base: '0', xl: '5vw'}}
        minChildWidth={{base: '100%', lg: '300px'}}
        spacing="30px">
        {contentPagesIndex.children.map((page, i) =>
          contentPagesIndex.withJaenPage(
            page.id || '',
            <GridItem
              justifySelf="center"
              minH={'300px'}
              h={{base: '30vw', lg: '60vh'}}
              minW={'300px'}
              w={{
                base: '80vw',
                lg: `calc(70vw / ${contentPagesIndex.children.length})`
              }}>
              <CardWithImageBackground
                w="100%"
                minW="15rem"
                card={{
                  headingFieldName: `homeHeroHeading`,
                  headingDefaultValue: 'Title',
                  textFieldName: `homeHeroText`,
                  textDefaultValue: 'Text',
                  imageFieldName: `homeHeroImage`,
                  imageDefaultValue: undefined,
                  linkUrl: `/${page.slug}`
                }}
              />
            </GridItem>
          )
        )}
      </SimpleGrid>
    ),
    [contentPagesIndex.children.length]
  )

  return (
    <Box
      //bgColor={'white'}
      css={style.Section(noScroll)}>
      <chakra.svg
        as={SkylineL1}
        position={'absolute'}
        top={'0'}
        left={'0'}
        width={'100%'}
        minWidth={'2500px'}
      />
      <chakra.svg
        as={SkylineL2}
        position={'absolute'}
        top={'0'}
        left={'0'}
        width={'100%'}
        minWidth={'2500px'}
      />
      <chakra.svg
        as={SkylineL3}
        position={'absolute'}
        top={'0'}
        left={'0'}
        width={'100%'}
        minWidth={'2500px'}
      />
      <Stack
        maxW={CONTAINER_MAX_WIDTH}
        height={'calc(100vh - 7.5rem)'}
        pb="48"
        w={'100%'}
        top={'0'}
        position={'relative'}
        justifyContent="center"
        alignItems={'center'}
        display={{base: 'flex', md: 'none'}}>
        <HStack>
          <BallonSvg as={HBalloon} className="background-Ballon" />
          <Field.Text
            as={Heading}
            name="heroTextBallons"
            defaultValue="<i>Ballons</i>"
            fontSize={{base: '2xl', md: '8xl', lg: '9xl'}}
            fontWeight="semibold"
            textAlign="center"
            pt="2"
          />
        </HStack>
        <Stack alignItems={'center'}>
          <LinkButtonField
            name="heroButton2"
            defaultValue="Großhandel"
            defaultUrl={`/grosshandel`}
            size={{base: 'sm', md: 'md'}}
            variant="outline"
            ml="3"
          />
          <LinkButtonField
            name="heroButton1"
            defaultValue="Zum Shop"
            defaultUrl={`/products`}
            size={{base: 'sm', md: 'md'}}
            ml="3"
            mt="3"
          />
        </Stack>
        <Box
          position={'absolute'}
          bottom={'10%'}
          left={'50%'}
          id="scrollarrows"
          alignSelf="flex-end"
          h="100px"
          visibility={scrollTop < 100 ? 'visible' : 'hidden'}>
          <span></span>
          <span></span>
          <span></span>
        </Box>
      </Stack>
      <Box>{grid}</Box>
    </Box>
  )
}
