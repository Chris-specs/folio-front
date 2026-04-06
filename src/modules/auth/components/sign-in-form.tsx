'use client'

import { Icons } from '@/core/components/custom/icons'
import { Button } from '@/core/components/ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { authClient } from '../lib/client'

export function SignInForm() {
    const { replace } = useRouter()

    async function handleGoogleSignIn() {
        const { error } = await authClient.signIn.social({
            provider: 'google',
            disableRedirect: true
        })
        if (error) {
            toast.error('¡Uh oh! Algo salió mal', {
                description: error.message
            })
            return
        }
        replace('/dashboard/home')
    }

    return (
        <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleSignIn}
        >
            <Icons.google className="size-5" />
            Iniciar con Google
        </Button>
    )
}
