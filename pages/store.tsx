import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../components/home.module.css'

export default function aboutPage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <meta name="description" content="My Asylum Boilerplater Description"></meta>
        <title>MyAsylum | About</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;900&display=swap" rel="stylesheet"></link>
        <link rel="manifest" href="/manifest.json"></link>
      </Head>

      <div className={styles.container}>
        <h1>MyAsylum</h1>
        <p>Hello world! '/about'</p>
        <p>Created using Express / NextJS</p>

        <Link href="/">
          <a>Return Home</a>
        </Link>
      </div>
    </>
  )
}