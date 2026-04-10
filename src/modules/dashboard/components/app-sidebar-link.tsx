'use client'

import { SidebarMenuButton } from '@/core/components/ui/sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DashboardMenuItemProps } from '../constants/sidebar'

export function AppSidebarLink({
    name,
    path,
    icon,
    isEnabled
}: Pick<DashboardMenuItemProps, 'name' | 'path' | 'icon' | 'isEnabled'>) {
    const pathname = usePathname()

    if (!isEnabled) {
        return (
            <>
                <SidebarMenuButton disabled>
                    {icon}
                    <span>{name}</span>
                </SidebarMenuButton>
                {/* <SidebarMenuBadge className="-top-1.5!">
                    <SparklesIcon className="mr-1 size-3" />
                    Proximamente
                </SidebarMenuBadge> */}
            </>
        )
    }

    return (
        <Link href={path}>
            <SidebarMenuButton
                isActive={pathname.startsWith(path)}
                tooltip={name}
            >
                {icon}
                <span>{name}</span>
            </SidebarMenuButton>
        </Link>
    )
}
