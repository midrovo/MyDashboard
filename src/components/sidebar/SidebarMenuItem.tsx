'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import style from "./ItemStyle.module.css"

interface Props {
    path: string,
    icono: JSX.Element,
    title: string,
    subtitle: string,
}

export const SidebarMenuItem = ({ path, icono, title, subtitle } : Props) => {
    const pathName = usePathname()

    return (
        <Link
            href={ path }
            className={ `${ style.link } ${ pathName === path && style['active-link'] }` }>
            <div>
                { icono }
            </div>
            <div className="flex flex-col">
                <span className="font-semibold">{ title }</span>
                <span className="text-gray-400 text-sm">{ subtitle }</span>
            </div>
        </Link>
  )
}
