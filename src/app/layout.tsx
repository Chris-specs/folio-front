import { Toaster } from '@/core/components/ui/sonner'
import { geistMono, geistSans } from '@/core/constants/fonts'
import { QueryClientProvider } from '@/core/providers/query-client'
import { ThemeProvider } from '@/core/providers/theme'
import type { Metadata } from 'next'
import './globals.css'

const title = 'Folio'
const description = 'Tu tracker de inversiones'

export const metadata: Metadata = {
    title: {
        template: `%s | ${title}`,
        default: title
    },
    description,
    metadataBase: new URL('https://folio-track.vercel.app'),
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
        <html lang="es-MX" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <QueryClientProvider>
                        {children}
                        <Toaster />
                    </QueryClientProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
