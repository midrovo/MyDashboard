import { CounterHook } from "@/app/hooks";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Counter Page',
    description: 'Contador de carrito'
}

export default function Counter() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <span className="text-2xl text-blue-600 font-semibold tracking-widest">Productos en el carrito</span>
            <CounterHook value={ 10 }/>
        </div>
    )
}