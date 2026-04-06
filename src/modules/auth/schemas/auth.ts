import * as z from 'zod'

export const SignInFormSchema = z.object({
    email: z.email({
        message: 'Email invalido'
    }),
    password: z.string().min(8, {
        message: 'La contraseña debe tener al menos 8 caracteres'
    })
})

export const SignUpFormSchema = z
    .object({
        name: z
            .string()
            .min(4, {
                message: 'El nombre debe tener al menos 4 caracteres'
            })
            .max(50, {
                message: 'El nombre debe tener máximo 50 caracteres'
            }),
        email: z.email({
            message: 'Email inválido'
        }),
        password: z.string().min(8, {
            message: 'La contraseña debe tener al menos 8 caracteres'
        }),
        confirmPassword: z.string().min(8, {
            message: 'La contraseña debe tener al menos 8 caracteres'
        })
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.confirmPassword) {
            ctx.addIssue({
                message: 'Las contraseñas deben coincidir',
                code: 'custom',
                path: ['confirmPassword']
            })
        }
    })

export const RecoverPasswordFormSchema = z.object({
    email: z.email({
        message: 'Email inválido'
    })
})

export const ResetPasswordFormSchema = z.object({
    password: z.string().min(8, {
        message: 'La contraseña debe tener al menos 8 caracteres'
    }),
    confirmPassword: z.string().min(8, {
        message: 'La contraseña debe tener al menos 8 caracteres'
    })
})
