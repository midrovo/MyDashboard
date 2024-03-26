import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";
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
]

export const Sidebard = () => {
  return (
        <div className="flex bg-gray-900 h-full w-80 overflow-hidden overflow-y-auto">
            <div className="flex justify-between flex-col m-6 max-w-64">
                <div className="text-white">
                    <h1 className="text-2xl font-bold flex items-center">
                        <IoLogoReact className="mr-2"/>
                        <span> MGI - {'{ '}</span>
                        <span className="text-blue-600 mx-2">DEV</span>
                        <span>{' }'}.</span>
                    </h1>
                    <p className="text-gray-400 text-base font-semibold text-justify">Manage your actions and activities</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-400 text-base font-semibold text-justify">Welcome back,</p>
                    <div className="flex items-center">
                        <Image className="rounded-full" src= {"https://scontent.fgye26-1.fna.fbcdn.net/v/t39.30808-6/428646038_1606435816850640_987912006696994798_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A36au6CETEIAX-aZ2-D&_nc_ht=scontent.fgye26-1.fna&oh=00_AfAIYjA0M18vK0z1Rs4jBIHt3Xc0hxR-5-B68hT6_RmmjA&oe=6606ED81" } width={ 50 } height={ 50 } alt=""/>
                        <p className="text-white ml-3 text-lg">Mauricio Idrovo</p>
                    </div>
                </div>
                <div className="flex flex-col text-white h-85">

                    {
                        menuItems.map(item => (
                            <SidebarMenuItem key={ item.path } { ...item }/>
                        ))
                    }

                    {/* <Link href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">Database</span>
                            <span className="text-gray-400 text-sm">Data Manager</span>
                        </div>
                    </Link> */}
                </div>
            </div>
        </div>
  )
}
