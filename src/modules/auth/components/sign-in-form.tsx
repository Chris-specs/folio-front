'use client'

import { Icons } from '@/core/components/custom/icons'
import { Button } from '@/core/components/ui/button'
import { toast } from 'sonner'
import { authClient } from '../lib/client'

export function SignInForm() {
    async function handleGoogleSignIn() {
        const { error } = await authClient.signIn.social({
            provider: 'google',
            callbackURL: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/home`
        })
        if (error) {
            toast.error('¡Uh oh! Algo salió mal', {
                description: error.message
            })
            return
        }
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
