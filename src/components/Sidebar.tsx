import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoLogoGithub, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
    {
        path: '/dashboard/main',
        icono: <IoBrowsersOutline size={ 30 }/>,
        title: 'Dashboard',
        subtitle: 'Visualizacion'
    },

    {
        path: '/dashboard/counter',
        icono: <IoCalculator size={ 30 }/>,
        title: 'Counter',
        subtitle: 'Contador Client Side'
    },

    {
        path: '/dashboard/pokemons',
        icono: <IoLogoGithub size={ 30 }/>,
        title: 'Pokemons',
        subtitle: 'Listado de Pokemones'
    },
]

export const Sidebard = () => {
  return (
        <div className="flex bg-gray-900 w-80">
            <div className="flex justify-between flex-col m-6 max-w-64">
                <div className="text-white">
                    <h1 className="text-2xl font-bold flex flex-wrap items-center">
                        <IoLogoReact className="mr-2"/>
                        <span> MGI - { '{' }</span>
                        <span className="text-blue-600 mx-2">DEV</span>
                        <span>{ '}' }.</span>
                    </h1>
                    <p className="text-gray-400 text-base font-semibold mt-2">Manage your actions and activities</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-400 text-base font-semibold text-justify mb-2">Welcome back,</p>
                    <div className="flex items-center">
                        <Image className="rounded-full" src= {"https://scontent.fgye26-1.fna.fbcdn.net/v/t39.30808-6/428646038_1606435816850640_987912006696994798_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A36au6CETEIAX-aZ2-D&_nc_ht=scontent.fgye26-1.fna&oh=00_AfAIYjA0M18vK0z1Rs4jBIHt3Xc0hxR-5-B68hT6_RmmjA&oe=6606ED81" } width={ 50 } height={ 50 } alt=""/>
                        <p className="text-white ml-3 text-lg">Mauricio Idrovo</p>
                    </div>
                </div>
                <div className="flex flex-col text-white h-3/5">

                    {
                        menuItems.map(item => (
                            <SidebarMenuItem key={ item.path } { ...item }/>
                        ))
                    }
                </div>
            </div>
        </div>
  )
}
