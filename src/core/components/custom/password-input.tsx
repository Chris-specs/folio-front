import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput
} from '@/core/components/ui/input-group'
import { ViewIcon, ViewOffIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'

export function PasswordInput({
    ...props
}: Omit<React.ComponentProps<'input'>, 'autoComplete' | 'type'>) {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <InputGroup>
            <InputGroupInput
                type={isVisible ? 'text' : 'password'}
                autoComplete="password"
                {...props}
            />
            <InputGroupAddon align="inline-end">
                <InputGroupButton
                    aria-label="Toggle password visibility"
                    title="Toggle password visibility"
                    size="icon-xs"
                    onClick={() => {
                        setIsVisible(!isVisible)
                    }}
                >
                    {isVisible ? (
                        <HugeiconsIcon icon={ViewIcon} />
                    ) : (
                        <HugeiconsIcon icon={ViewOffIcon} />
                    )}
                </InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    )
}
