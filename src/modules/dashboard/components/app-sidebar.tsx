import { Icons } from '@/core/components/custom/icons'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/core/components/ui/sidebar'
import { Settings01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'
import { DASHBOARD_MENU_ITEMS } from '../constants/sidebar'
import { AppSidebarLink } from './app-sidebar-link'
import { AppSidebarUserDropdown } from './app-sidebar-user-dropdown'

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Link
                            href="/dashboard/home"
                            className="relative z-20 flex items-center gap-4"
                        >
                            <SidebarMenuButton size="lg">
                                <Icons.isologo className="h-7! w-auto!" />
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {DASHBOARD_MENU_ITEMS.filter(
                                ({ isShow }) => isShow
                            ).map(({ name, path, icon, isEnabled }, i) => (
                                <SidebarMenuItem key={`i-${path}-${i}`}>
                                    <AppSidebarLink
                                        name={name}
                                        path={path}
                                        icon={icon}
                                        isEnabled={isEnabled}
                                    />
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="mt-auto">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <AppSidebarLink
                                    name="Ajustes"
                                    path="/dashboard/settings"
                                    icon={
                                        <HugeiconsIcon icon={Settings01Icon} />
                                    }
                                    isEnabled={true}
                                />
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <AppSidebarUserDropdown />
            </SidebarFooter>
        </Sidebar>
    )
}
