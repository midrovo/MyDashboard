"use client";

import React, { useState } from 'react'
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

interface Props {
    value?: number
}

export const CounterHook = ({ value = 10 } : Props) => {
    const [ index, setIndex ] = useState(value)

    const aumentarCarrito = () => setIndex(index + 1);
    const reducirCarrito = () => setIndex(index - 1);
    
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <span className="text-xl">Productos en el carrito</span>
            <span className="text-9xl my-3">{ index }</span>
            <div className="flex">
                <button className="w-20 py-3 rounded-full content-center bg-gray-900 mr-2 hover:bg-gray-700 transition-all" onClick={ aumentarCarrito }>
                    <IoAddOutline className="mx-auto" size={ 30 } color="white"/>
                </button>
                <button className="w-20 py-3 rounded-full bg-gray-900 ml-2 hover:bg-gray-700 transition-all" onClick={ reducirCarrito }>
                    <IoRemoveOutline className="mx-auto" size={ 30 } color="white"/>
                </button>
            </div>
        </div>
  )
}
