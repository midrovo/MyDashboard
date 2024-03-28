"use client";

import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'
import { IoPricetagsOutline } from 'react-icons/io5';

export const WidgetGrid = () => {
    const count = useAppSelector( (state) => state.counter.count )

    return (
    <div className="flex justify-center items-center flex-wrap p-2">
        <SimpleWidget
            title={ `${ count }`  }
            subtitle='Productos en carrito de compra'
            label='Contador'
            icon= { <IoPricetagsOutline size={ 70 } className='text-blue-600'/> }
            href='/dashboard/counter'
        />
    </div>
  )
}
