import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import factory from '../themes/factory';
import HomePage from '../themes/theme-1/pages/HomePage';

const inter = Inter({ subsets: ['latin'] })

type Props {
  factory: {
    homepage: Element
  }
}

export default function Home(props: Props) {
  return (
    <>{props.factory.homepage}</>
  )
}
