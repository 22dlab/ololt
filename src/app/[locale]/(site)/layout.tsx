import '@/style/global.css'

import type { Metadata } from 'next'

import { I18nProviderClient } from '@/locale/client'

import Devtool from '@/components/Devtool'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import { Analytics } from '@vercel/analytics/react'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (locale === 'en') {
    return {
      title: 'Climate Change & Carbon Market Development Center',
      description:
        'OLOLT Center is a leading Mongolian organization pioneering climate change mitigation and sustainable development. Our expertise spans risk assessments, policy planning, climate finance, project implementation, carbon markets, energy certification, ESG integration, GHG accounting, and capacity building. With a commitment to transparency, research-driven approaches, and global best practices, we empower stakeholders through innovative solutions for a sustainable future.'
    }
  } else {
    return {
      title: 'Уур амьсгалын өөрчлөлт, Нүүрстөрөгчийн зах зээлийн хөгжлийн төв',
      description:
        'OLOLT Center is a leading Mongolian organization pioneering climate change mitigation and sustainable development. Our expertise spans risk assessments, policy planning, climate finance, project implementation, carbon markets, energy certification, ESG integration, GHG accounting, and capacity building. With a commitment to transparency, research-driven approaches, and global best practices, we empower stakeholders through innovative solutions for a sustainable future.'
    }
  }
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
        <link
          rel='icon'
          href='/favicon/favicon.ico'
          media='(prefers-color-scheme: light)'
        />
        <link
          rel='icon'
          href='/favicon/favicon-dark.ico'
          media='(prefers-color-scheme: dark)'
        />
      </head>
      <body>
        <Analytics />
        <I18nProviderClient locale={locale}>
          <Navbar />
          {children}
          <Devtool />
          {/* <Footer /> */}
        </I18nProviderClient>
      </body>
    </html>
  )
}
