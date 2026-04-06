import { SignInForm } from '@/modules/auth/components/sign-in-form'

export default function SignInPage() {
    return (
        <div className="space-y-2">
            <div className="flex flex-col items-center pb-4">
                <h1 className="text-2xl font-medium">Bienvenido a Folio</h1>
                <p className="text-muted-foreground">Inicia sesión</p>
            </div>
            <SignInForm />
        </div>
    )
}
