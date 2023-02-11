import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Meta from 'Components/Meta'
import HomePage from 'Components/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Meta title="Homepage"/>
     <HomePage />
    </>
  )
}
