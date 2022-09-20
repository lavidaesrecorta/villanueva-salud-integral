import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { mockHomePageProps } from '../pages_mocks/HomePage.mocks'
import styles from '../styles/Home.module.css'
import HomePage, { IHomePage } from './templates/HomePage'

const Home: NextPage = () => {
  return (
    <HomePage {...mockHomePageProps.base as IHomePage}/>
  )
}

export default Home
