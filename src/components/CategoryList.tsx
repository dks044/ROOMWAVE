'use client'
import { CATEGORY_DATA } from '@/constants'
import useFilterStore from '@/store/useFilterStroe'
import React from 'react'
import cn from 'classnames'

const CategoryList = () => {
  const { setFilterValue, filterValue } = useFilterStore()
  return (
    <div className="flex gap-6 fixed top-20 inset-x-0 mx-auto overflow-x-scroll w-full flex-nowrap px-2 sm:pl-24 pr-16 bg-white z-10 mb-6 ">
      {CATEGORY_DATA?.map((category) => (
        <button
          type="button"
          key={category.title}
          className={cn(
            'w-[4.5rem] flex-none text-gray-500 hover:text-gray-700 gap-3 justify-center text-center py-4 transition',
            {
              'text-black font-semibold underline underline-offset-8':
                category.title === filterValue.category,
            },
          )}
          onClick={() => {
            setFilterValue({ ...filterValue, category: category.title })
          }}
        >
          <div className="flex flex-col justify-center gap-3">
            <div className="text-2xl mx-auto">
              <category.Icon />
            </div>
            <div className="text-gray-700 text-[0.8rem] text-center">
              {category.title}
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}

export default CategoryList
