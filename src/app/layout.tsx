import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import TopBanner from '@/components/banners/TopBanner'
import ContactInfo from '@/components/contacts/ContactInfo'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative' >
        <TopBanner />
        <Header />
        <div className='contact-info'>
          <ContactInfo />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
