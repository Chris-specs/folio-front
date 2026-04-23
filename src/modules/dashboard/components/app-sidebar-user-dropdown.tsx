'use client'

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from '@/core/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from '@/core/components/ui/dropdown-menu'
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from '@/core/components/ui/sidebar'
import { Skeleton } from '@/core/components/ui/skeleton'
import { useKeydown } from '@/core/hooks/use-keydown'
import { authClient } from '@/modules/auth/lib/client'
import {
    GibbousMoonIcon,
    Logout01Icon,
    UnfoldMoreIcon,
    UserIcon
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

function AppSidebarUserDropdownCore() {
    const { data: session } = authClient.useSession()
    const { isMobile } = useSidebar()
    const queryClient = useQueryClient()
    const { replace } = useRouter()
    const { setTheme, resolvedTheme } = useTheme()
    useKeydown('m', handleThemeChange)

    function handleThemeChange() {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }

    const { mutate, isPending } = useMutation({
        mutationFn: () => authClient.signOut(),
        onSuccess: () => {
            queryClient.clear()
            replace('/sign-in')
        },
        onError: (error) => {
            toast.error('¡Uh oh! Algo salió mal', {
                description: JSON.parse(error.message).message
            })
        }
    })

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar>
                                <AvatarImage
                                    src={session?.user.image || undefined}
                                    alt={session?.user.name}
                                />
                                <AvatarFallback>
                                    {session?.user.name?.[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold capitalize">
                                    {session?.user.name}
                                </span>
                                <span className="truncate text-xs">
                                    {session?.user.email}
                                </span>
                            </div>
                            <HugeiconsIcon
                                icon={UnfoldMoreIcon}
                                className="ml-auto size-4"
                            />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56"
                        side={isMobile ? 'bottom' : 'right'}
                        align="end"
                        sideOffset={4}
                    >
                        <div>
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar>
                                    <AvatarImage
                                        src={session?.user.image || undefined}
                                        alt={session?.user.name}
                                    />
                                    <AvatarFallback>
                                        {session?.user.name[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold capitalize">
                                        {session?.user.name}
                                    </span>
                                    <span className="truncate text-xs">
                                        {session?.user.email}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <DropdownMenuSeparator />

                        <DropdownMenuGroup>
                            <Link href="/dashboard/account">
                                <DropdownMenuItem>
                                    <HugeiconsIcon icon={UserIcon} />
                                    Cuenta
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleThemeChange()
                                }}
                            >
                                <HugeiconsIcon icon={GibbousMoonIcon} />
                                Cambiar tema
                                <DropdownMenuShortcut>M</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            disabled={isPending}
                            onClick={() => mutate()}
                        >
                            <HugeiconsIcon icon={Logout01Icon} />
                            Cerrar sesión
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export const AppSidebarUserDropdown = dynamic(
    async () => AppSidebarUserDropdownCore,
    {
        ssr: false,
        loading: () => <Skeleton className="h-14 w-full" />
    }
)
