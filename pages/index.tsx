
import { Center, Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { AppBar } from '../components/AppBar'
import { StudentIntroList } from '../components/StudentIntroList'
import { Form } from '../components/Form'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <Head>
        <title>Auto Mobile review</title>
      </Head>
      <AppBar />
      <Center>
        <Box>
          <Heading as="h1" size="l" color="white" ml={4} mt={8}>
             Name of your auto Mobile 
          </Heading>
          <Form />
          <Heading as="h1" size="l" color="white" ml={4} mt={8}>
            How do u find it !
          </Heading>
          <StudentIntroList />
        </Box>
      </Center>
    </div>
  )
}

export default Home
