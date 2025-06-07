'use client'
import { CATEGORY_DATA } from '@/constants'
import useFilterStore from '@/store/useFilterStroe'
import React from 'react'
import cn from 'classnames'

const CategoryList = () => {
  const { setFilterValue, filterValue } = useFilterStore()
  return (
    <div className="z-1 fixed inset-x-0 top-20 mx-auto mb-6 flex w-full flex-nowrap gap-6 overflow-x-scroll bg-white px-2 pr-16 sm:pl-24">
      {CATEGORY_DATA?.map((category) => (
        <button
          type="button"
          key={category.title}
          className={cn(
            'w-[4.5rem] flex-none justify-center gap-3 py-4 text-center text-gray-500 transition hover:text-gray-700',
            {
              'font-semibold text-black underline underline-offset-8':
                category.title === filterValue?.category,
            },
          )}
          onClick={() => {
            if (filterValue?.category === category.title) {
              // 같은 카테고리를 다시 누르면 해제
              setFilterValue({ ...filterValue, category: '' })
            } else {
              // 새로운 카테고리 선택
              setFilterValue({ ...filterValue, category: category.title })
            }
          }}
        >
          <div className="flex flex-col justify-center gap-3">
            <div className="mx-auto text-2xl">
              <category.Icon />
            </div>
            <div className="text-center text-[0.8rem] text-gray-700">
              {category.title}
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}

export default CategoryList
