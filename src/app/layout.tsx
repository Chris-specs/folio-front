import { geistMono, geistSans } from '@/core/constants/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Folio',
    description: 'Folio - Tu tracker de inversiones'
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
