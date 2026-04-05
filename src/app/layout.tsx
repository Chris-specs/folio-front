import { geistMono, geistSans } from '@/core/constants/fonts'
import type { Metadata } from 'next'
import './globals.css'

const title = 'Folio'
const description = 'Folio - Tu tracker de inversiones'

export const metadata: Metadata = {
    title: {
        template: `%s | ${title}`,
        default: title
    },
    description,
    metadataBase: new URL('https://project-domain.com'),
    openGraph: {
        title,
        description,
        siteName: title,
        images: [
            {
                url: '/og.png',
                width: 800,
                height: 600,
                alt: title
            }
        ],
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ['/og.png']
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es-MX">
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
