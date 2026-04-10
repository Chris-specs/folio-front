'use client'

import {
    isServer,
    QueryClientProvider as QCP,
    QueryClient
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    })
}

let browserQueryClient: QueryClient | undefined

function getQueryClient() {
    if (isServer) {
        return makeQueryClient()
    } else {
        if (!browserQueryClient) browserQueryClient = makeQueryClient()
        return browserQueryClient
    }
}

interface QueryClientProviderProps {
    children: React.ReactNode
}

export function QueryClientProvider({ children }: QueryClientProviderProps) {
    const queryClient = getQueryClient()
    return (
        <QCP client={queryClient}>
            {children}
            <ReactQueryDevtools />
        </QCP>
    )
}
