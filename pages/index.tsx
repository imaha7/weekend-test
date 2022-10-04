import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import ArrowForward from '@mui/icons-material/ArrowForward'
import { AppBar, Avatar, Box, Button, Card, CardContent, Container, Chip, IconButton, ImageListItem, ImageListItemBar, Stack, Skeleton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { getTestimonial, getHelpTips } from "../actions/action";

const Home: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  };
  const [testimonial, setTestimonial] = React.useState([]);
  const [helpTips, setHelpTips] = React.useState([]);

  const getTestimonialWeekend = useQuery(
    ["getTestimonial"],
    () => getTestimonial(),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      onSuccess: (response: any) => {
        setTestimonial(response);
        console.log(response);
      },
      onError: (error: any) => {
        console.log(error);
      },
    }
  );

  const getHelpTipsWeekend = useQuery(
    ["getHelpTips"],
    () => getHelpTips(),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      onSuccess: (response: any) => {
        setHelpTips(response);
        console.log(response);
      },
      onError: (error: any) => {
        console.log(error);
      },
    }
  );

  const myLoader = ({ src }: any) => {
    return `${src}?w=auto&q=${75}`
  }

  useEffect(() => {
    getTestimonialWeekend;
    getHelpTipsWeekend;
  }, [getTestimonialWeekend, getHelpTipsWeekend]);

  return (
    <Box>
      <Head>
        <title>Weekend FE Test Landing Page</title>
        <meta name="description" content="Weekend FE Test Landing Page" />
        <link rel="icon" href="/avatar.svg" />
      </Head>
      <Box className={styles.body} sx={{ backgroundColor: 'white' }}>
        <Container maxWidth={"lg"}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation={0} color={"inherit"} position={"static"} sx={{ py: 1 }}>
              <Toolbar>
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Box>
                    <Avatar variant={"rounded"} alt="avatar.svg" src="/avatar.svg" sx={{ width: 48, height: 48 }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
                      Good Morning
                    </Typography>
                    <Typography className={"font-bold"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      Fellas
                    </Typography>
                  </Box>
                </Stack>
              </Toolbar>
            </AppBar>
          </Box>
        </Container>
      </Box>
      <Box className={"min-h-screen"} sx={{ backgroundImage: `url(bg-1.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: !isMobile ? 'auto' : '100%', backgroundColor: '#EEBECE' }}>
        <Container maxWidth={"lg"} sx={{ px: 2 }}>
          <Box sx={{ minHeight: '650px' }}>
            <Box sx={{ pt: 10 }}>
              <Typography className={"font-bold"} align={"center"} variant={"h2"} component={"div"} sx={{ color: 'white' }}>
                WEEKEND FROM HOME
              </Typography>
            </Box>
            <Box sx={{ mt: 0 }}>
              <Typography className={"italic"} align={"center"} variant={"subtitle1"} component={"div"} sx={{ color: 'white' }}>
                Stay active with a little workout.
              </Typography>
            </Box>
            <Box className={"text-center"} sx={{ mt: 10, mx: "auto", minHeight: '300px' }}>
              <Box sx={{ position: 'absolute', left: 0, right: 0 }}>
                <Image alt={"image-1.svg"} src={"/image-1.svg"} width={184} height={305} priority />
              </Box>
              <Box sx={{ position: 'absolute', left: 0, right: 0, mt: '200px' }}>
                <Button disableElevation variant={"contained"} style={{ color: 'black', backgroundColor: 'white', borderRadius: '30px', minWidth: '256px', paddingTop: '15px', paddingBottom: '15px', textTransform: 'none' }}>
                  Let&apos;s Go
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box sx={{ minHeight: '300px', backgroundImage: `url(group-avatar.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'auto', backgroundPosition: 'right' }}></Box>
        <Box className={"text-center"} sx={{ minHeight: '250px' }}>
          <Container maxWidth={"sm"} sx={{ px: 2 }}>
            <Typography align={'right'} variant="body1" component="div">
              <b style={{ color: '#0B24FB' }}>Deffinition;</b> a practice or exercise to test or improve one&apos;s fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
            </Typography>
            <Typography align={'right'} variant="body1" component="div" sx={{ mt: 4, color: 'white' }}>
              -weekend team
            </Typography>
          </Container>
        </Box>
        <Container maxWidth={"md"} sx={{ px: 2 }}>
          <Box sx={{ minHeight: '200px', backgroundImage: `url(oval.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'auto', backgroundPosition: 'top | left' }}>
            <Box sx={{ pt: !isMobile ? 7 : 5 }}>
              <Typography className={"font-bold"} align={"center"} variant={"h3"} component={"div"} sx={{ color: 'white' }}>
                Testimonial
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Box sx={{ minHeight: '10px', backgroundColor: '#EEBECE' }}></Box>
        <Container maxWidth={"md"} sx={{ position: 'absolute', mt: -7, left: 0, right: 0 }}>
          <Box sx={{ px: 2 }}>
            <Carousel itemClass={styles.carouselItem} partialVisible={true} responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} swipeable={true}>
              {getTestimonialWeekend.isFetching ? [0, 1, 2].map((item: any, index: number) => {
                return <Skeleton key={index} variant="rectangular" width={'100%'} height={160} sx={{ bgcolor: 'grey.100' }} />
              }) : testimonial.map((item: any, index: number) => {
                return <Card key={index} sx={{ borderRadius: 0, minHeight: '160px' }}>
                  <CardContent>
                    <Box sx={{ mb: 2 }}>
                      <Typography className={"font-bold"} variant="h4" component="div">
                        {item.by}
                      </Typography>
                    </Box>
                    <Typography variant="body2">
                      {item.testimony}
                    </Typography>
                  </CardContent>
                </Card>
              })}
            </Carousel>
          </Box>
        </Container>
        <Box sx={{ minHeight: '150px', backgroundColor: 'black' }}></Box>
      </Box>
      <Box className={"min-h-screen"} sx={{ pt: 10, backgroundColor: 'black' }}>
        <Box sx={{ mb: 4, px: 4 }}>
          <Typography className={"font-bold text-white"} align={!isMobile ? 'left' : "center"} variant={"h3"} component={"div"}>
            POV
          </Typography>
        </Box>
        <Box className={"text-center"} sx={{ mb: 15 }}>
          <Container maxWidth={"md"} sx={{ px: 2 }}>
            <Typography className={"text-white"} align={!isMobile ? 'left' : 'center'} variant="body1" component="div" sx={{ px: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </Container>
        </Box>
        <Box sx={{ mb: 4, px: 4 }}>
          <Typography className={"font-bold text-white"} align={!isMobile ? 'left' : "center"} variant={"h3"} component={"div"}>
            Resource
          </Typography>
        </Box>
        <Box className={"text-center"} sx={{ mb: 15 }}>
          <Container maxWidth={"md"} sx={{ px: 2 }}>
            <Typography className={"text-white"} align={!isMobile ? 'left' : 'center'} variant="body1" component="div" sx={{ px: 2 }}>
              These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best
            </Typography>
          </Container>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography className={"font-bold text-white"} align={"center"} variant={"h3"} component={"div"}>
            Help & Tips
          </Typography>
        </Box>
        <Box sx={{ minHeight: '320px', mb: !isMobile ? 10 : 4, px: 4 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={"center"} spacing={!isMobile ? 1 : 2}>
            {getHelpTipsWeekend.isFetching ? [0, 1, 2].map((item: any, index: number) => {
              return <Skeleton key={index} variant="rectangular" width={'100%'} height={160} sx={{ bgcolor: 'grey.100' }} />
            }) : helpTips.map((item: any, index: number) => {
              return <ImageListItem key={index}>
                <Image
                  crossOrigin={"anonymous"}
                  loader={myLoader}
                  placeholder="blur"
                  blurDataURL={`${myLoader}`}
                  objectFit="contain"
                  width={311}
                  height={176}
                  src={item.image}
                  alt={item.title}
                  priority
                />
                <ImageListItemBar
                  title={
                    <Typography noWrap className={"font-bold text-white break-words"} align={"center"} variant={"body1"} component={"div"}>
                      {item.title}
                    </Typography>
                  }
                  actionIcon={
                    <IconButton
                      style={{ color: '#0B24FB', backgroundColor: 'white', marginLeft: 10 }}
                      aria-label={`info about ${item.title}`}
                    >
                      <ArrowForward />
                    </IconButton>
                  }
                  sx={{ py: 2, px: 1 }}
                />
              </ImageListItem>
            }
            )}
          </Stack>
        </Box>
        <Box sx={{ mb: 4, px: 4 }}>
          <Typography className={"font-bold text-white"} align={!isMobile ? 'left' : "center"} variant={"h3"} component={"div"}>
            You&apos;re all set.
          </Typography>
        </Box>
        <Box className={"text-center"}>
          <Container maxWidth={"sm"} sx={{ px: 2 }}>
            <Typography className={"text-white"} align={!isMobile ? 'left' : 'center'} variant="body1" component="div" sx={{ px: 2 }}>
              The wise man therefore always holds in these matters to this principle of selection.
            </Typography>
          </Container>
          <Box sx={{ minHeight: '300px', backgroundImage: `url(image-2.svg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'auto', backgroundPosition: 'left', mt: !isMobile ? 8 : -15 }}></Box>
        </Box>
      </Box>
      <footer className={styles.footer}>
        <Container maxWidth={"lg"}>
          <Box sx={{ mx: !isMobile ? 0 : 10 }}>
            <Stack direction={{ xs: 'row', sm: 'row' }} justifyContent={"space-between"}>
              <Typography className={"text-white"} variant="body1" component="div">
                <b>wknd</b>@2020
              </Typography>
              <Chip label="alpha version 0.1" variant="outlined" sx={{ color: 'white' }} />
            </Stack>
          </Box>
        </Container>
      </footer>
    </Box>
  )
}

export default Home
