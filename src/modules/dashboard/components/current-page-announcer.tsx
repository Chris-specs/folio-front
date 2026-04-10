'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import { DASHBOARD_MENU_ITEMS } from '../constants/sidebar'

export function CurrentPageAnnouncer() {
    const segment = useSelectedLayoutSegment()

    return (
        <span className="text-lg font-medium md:text-base">
            {
                DASHBOARD_MENU_ITEMS.find(
                    (item) => item.path === `/dashboard/${segment}`
                )?.name
            }
        </span>
    )
}
