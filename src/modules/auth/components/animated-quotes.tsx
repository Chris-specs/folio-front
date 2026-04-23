'use client'

import { AnimatePresence, motion as m } from 'motion/react'
import { useEffect, useState } from 'react'
import { QUOTES } from '../constants/quotes'

export function AnimatedQuotes() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % QUOTES.length)
        }, 8000)

        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence mode="popLayout">
            <m.div
                key={index}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                    opacity: 0
                }}
                className="relative flex h-full flex-col items-center justify-center gap-4 p-6"
            >
                <m.p
                    initial={{ opacity: 0, filter: 'blur(2px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    exit={{ opacity: 0, filter: 'blur(2px)' }}
                    transition={{ duration: 1 }}
                    className="text-center text-2xl text-white"
                >
                    {QUOTES[index].quote}
                </m.p>
                <m.p
                    initial={{ opacity: 0, filter: 'blur(2px)', y: 10 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    exit={{ opacity: 0, filter: 'blur(2px)' }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-center text-sm text-white"
                >
                    {QUOTES[index].author}
                </m.p>
            </m.div>
        </AnimatePresence>
    )
}
