import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      Hello there! This is Nextjs starter
    </div>
  )
}

export default Home
