import { Home03Icon, Settings01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

type MenuItems =
    | 'Inicio'
    | 'Pedidos'
    | 'Productos'
    | 'Informes y estadisticas'
    | 'Punto de venta'
    | 'Ajustes'

interface PathProps {
    name: MenuItems
    path: string
    isEnabled: boolean
    isShow: boolean
}

export interface DashboardMenuItemProps extends PathProps {
    subpaths?: PathProps[]
    icon: React.ReactNode
}

export const DASHBOARD_MENU_ITEMS: DashboardMenuItemProps[] = [
    {
        name: 'Inicio',
        path: '/dashboard/home',
        isShow: true,
        isEnabled: true,
        icon: <HugeiconsIcon icon={Home03Icon} />
    },
    {
        name: 'Ajustes',
        path: '/dashboard/settings',
        isShow: false,
        isEnabled: false,
        icon: <HugeiconsIcon icon={Settings01Icon} />
    }
]
