import Link from "next/link"
import { IoCafeOutline } from "react-icons/io5"

interface Props {
  title: string,
  subtitle: string,
  label?: string,
  icon?: React.ReactNode,
  href?: string,

}

export const SimpleWidget = ({ title, subtitle, label, icon, href }: Props) => {
  return (
    <div className="bg-white shadow-xl m-3 px-3 py-4 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2">
      <div className="flex flex-col items-center">
        <div>
          <h2 className="font-bold text-gray-600 text-center">{ label }</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center">
            { icon }
            <div id="temp" className="text-start ml-5">
              <h4 className="text-5xl text-center">{ title }</h4>
              <p className="text-xs max-w-36 text-gray-500">{ subtitle }</p>
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
            <Link href={ `${ href }` } className="text-indigo-600 text-xs font-medium hover:bg-blue-600 hover:text-white transition-all hover:px-5 hover:rounded-full hover:py-2">Más</Link>
        </div>
        
      </div>
    </div>
  )
}