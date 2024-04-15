import '@/style/global.css'

import type { Metadata } from 'next'

import { I18nProviderClient } from '@/locale/client'

import Devtool from '@/components/Devtool'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ololt'
}

export default function RootLayout({
  params: { locale },
  children
}: {
  params: { locale: string }
  children: React.ReactElement
}) {
  return (
    <html lang='en'>
      <head>
        {/* <link
          rel='icon'
          href='/favicon/favicon.ico'
          media='(prefers-color-scheme: light)'
        />
        <link
          rel='icon'
          href='/favicon/favicon-dark.ico'
          media='(prefers-color-scheme: dark)'
        /> */}
      </head>
      <body>
        <I18nProviderClient locale={locale}>
          <Navbar />
          {children}
          <Devtool />
          <Footer />
        </I18nProviderClient>
      </body>
    </html>
  )
}
