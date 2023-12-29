import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import {BallonButton} from '../../molecules/BallonButton'
import {Field} from '@atsnek/jaen'
import {Link} from 'gatsby'
import {FC} from 'react'
import Slider from 'react-slick'
import {today} from '../../../common/utils'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {JaenPageIndexType} from '../../../types/commonTypes'

interface IWhiteDesktopSliderProps {
  showTitle?: boolean
  index: JaenPageIndexType
}

const WhiteDesktopSlider: FC<IWhiteDesktopSliderProps> = ({
  showTitle = false,
  index
}) => {
  const slidesToShow = 2

  var settings = {
    dots: true,
    infinite: index.childPages.length > slidesToShow,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1
  }

  return (
    <Container
      maxW={CONTAINER_MAX_WIDTH}
      display={{base: 'none', md: 'block'}}
      pos="relative"
      zIndex={1}>
      {showTitle && (
        <Text
          variant="cursive"
          fontSize={{base: '2xl', md: '4xl', lg: '5xl', xl: '6xl'}}>
          Wissen
        </Text>
      )}

      <Box
        borderRadius={{base: 'md', md: 'lg', lg: 'xl'}}
        boxShadow="dark"
        py="8"
        bg="white">
        <Slider {...settings} className="white_slider">
          {index.childPages.map((page, i) =>
            index.withJaenPage(
              page.id,
              <Box key={i} py="8">
                <Flex
                  h={{xl: '22.5rem'}}
                  pb="8"
                  flex="1"
                  px={{base: 0, lg: '4'}}
                  align="center"
                  gap="6"
                  justify="center"
                  flexDir={{base: 'column', md: 'row'}}>
                  <Box
                    boxShadow="light"
                    overflow="hidden"
                    boxSize={{md: '8rem', lg: '12rem', xl: '14.375rem'}}
                    bg="gray.800"
                    borderRadius="full">
                    <Field.Image name="image" />
                  </Box>
                  <Stack gap={{md: 0, lg: 2, xl: 4}} flex="1">
                    <Field.Text
                      fontSize={'md'}
                      name="date"
                      defaultValue={today()}
                    />
                    <Field.Text
                      as={Heading}
                      color="black.500"
                      fontSize={{md: 'sm', lg: 'md', xl: 'xl'}}
                      fontWeight="semibold"
                      noOfLines={2}
                      name="title"
                      defaultValue="Ballons & Ballons: Die Geschichte"
                      isRTF={false}
                    />
                    <Field.Text
                      fontSize={{md: 'xs', lg: 'sm', xl: 'md'}}
                      noOfLines={4}
                      isDisabled={true}
                      isRTF={false}
                      name="description"
                      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
                        libero risus semper Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Faucibus in libero risus
                        semper Lorem ipsum dolor sit amet, cipiscing elit. Faucibus in
                        libero risus semper Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
                        sit amet, consectetur adipiscing "
                    />
                    <Box>
                      <BallonButton
                        variant="outline"
                        as={Link}
                        to={`/wissen/${page.slug}`}
                        size="md"
                        py="7 !important">
                        Mehr anzeigen
                      </BallonButton>
                    </Box>
                  </Stack>
                </Flex>
              </Box>
            )
          )}
        </Slider>
      </Box>
    </Container>
  )
}
export default WhiteDesktopSlider
