import { Icons } from '@/core/components/custom/icons'
import { AnimatedQuotes } from '@/modules/auth/components/animated-quotes'
import Image from 'next/image'
import Link from 'next/link'

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <main>
            <div className="grid min-h-svh lg:grid-cols-2">
                <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-4 md:p-10">
                    <div className="flex w-full max-w-sm flex-col gap-6">
                        <Link href="/" className="self-center">
                            <Icons.isotype className="h-12 w-auto" />
                        </Link>
                        <div className="flex flex-col gap-6">
                            {children}
                            {/* <p className="text-muted-foreground px-8 text-center text-xs">
                            {t.rich('byClicking', {
                                terms: (chunks) => (
                                    <Link
                                    href="/terms-of-service"
                                    className="hover:text-primary underline underline-offset-4"
                                    >
                                    {chunks}
                                    </Link>
                                    ),
                                    privacy: (chunks) => (
                                        <Link
                                        href="/privacy-policy"
                                        className="hover:text-primary underline underline-offset-4"
                                        >
                                        {chunks}
                                        </Link>
                                        )
                                        })}
                                        </p> */}
                        </div>
                    </div>
                </div>
                <div className="bg-muted relative m-6 ml-0 overflow-hidden rounded-4xl">
                    <Image
                        src="/img/auth-bg.png"
                        alt="Auth background"
                        fill
                        className="object-cover object-left"
                    />
                    <AnimatedQuotes />
                </div>
            </div>
        </main>
    )
}
