import { Icons } from '@/core/components/custom/icons'
import { Separator } from '@/core/components/ui/separator'
import { SidebarTrigger } from '@/core/components/ui/sidebar'
import { cn } from '@/core/utils/style'
import Link from 'next/link'
import { CurrentPageAnnouncer } from './current-page-announcer'

export function Header() {
    return (
        <header
            className={cn(
                'pointer-events-auto sticky top-0 left-0 z-50 flex w-full items-center justify-between gap-2 p-3 md:py-6',
                'mask-b-from-background mask-b-from-70% mask-b-to-transparent mask-b-to-100% backdrop-blur-xs',
                'from-background via-background/80 to-background/50 bg-linear-to-b'
            )}
        >
            <div className="flex flex-auto items-center gap-3">
                <Link href="/dashboard/home" className="md:hidden">
                    <Icons.isotype className="h-7 w-auto" />
                </Link>
                <SidebarTrigger className="hidden md:inline-flex" />
                <Separator
                    orientation="vertical"
                    className="data-[orientation=vertical]:h-8"
                />
                <div className="flex w-full max-w-xs">
                    <CurrentPageAnnouncer />
                </div>
            </div>
            <div className="flex items-center justify-end gap-2">
                <SidebarTrigger className="md:hidden" />
            </div>
        </header>
    )
}
