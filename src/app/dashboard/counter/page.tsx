import { CounterHook } from "@/hooks";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Counter Page',
    description: 'Contador de carrito'
}

export default function Counter() {
    return (
        <CounterHook value={ 10 }/>
    )
}