import {
  Badge,
  Box,
  Container,
  Flex,
  FlexProps,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {FC} from 'react'
import {WissenArticleMetaBar} from '../../organisms/WissenArticleMetaBar'

interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  return (
    <Box
      bgImage={{
        base: 'url("/images/blog_page/hero_bg_mobile.svg")',
        md: '/images/blog_overview/hero_bg.svg'
      }}
      pt={{base: 4, md: 24}}
      pb={{base: 16, md: 24}}
      bgPos={{base: 'top', md: 'top 2rem left 0'}}
      bgRepeat="no-repeat"
      bgSize="cover">
      <Stack mx="auto" w="full" maxW="6xl" spacing="4">
        <Box
          borderRadius="lg"
          boxShadow="dark"
          overflow={'hidden'}
          mx="auto"
          w="full"
          maxW="6xl"
          h={'xl'}>
          <Field.Image name="image" lightbox />
        </Box>
        <WissenArticleMetaBar mx="auto" w="full" maxW="6xl" />
      </Stack>
    </Box>
  )
}
