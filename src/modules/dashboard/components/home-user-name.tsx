'use client'

import { Skeleton } from '@/core/components/ui/skeleton'
import { authClient } from '@/modules/auth/lib/client'
import dynamic from 'next/dynamic'

function HomeUserNameCore() {
    const { data: session } = authClient.useSession()

    return <span>{session?.user.name?.split(' ')[0]}</span>
}

export const HomeUserName = dynamic(async () => HomeUserNameCore, {
    ssr: false,
    loading: () => (
        <Skeleton className="inline-block h-6 w-full max-w-30 align-middle" />
    )
})
