import { CounterHook } from "@/hooks";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Counter Page',
    description: 'Contador de carrito'
}

export default function Counter() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <span className="text-2xl text-center text-blue-600 font-semibold tracking-widest">Productos en el carrito</span>
            <CounterHook value={ 10 }/>
        </div>
    )
}