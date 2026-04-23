import { useEffect } from 'react'

export function useKeydown(key: string, callback: () => void) {
    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === key) {
                callback()
            }
        }
        window.addEventListener('keydown', handleKeydown)
        return () => {
            window.removeEventListener('keydown', handleKeydown)
        }
    }, [key, callback])
}
