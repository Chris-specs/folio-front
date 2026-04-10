export const PERIODS = [
    {
        name: 'Todo',
        value: 'all',
        days: undefined
    },
    {
        name: '1 año',
        value: '1y',
        days: 365
    },
    {
        name: '3 meses',
        value: '3m',
        days: 90
    },
    {
        name: '30 días',
        value: '1m',
        days: 30
    },
    {
        name: '7 días',
        value: '7d',
        days: 7
    }
] as const

export const DEFAULT_PERIOD = '1m'

export type Period = (typeof PERIODS)[number]['value']
