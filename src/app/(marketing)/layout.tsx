import { Footer } from '@/modules/marketing/components/footer'
import { Header } from '@/modules/marketing/components/header'

interface MarketingLayoutProps {
    children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
    return (
        <>
            <Header />
            <main className="relative">{children}</main>
            <Footer />
        </>
    )
}
