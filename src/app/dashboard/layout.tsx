import { SidebarInset, SidebarProvider } from '@/core/components/ui/sidebar'
import { cn } from '@/core/utils/style'
import { AppSidebar } from '@/modules/dashboard/components/app-sidebar'
import { Header } from '@/modules/dashboard/components/header'

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <SidebarProvider className="md:h-dvh">
            <AppSidebar />
            <SidebarInset>
                <div className="flex flex-auto flex-col md:overflow-x-hidden">
                    <div
                        className={cn(
                            'no-scrollbar @container/main relative flex-auto overflow-x-clip',
                            '[&>section]:mx-auto [&>section]:h-fit [&>section]:w-full [&>section]:max-w-[1360px] [&>section]:space-y-5 [&>section]:p-4 md:[&>section]:p-8',
                            '[&_h1]:mb-6 [&_h1]:text-2xl [&_h1]:font-medium md:[&_h1]:mb-8',
                            '[&_h2]:mb-6 [&_h2]:w-full [&_h2]:max-w-[538px] [&_h2]:text-sm [&_h2]:leading-normal [&_h2]:font-light [&_h2]:opacity-60 md:[&_h2]:mb-8'
                        )}
                    >
                        <Header />
                        {/* <section className="pb-0!">
                                <Breadcrumb />
                            </section> */}
                        {children}
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
