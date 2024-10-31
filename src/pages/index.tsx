'use client'
import { Typography, useTheme } from '@mui/material'
import Head from 'next/head'
import CustomTextField from 'src/components/text-field'
import { useSettings } from 'src/hooks/useSettings'

export default function Home() {
  const theme = useTheme()
  console.log(theme)
  const { settings } = useSettings()
  console.log(settings)
  return (
    <>
      <Head>
        <title>NextJS-Shop</title>
        <meta name='description' content='NextJS-Shop' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  )
}
